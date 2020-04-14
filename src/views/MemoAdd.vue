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
import { mapGetters, mapMutations, mapActions } from 'vuex';

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
    ...mapGetters('jumpstart', ['get_to', 'get_subject', 'get_date', 'get_description']),
    currentStep() {
      return parseInt(this.step);
    }
  },
  methods: {
    ...mapActions('jumpstart', ['test']),
    parseInt,
    changeStep(change) {
      const newStep = parseInt(this.step) + change;
      const wasFirstStep = newStep < 1;
      if (wasFirstStep) {
        return this.$router.push({ name: 'Home' });
      }
      const wasLastStep = newStep > this.steps.length;
      if (wasLastStep) {
        return this.submit();
      }
      this.$router.push({ name: 'MemoAdd', params: { step: newStep } });
    },
    async submit() {
      const params = {
        body: {
          date: this.get_date,
          description: this.get_description,
          to: this.get_to,
          subject: this.get_subject
        }
      };
      try {
        console.log('params', params);

        await this.test({ params });
        alert('Successfully sent');
      } catch (error) {
        alert('Not sent, an error occured.');

        console.log(error);
      }
    }
  }
};
</script>
