<template>
  <div class="page h-screen flex flex-col">
    <HeaderSteppable />
    <div class="scrollable-area flex-grow z-2 overflow-y-auto">
      <div class="container py-4 overflow-y-auto">
        <div class="">
          start
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          end
        </div>
      </div>
    </div>
    <footer class="page-footer h-20">
      footer
    </footer>
  </div>
</template>

<script>
import HeaderSteppable from '@/components/HeaderSteppable.vue';

export default {
  name: 'MemoAdd',
  components: { HeaderSteppable }
};
</script>


<style scoped>
.scrollable-area {
  max-height: 
}
</style>