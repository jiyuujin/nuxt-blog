<template>
  <CssResetButton @click="handleClick">
    <slot />
  </CssResetButton>
</template>

<script setup lang="ts">
import Vue from 'vue'
import CssResetButton from './CssResetButton.vue'

type ButtonProps = Vue.ButtonHTMLAttributes
const props = defineProps<ButtonProps>()

function handleClick() {
  alert("Woooha!")
}
</script>

<style lang="scss" scoped>
@import './Button.styles.scss';
</style>