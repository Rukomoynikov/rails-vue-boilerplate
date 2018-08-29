<template>
  <div>
    <nav
      class="pagination"
      role="navigation"
      aria-label="pagination">
      <button
        type="button"
        class="pagination-previous"
        :disabled="!previousPageButtomActive"
        title="This is the first page"
        @click="$emit('input', --localValue)">Назад</button>
      <button
        @click="$emit('input', ++localValue)"
        type="button"
        :disabled="!nextPageButtonActive"
        class="pagination-next">Вперёд</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    value: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      localValue: null
    }
  },
  watch: {
    value (oldVal, newVal) {
      this.localValue = newVal
    }
  },
  computed: {
    previousPageButtomActive () {
      return this.localValue === 0
    },
    nextPageButtonActive () {
      return true
    }
  },
  created () {
    this.localValue = this.value
  }
}
</script>
