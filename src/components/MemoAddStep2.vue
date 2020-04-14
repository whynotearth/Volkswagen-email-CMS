<template>
  <div class="p-6 bg-primary flex-grow">
    <div class="h-full bg-surface text-left p-4">
      <p>{{ get_subject }}</p>
      <p>{{ get_to }}</p>
      <p>{{ get_date }}</p>
      <p>{{ get_description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'MemoAddStep2',
  computed: {
    ...mapGetters('jumpstart', ['get_to', 'get_subject', 'get_date', 'get_description'])
  }
};
</script>
