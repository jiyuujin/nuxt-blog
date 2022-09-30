<template>
  <div :class="item.category">
    <a
      :href="item.link"
      :title="item.title"
      role="button"
      :aria-label="item.title"
      aria-pressed="true"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StripeLogo v-if="item.category === 'stripe'" />
      <BuyMeACoffeeLogo v-if="item.category === 'buy-me-a-coffee'" />
    </a>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import BuyMeACoffeeLogo from "../assets/buy_me_a_coffee_logo.svg";
import StripeLogo from "../assets/stripe_logo.svg";

export default {
  components: {
    BuyMeACoffeeLogo,
    StripeLogo,
  },
  props: {
    item: {
      type: Object as PropType<{
        title: string;
        placeholder: string;
        link: string;
        category: 'stripe' | 'buy-me-a-coffee';
      }>,
      default: () => {}
    },
  },
};
</script>

<style scoped>
@import './LinkText.styles.scss';
</style>
