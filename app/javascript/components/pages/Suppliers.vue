<template>
  <div>
    <OrganizationsList
      :organizations="suppliers" />
  </div>
</template>

<script>
import OrganizationsList from '../OrganizationsList.vue'

export default {
  name: 'Suppliers',
  components: {
    OrganizationsList
  },
  computed: {
    suppliers () {
      return this.$store.state.suppliers && this.$store.state.suppliers.data
    }
  },
  mounted () {
    this.$store.dispatch('getSuppliers')
  }
}
</script>
