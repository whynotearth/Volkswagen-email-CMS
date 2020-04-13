<template>
  <div class="bg-surface sticky shadow-md inset-x-0 top-0 z-3 py-1">
    <div class="container">
      <BaseStepper :steps="['Internal Memo', 'Preview Memo']" :steps-count="2" :current-step="1"></BaseStepper>
    </div>
  </div>
</template>

<script>
import BaseStepper from '@/components/BaseStepper.vue';

export default {
  name: 'HeaderSteppable',
  components: { BaseStepper }
};
</script>
