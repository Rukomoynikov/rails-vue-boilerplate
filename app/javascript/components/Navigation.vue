<template>
  <nav
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'Home'}"
          class="navbar-item">
          TradeInspect
        </router-link>
        <a
          :class="{ 'is-active': isMenuVisible }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMenu">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div
        :class="{ 'is-active': isMenuVisible }"
        class="navbar-menu">
        <div class="navbar-end">
          <router-link
            :to="{ name: 'Customers'}"
            class="navbar-item">Заказчики</router-link>
          <router-link
            :to="{ name: 'Suppliers'}"
            class="navbar-item">Поставщики</router-link>
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
      isMenuVisible: false
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
