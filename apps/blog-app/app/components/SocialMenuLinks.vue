<template>
  <div class="social-menu social-menu-horizontal">
    <link-text v-for="url in SOCIAL_MENU_LIST" :key="url.category" :item="url" />
  </div>
</template>

<script lang="ts">
import { LinkText } from 'vue-ui'
import { useWebShareSetup } from '~/hooks/useWebShare'
import { SOCIAL_MENU_LIST } from '~/utils/constants'

export default {
  components: {
    LinkText,
  },
  props: {
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props: { title: string; slug: string }, ctx: unknown) {
    const webShare = () => {
      window !== undefined && useWebShareSetup(props.title, props.slug)
    }
    return { SOCIAL_MENU_LIST, webShare }
  }
}
</script>
