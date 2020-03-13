<template>
  <div>
    <p>{{ JSON.stringify(data) }}</p>
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
  /*watch: {
    data: {
      handler: function() {
        this.dataToShow = JSON.stringify(this.data)
      },
      deep: true
    },
  },*/
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
