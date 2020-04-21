<template>
  <ul class="navbar-nav">
    <li v-for="(device, index) in data" v-bind:key="index" class="nav-item">
      <a 
        href="#"
        class="nav-link px-2 py-2" 
        @click="toggleSelect(index)"
        :class="{ active:index === selected }"
      >
        <i class="material-icons icon">memory</i>
        <span id="name" class="text">{{ device.name }}</span>  
        <p id="label">{{ device.label }}</p>
        <span v-for="dlabel in device.resultColumns" v-bind:key="dlabel"
          class="badge badge-pill badge-info"
        >{{ dlabel }}</span>
      </a>
    </li>
  </ul>
</template>

<script>

import { EventBus } from '../eventbus.js';

export default {
  name: 'DeviceList',
  props: [ "data" ],

  data () {
    return {
      selected: -1
    }
  },

  methods: {
    toggleSelect(index) {
      if (this.selected === index){
        this.selected = -1
      } else {
        this.selected = index
      }
      EventBus.$emit('selected', this.selected)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge {
  margin-right: 5px;
}
</style>
