<template>
  <div class="nav-container">
    <nav id="nav" ref="navRef" class="nav">
      <div class="nav-content">
        <h1 class="nav-icon">
          <a :href="top.link" :title="top.placeholder">
            {{ top.title }}
          </a>
        </h1>
        <div class="nav-links">
          <a v-for="r in relates" :href="r.link" :title="r.placeholder" class="nav-link">
            {{ r.title }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  props: {
    top: {
      type: Object as PropType<{ title: string; link: string; placeholder: string }>,
      default: '',
    },
    relates: {
      type: Array as PropType<{ title: string; link: string; placeholder: string }[]>,
      default: '',
    },
  },
};
</script>

<style scoped>
@import './NavText.styles.scss';
</style>
