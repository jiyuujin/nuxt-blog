<template>
  <CssResetButton v-bind="props">
    <slot />
  </CssResetButton>
</template>

<script setup lang="ts">
import Vue from 'vue'
import CssResetButton from './CssResetButton.vue'

interface ButtonProps extends Vue.ButtonHTMLAttributes {}
const props = defineProps<ButtonProps>()
</script>

<style lang="scss" scoped>
@import './Button.styles.scss';
</style>