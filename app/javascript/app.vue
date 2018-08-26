<template>
  <div id="app" v-cloak>
    <transition>
      <Navigation />
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigation from 'components/Navigation'

export default {
  components: { Navigation },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

[v-cloak] {
  display: none;
}
</style>
