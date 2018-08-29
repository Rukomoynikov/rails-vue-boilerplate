<template>
  <svg
    :width="chartWidth"
    :height="chartHeight">
    <transition-group
      tag="g"
      name="list">
      <rect
        v-for="(figure, index) in bars"
        :key="index"
        :width="figure.width"
        :height="figure.height"
        :style="figure.style" />
      <line
        key="line"
        :y1="chartHeight"
        :x2="chartWidth"
        :y2="chartHeight"
        x1="0"
        style="stroke:rgb(255,0,0);stroke-width:2" />
    </transition-group>
  </svg>
</template>

<script>
import * as d3 from 'd3'
// {scaleLinear, array} from 'd3-scale'

export default {
  name: 'SparkLine',
  props: {
    points: {
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
      chartHeight: 25,
      years: ['2012', '2013', '2014', '2015', '2016', '2017']
    }
  },
  computed: {
    chartWidth () {
      return `${this.barWidth * this.years.length}px`
    },
    bars () {
      return Object.values(this.points).map((point, i) => {
        const barHeight = this.scale(point)
        return {
          width: this.barWidth,
          height: barHeight,
          style: `fill:#1aaa55; transform: translateX(${(i + 1) * this.barWidth}px) translateY(${this.chartHeight - barHeight}px);`
        }
      })
    },
    scale () {
      const values = Object.values(this.points)

      return d3.scaleLinear()
        .domain([d3.min(values), d3.max(values)])
        .range([0, this.chartHeight])
    }
  }
}
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  .line-enter-active, .line-leave-active {
    transition: all 2s;
    stroke-dashoffset: 0;
  }
  .line-enter, .line-leave-to /* .list-leave-active for <2.1.8 */ {
    stroke-dashoffset: 1000;
  }
</style>
