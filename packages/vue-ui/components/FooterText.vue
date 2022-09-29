<template>
  <footer>
    <div class="footer-text">
      <slot name="subfield" />
      <slot name="copyrightfield" />
    </div>
  </footer>
</template>

<style scoped>
@import './FooterText.styles.scss';
</style>
