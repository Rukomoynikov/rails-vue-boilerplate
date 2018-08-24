<template>
  <div></div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'OrganizationsList',
    mounted () {
      axios.get('/api/suppliers.json')
    }
  }
</script>
