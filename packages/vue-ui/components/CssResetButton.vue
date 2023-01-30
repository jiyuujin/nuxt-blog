<template>
  <button v-bind="props">
    <slot />
  </button>
</template>

<script setup lang="ts">
import Vue from 'vue'

interface CssResetButtonProps extends Vue.ButtonHTMLAttributes {}
const props = defineProps<CssResetButtonProps>()
</script>

<style lang="scss" scoped>
@import './CssResetBurron.styles.scss';
</style>
