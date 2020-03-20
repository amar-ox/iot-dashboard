<template>
  <div id="app">
    <AppHeader title="Welcome to my IoT-dashboard" v-bind:status="status"/>
    <div class="wrapper d-flex">
      <div class="sideMenu">
        <div class="sidebar">
          <DeviceList title="Active devices" v-bind:data="devices"/>
        </div>
      </div>
      <div class="content">
        <main>
          <div class="container-flluid">
            <Content v-bind:data="content"/>
          </div>
        </main>
      </div>
    </div>      
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import DeviceList from './components/DeviceList.vue'
import Content from './components/Content.vue'

import AWSIoTData from 'aws-iot-device-sdk'
import AWS from 'aws-sdk/global'

import { EventBus } from './eventbus.js';

var awsConfiguration = {
  poolId: 'us-east-2:4088aee3-7e3c-4798-8ceb-6bf64a2e7015',
  host: 'a1fo1o4ekuzmk2-ats.iot.us-east-2.amazonaws.com',
  region: 'us-east-2'
};
var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1));
    
AWS.config.region = awsConfiguration.region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: awsConfiguration.poolId
});
var mqttClient = AWSIoTData.device({
  region: AWS.config.region,
  host: awsConfiguration.host,
  clientId: clientId,
  protocol: 'wss',
  maximumReconnectTimeMs: 8000,
  debug: false,
  accessKeyId: '',
  secretKey: '',
  sessionToken: ''
});

export default {
  name: 'App',
  components: {
    AppHeader,
    DeviceList,
    Content
  },

  data () {
    return {
      mainTopic: 'myhouse/data',
      status: 'disconnected',
      deviceNames: [],
      devices: [],
      data: [],
      content: []
    }
  },

  created() {
    this.status = 'connection'
    var cognitoIdentity = new AWS.CognitoIdentity();
    AWS.config.credentials.get(function(err) {
      if (!err) {
        //console.log('retrieved identity: ' + AWS.config.credentials.identityId);
        const params = {
          IdentityId: AWS.config.credentials.identityId
        };
        cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
          if (!err) {
            mqttClient.updateWebSocketCredentials(data.Credentials.AccessKeyId,
                data.Credentials.SecretKey,
                data.Credentials.SessionToken);
          }
        });
      }
    });
    mqttClient.on('connect', this.connectHandler);
    mqttClient.on('reconnect', this.reconnectHandler);
    mqttClient.on('disconnect', this.disconnectHandler);
    mqttClient.on('error', this.errorHandler);
    mqttClient.on('message', this.messageHandler);

    EventBus.$on('selected', index => {
      //console.log(index);
      this.content = []
      if (index >= 0) {
        this.content = this.data[index]
      }
    });
  },
  methods: {
    connectHandler: function() {
      //console.log('connect')
      this.status = 'connected'
      mqttClient.subscribe(this.mainTopic)
    },
    reconnectHandler: function() {
      this.status = 'connection'
      //console.log('reconnect')
    },
    disconnectHandler: function() {
      //console.log('disconnected')
      this.status = 'disconnected'
    },
    errorHandler: function() {
      //console.log('error')
      this.status = 'error'
    },
    messageHandler: function(topic, payload) {
      if (topic === this.mainTopic) {
        //console.log('message: ' + topic + ':' + payload.toString())
        let d = JSON.parse(payload)
        let i = this.deviceNames.indexOf(d.device.name)
        if (i != -1) {
          //console.log('device exists')
          this.data[i].push(d.data)
        } else {
          //console.log('new device')
          this.deviceNames.push(d.device.name)
          this.devices.push(d.device)
          this.data.push([d.data])
        }
      }
    },
  },
}

</script>

<style lang="scss">
</style>
