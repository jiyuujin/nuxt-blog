<template>
  <footer>
    <div class="footer-text">
      <slot name="subfield" />
      <slot name="copyrightfield" />
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  //
};
</script>

<style scoped>
@import './FooterText.styles.scss';
</style>
