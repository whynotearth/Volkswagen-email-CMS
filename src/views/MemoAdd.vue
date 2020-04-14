<template>
  <StepperManager
    :step="currentStep"
    :steps="steps"
    :options="{ submitText: 'Finish & Send', isLastStep: currentStep === steps.length }"
    @changeStep="changeStep"
  >
    <div class="px-0 overflow-y-auto flex h-full">
      <div v-if="currentStep === 1">
        <div class="container p-6 flex-grow">

        </div>
      </div>
      <div v-if="currentStep === 2" class="p-6 bg-primary flex-grow">
        <div class="h-full bg-surface container px-0">surface</div>
      </div>
    </div>
  </StepperManager>
</template>

<script>
import StepperManager from '@/components/StepperManager.vue';

export default {
  name: 'MemoAdd',
  components: { StepperManager },
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
