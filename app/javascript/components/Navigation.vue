<template>
    <nav class="navbar is-dark is-fixed-top"
         role="navigation"
         aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Home'}" class="navbar-item">
          TradeInspect
        </router-link>
        <a role="button"
           class="navbar-burger"
           aria-label="menu"
           aria-expanded="false"
           @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :style="{ display: isMenuVisible ? 'block' : 'none' }">
        <div class="navbar-end">
          <router-link
            class="navbar-item"
            :to="{ name: 'Customers'}">Заказчики</router-link>
          <router-link
            class="navbar-item"
            :to="{ name: 'Suppliers'}">Поставщики</router-link>
        </div>
      </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isMenuVisible: true
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuVisible = !this.isMenuVisible
    }
  }
}
</script>

<style scoped>
  .navbar-burger {
    color: white;
  }
</style>
