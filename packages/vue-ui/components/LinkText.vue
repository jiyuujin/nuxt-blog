<template>
  <div :class="item.category !== 'custom' ? item.category : ''">
    <a
      :href="
        item.category === 'twitter' ||
        item.category === 'note' ||
        item.category === 'hatena' ?
        item.link(item.title) : item.link
      "
      :title="item.title"
      role="button"
      :aria-label="item.title"
      aria-pressed="true"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StripeLogo v-if="item.category === 'stripe'" />
      <BuyMeACoffeeLogo v-if="item.category === 'buy-me-a-coffee'" />
      <TwitterLogo v-if="item.category === 'twitter'" />
      <NoteLogo v-if="item.category === 'note'" />
      <HatenaLogo v-if="item.category === 'hatena'" />
      <slot name="custom" v-if="item.category === 'custom'" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { LinkCategory } from "../../types";

import BuyMeACoffeeLogo from "../assets/buy_me_a_coffee_logo.svg";
import StripeLogo from "../assets/stripe_logo.svg";
import TwitterLogo from "../assets/twitter_logo.svg";
import NoteLogo from "../assets/note_logo.svg";
import HatenaLogo from "../assets/hatena_logo.svg";

interface LinkTextProps {
  item: LinkCategory;
}
const props = defineProps<LinkTextProps>();
</script>

<style scoped>
@import './LinkText.styles.scss';
</style>
