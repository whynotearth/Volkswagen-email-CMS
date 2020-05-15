<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader :title="'Choose Category'" :to-link="'/'" />
    </template>
    <template #content>
      <ArticleAddAutoStep />
    </template>
  </LayoutFixedScrollable>
</template>

<script>
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable.vue';
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import ArticleAddAutoStep from '@/components/ArticleAddAutoStep.vue';

export default {
  name: 'ArticleAdd',
  components: { LayoutFixedScrollable, BaseAppBarHeader, ArticleAddAutoStep }
};
</script>
