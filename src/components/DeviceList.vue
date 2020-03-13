<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(device, index) in devices" v-bind:key="index">{{ device }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DeviceList',
  props: [ "title", "devices" ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
