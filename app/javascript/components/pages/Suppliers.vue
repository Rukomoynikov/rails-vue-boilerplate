<template>
  <div class="container">
    <OrganizationsList
      :organizations="suppliers" />
    <Pagination
      v-model='selectedPage'
      v-if="suppliers.length" />
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
  data () {
    return {
      selectedPage: 0
    }
  },
  watch: {
    selectedPage (oldVal, nextVal) {
      this.$store.dispatch('getSuppliers', {
        start: this.selectedPage * 50
      })
    }
  },
  computed: {
    suppliers () {
      return (this.$store.state.suppliers && this.$store.state.suppliers.data) || []
    }
  },
  mounted () {
    this.$store.dispatch('getSuppliers')
  }
}
</script>
