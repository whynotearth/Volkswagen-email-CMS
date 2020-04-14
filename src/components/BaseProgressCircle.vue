<template>
  <svg class="w-20 h-20 text-inactive stroke-current">
    <circle class="text-gray-300" :cx="centerX" :cy="centerY" :r="radius" fill="transparent" />
    <circle
      :class="progressClasses"
      class="text-button stroke-current progress-bar"
      :cx="centerX"
      :cy="centerY"
      :r="radius"
      fill="transparent"
      :stroke-dasharray="strokeDashArray"
    />
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'BaseProgressCircle',
  props: {
    centerX: Number,
    centerY: Number,
    radius: Number,
    percentageProgress: Number,
    progressClasses: {
      type: String,
      default: 'text-secondary'
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    progressCircumference() {
      return this.circumference * this.percentageProgress;
    },
    strokeDashArray() {
      return `${this.progressCircumference} ${this.circumference}`;
    }
  }
};
</script>
