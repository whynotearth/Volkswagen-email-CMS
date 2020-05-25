<template>
  <div :class="wrapperClass">
    <div class="tabs">
      <div class="container px-0 md:px-6 flex tg-color-label-mobile w-screen justify-around">
        <button
          class="tabs_item w-2/4"
          type="button"
          v-for="tab in tabs"
          :ref="tab.value"
          :key="tab.title"
          :class="[
            { tabs_item_active: tab.value === currentTab },
            tab.value === currentTab && tabActiveClass ? tabActiveClass : '',
            tabClass
          ]"
          :disabled="tab.disabled || false"
          @click="handleClick(tab.value)"
          v-html="tab.title"
        />
        <div
          class="tabs_active-line"
          :class="lineClass"
          :style="{ width: `${activeLineWidth}px`, transform: `translateX(${activeLineOffset}px)` }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-tabs-animation',
  props: {
    currentTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    updated: {
      type: [Boolean, String, Array],
      default: undefined
    },
    wrapperClass: {
      type: String,
      required: false
    },
    tabClass: {
      type: String,
      required: false
    },
    tabActiveClass: {
      type: String,
      required: false
    },
    lineClass: {
      type: String,
      required: false
    }
  },
  watch: {
    currentTab(newCurrentTab) {
      if (this.newTab === newCurrentTab) return;
      this.moveActiveLine(newCurrentTab);
      this.newTab = newCurrentTab;
    },
    updated() {
      this.moveActiveLine(this.currentTab);
    }
  },
  data: () => ({
    activeLineWidth: 0,
    activeLineOffset: 0,
    newTab: ''
  }),
  methods: {
    handleClick(value) {
      this.$emit('onClick', value);
      this.moveActiveLine(value);
      this.newTab = value;
    },
    moveActiveLine(newValue) {
      if (!this.currentTab) return;
      if (!this.$refs || !this.$refs[newValue] || !this.$refs[newValue][0]) return;
      const element = this.$refs[newValue][0];
      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    }
  },
  mounted() {
    this.moveActiveLine(this.currentTab);
    this.newTab = this.currentTab;
  }
};
</script>
