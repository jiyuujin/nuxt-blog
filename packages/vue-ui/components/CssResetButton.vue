<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import Vue from 'vue'

type CssResetButtonProps = Vue.ButtonHTMLAttributes
const props = defineProps<CssResetButtonProps>()

function handleClick() {
  alert("Woooha!")
}
</script>

<style lang="scss" scoped>
@import './CssResetBurron.styles.scss';
</style>
