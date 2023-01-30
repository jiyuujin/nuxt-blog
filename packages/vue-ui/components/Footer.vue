<template>
  <footer>
    <div class="footer-text">
      <slot name="subfield" />
      <slot name="copyrightfield" />
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{}>()
</script>

<style scoped>
@import './Footer.styles.scss';
</style>
