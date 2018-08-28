<template>
  <div class="container">
    <img :src="require('assets/images/header_logo.png')" >
    <br>
    Аналитика всех этапов закупочного процесса по 44-ФЗ и 223-ФЗ
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
div {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
