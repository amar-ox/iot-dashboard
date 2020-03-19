<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <span id="title" class="navbar-brand">{{ title }}</span>
    <span id="status" 
      class="badge badge-pill navbar-nav ml-auto" 
      :class="setClass(status)"
    >{{ status }}</span>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  props: [ "title", "status" ],
  data () {
    return {
    }
  },
  methods: {
    setClass: function(st) {
      if (st === 'connected') {
        return 'badge-success'
      } else if (st === 'connection') {
        return 'badge-warning'
      } else {
        return 'badge-secondary'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
