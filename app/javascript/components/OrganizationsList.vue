<template>
  <div class="container">
    <div v-if="!organizations.length">
      Загрузка организаций
    </div>

    <table v-if="organizations.length"
           class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>ИНН</th>
          <th>КПП</th>
          <th>Регион</th>
          <th>Заявок</th>
          <th>Побед</th>
          <th>Статистика</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="organization in organizations" :key="organization.ogrn">
          <td>
            <router-link :to="{ name: 'Supplier', params: { id: organization.id} }">
              {{ organization.name }}
            </router-link>
          </td>
          <td>{{ organization.inn }}</td>
          <td>{{ organization.kpp }}</td>
          <td>{{ organization.region_name }}</td>
          <td>{{ organization.supplier_count_lot_apps }}</td>
          <td>{{ organization.supplier_count_wins }}</td>
          <td>{{ organization.net_profit }}</td>
        </tr>
      </tbody>
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
