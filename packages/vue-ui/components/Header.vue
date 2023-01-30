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

<script setup lang="ts">
import { Link } from "../../types";

interface HeaderProps {
  top: Link;
  relates: Link;
}
const props = defineProps<HeaderProps>()
</script>

<style scoped>
@import './Header.styles.scss';
</style>
