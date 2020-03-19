<template>
  <div id="content">
    <p v-if="data.length != 0" >{{ JSON.stringify(data) }}</p>
    <p v-if="data.length === 0" >Dashboard presentation...</p>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: [ "data" ],
  data() {
    return {
      dataToShow: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
