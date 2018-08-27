<template>
  <div class="container">
    <AppsList
      :apps="apps || []" />
  </div>
</template>

<script>
import axios from 'axios'
import AppsList from '../AppsList.vue'

export default {
  name: 'Supplier',
  components: {
    AppsList
  },
  data () {
    return {
      apps: null
    }
  },
  computed: {
    supplierURL () {
      return `/api/suppliers/${ this.$route.params.id }/apps`
    }
  },
  mounted () {
    this.getSupplierApps()
  },
  methods: {
    getSupplierApps () {
      axios.get(this.supplierURL)
        .then((response) => {
          this.apps = response.data.data
        })
    }
  }
}
</script>
