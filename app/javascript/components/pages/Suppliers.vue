<template>
  <div>
    <OrganizationsList
      :organizations="suppliers" />
    <Pagination />
  </div>
</template>

<script>
import OrganizationsList from '../OrganizationsList.vue'
import Pagination from '../Pagination'

export default {
  name: 'Suppliers',
  components: {
    OrganizationsList,
    Pagination
  },
  computed: {
    suppliers () {
      return this.$store.state.suppliers && this.$store.state.suppliers.data || []
    }
  },
  mounted () {
    this.$store.dispatch('getSuppliers')
  }
}
</script>
