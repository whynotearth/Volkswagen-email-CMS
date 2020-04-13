<template>
  <div class="page h-screen flex flex-col">
    <StepperHeader />
    <div class="scrollable-area flex-grow z-2 overflow-y-auto">
      <div class="container py-4 overflow-y-auto">
        <div class="">
          start
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          end
        </div>
      </div>
    </div>
    <StepperFooter></StepperFooter>
  </div>
</template>

<script>
import StepperHeader from '@/components/StepperHeader.vue';
import StepperFooter from '@/components/StepperFooter.vue';

export default {
  name: 'MemoAdd',
  components: { StepperHeader, StepperFooter }
};
</script>

<style scoped>
.scrollable-area {
  max-height: ;
}
.page-footer {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
}
</style>
