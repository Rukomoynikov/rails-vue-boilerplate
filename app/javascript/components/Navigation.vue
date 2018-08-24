<template>
  <div>
    <router-link :to="{ name: 'Home'}">TradeInspect</router-link>
    <router-link :to="{ name: 'Customers'}">Customers</router-link>
    <router-link :to="{ name: 'Suppliers'}">Suppliers</router-link>
  </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>
