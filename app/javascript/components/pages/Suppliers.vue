<template>
  <div></div>
</template>

<script>
export default {
  name: 'Suppliers',
  mounted () {
    this.$store.dispatch('getSuppliers')
  }
}

</script>

<style scoped>

</style>
