<template>
  <div>
    {{ users | json }}
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
