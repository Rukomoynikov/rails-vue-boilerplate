<template>
  <div class="container">
    <div v-if="!apps">
      Загрузка организаций
    </div>

    <table v-if="apps.length"
           class="table is-hoverable is-fullwidth">
      <thead>
      <tr>
        <th>Наименование</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="app in apps" :key="app.id">
        <td>{{ app.contragent }}</td>
      </tr>
      </tbody>

      <tfoot>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 2">2</a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 3">3</a>
          </li>
        </ul>
      </nav>

      </tfoot>

    </table>
  </div>
</template>

<script>
  export default {
    name: 'AppsList',
    props: {
      apps: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .listHeader {
    display: flex;
  }
  .listBody__row {
    display: flex;
  }
</style>
