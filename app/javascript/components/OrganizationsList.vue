<template>
  <div>
    <div class="listHeader">
      <div class="listHeader__item">
        Наименование
      </div>
      <div class="listHeader__item">
        ИНН
      </div>
      <div class="listHeader__item">
        КПП
      </div>
      <div class="listHeader__item">
        Регион
      </div>
      <div class="listHeader__item">
        Заявок
      </div>
      <div class="listHeader__item">
        Побед
      </div>
    </div>
    <div class="listBody">
        <div v-for="organization in organizations" :key="organization.ogrn" class="listBody__row">
          <div class="listBody__item">
            {{ organization.name }}
          </div>
          <div class="listBody__item">
            {{ organization.inn }}
          </div>
          <div class="listBody__item">
            {{ organization.kpp }}
          </div>
          <div class="listBody__item">
            {{ organization.region_name }}
          </div>
          <div class="listBody__item">
            {{ organization.supplier_count_lot_apps }}
          </div>
          <div class="listBody__item">
            {{ organization.supplier_count_wins }}
          </div>
        </div>
      </div>
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
