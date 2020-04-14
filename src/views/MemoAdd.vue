<template>
  <StepperManager
    :step="currentStep"
    :steps="steps"
    :options="{ submitText: 'Finish & Send', isLastStep: currentStep === steps.length }"
    @changeStep="changeStep"
  >
    <div class="px-0 overflow-y-auto flex h-full">
      <MemoAddStep1 v-if="currentStep === 1"></MemoAddStep1>
      <MemoAddStep2 v-if="currentStep === 2"></MemoAddStep2>
      <!-- <SplashScreen v-if="currentStep === 2"></SplashScreen> -->
    </div>
  </StepperManager>
</template>

<script>
import StepperManager from '@/components/StepperManager.vue';
import MemoAddStep1 from '@/components/MemoAddStep1.vue';
import MemoAddStep2 from '@/components/MemoAddStep2.vue';
// import SplashScreen from '@/components/SplashScreen.vue';

export default {
  name: 'MemoAdd',
  components: { StepperManager, MemoAddStep1, MemoAddStep2 },
  props: {
    step: {
      default: 1
    }
  },
  data: () => ({
    steps: ['Internal Memo', 'Preview Memo']
  }),
  computed: {
    currentStep() {
      return parseInt(this.step);
    }
  },
  methods: {
    parseInt,
    changeStep(change) {
      const newStep = parseInt(this.step) + change;
      const wasFirstStep = newStep < 1;
      if (wasFirstStep) {
        return this.$router.push({ name: 'Home' });
      }
      const wasLastStep = newStep > this.steps.length;
      if (wasLastStep) {
        console.log('TODO: submit');
        return this.$router.push({ name: 'Home' });
      }
      this.$router.push({ name: 'MemoAdd', params: { step: newStep } });
    }
  }
};
</script>
