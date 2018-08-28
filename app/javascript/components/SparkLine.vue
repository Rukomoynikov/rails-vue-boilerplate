<template>
  <svg
    :width="chartWidth"
    :height="chartHeight">
    <!--<g style="transform: translate(0, 10px)">-->
      <!--<path :d="line" />-->
    <!--</g>-->
  </svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'SparkLine',
  props: {
    values: {
      type: Object,
      require: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      barWidth: 10,
      chartHeight: '50',
      years: ['2012', '2013', '2014', '2015', '2016', '2017']
    }
  },
  computed: {
    chartWidth () {
      return `${this.barWidth * this.years.length}px`
    }
  },
  mounted () {
    this.calculatePath()
  },
  methods: {
    getScales () {
      const x = d3.scaleTime().range([0, this.chartWidth])
      const y = d3.scaleLinear().range([this.chartHeight, 0])

      d3.axisLeft().scale(x)
      d3.axisBottom().scale(y)
      // x.domain(d3.extent(this.data, (d, i) => i))
      // y.domain([0, d3.max(this.data, d => d)])
      // return { x, y }
    },
    calculatePath () {
      const scale = this.getScales()
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d))
      this.line = path(this.data)
    }
  }
}
</script>

<style scoped>

</style>
