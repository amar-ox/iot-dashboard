<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppHeader title="Welcome to IoT dashboard" v-bind:status="status"/>
    <DeviceList title="Active devices" v-bind:devices="devices"/>
    <Content v-bind:data="data"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import DeviceList from './components/DeviceList.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    DeviceList,
    Content
  },
  data () {
    return {
      status: 'connected',
      devices: ["room 1 sensor","kitchen sensor"],
      data: { 'temp': 12 }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
