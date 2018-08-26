<template>
  <div class="container">

    <table class="table is-hoverable is-fullwidth" v-if="organizations">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>ИНН</th>
          <th>КПП</th>
          <th>Регион</th>
          <th>Заявок</th>
          <th>Побед</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="organization in organizations" :key="organization.ogrn">
          <td>{{ organization.name }}</td>
          <td>{{ organization.inn }}</td>
          <td>{{ organization.kpp }}</td>
          <td>{{ organization.region_name }}</td>
          <td>{{ organization.supplier_count_lot_apps }}</td>
          <td>{{ organization.supplier_count_wins }}</td>
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
  name: 'OrganizationsList',
  props: {
    organizations: {
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
