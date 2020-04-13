<template>
  <footer class="page-footer h-12 relative">
    <div class="absolute h-full w-full flex z-1">
      <div class="bg-surface flex-grow"></div>
      <div class="bg-primary flex-grow"></div>
    </div>
    <div class="container flex items-center h-full z-2 relative">
      <a class="link-back block bg-surface flex h-full items-center justify-start px-6 font-semibold text-error">
        Back
      </a>
      <a
        class="link-forward block bg-primary flex-grow text-white flex h-full items-center justify-end px-6 font-semibold"
      >
        Preview Memo
      </a>
    </div>
  </footer>
</template>

<style scoped>
.link-back {
  width: 28.88889%;
}
</style>