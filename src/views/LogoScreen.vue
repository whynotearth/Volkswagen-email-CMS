<template>
  <div class="h-screen bg-brand-gradient flex items-center justify-center">
    <div class="w-40 h-40">

      <svg class="stroke-white w-full h-full">
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
        
      </svg>

      <img
        class="logo-screen--img w-full h-full mb-6 rounded-full p-1"
        contain
        src="https://res.cloudinary.com/whynotearth/image/upload/v1586859428/Volkswagen/cms/logo-light_um5gka.svg"
      />

      <p class="text-white headline">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoScreen',
  props: {
    title: {
      default: ''
    }
  }
};
</script>

<style scoped>
.logo-screen--img {
  border: 4px solid white;
}
</style>
