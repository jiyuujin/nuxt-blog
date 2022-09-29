<template>
  <nav-text />
  <router-view />
  <footer-text>
    <template #subfield>
      <div class="contact-more">
      <a
        :href="contactUrl"
        role="button"
        aria-pressed="true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NotionLogo />
        <span>問い合わせはこちら</span>
      </a>
      </div>
    </template>
    <template #copyrightfield>
      <div class="copyright">
      <a
        href="https://github.com/nekohack"
        role="button"
        aria-pressed="true"
        target="_blank"
        rel="noopener noreferrer"
      >
        ©︎ jiyuujin LAB. by {{ ' ' }}
        <NekohackLogo />
      </a>
      </div>
    </template>
  </footer-text>
</template>

<script setup lang="ts">
import NavText from '~/components/NavText.vue'
import { FooterText } from 'vue-ui'
import NotionLogo from '~/assets/notion.svg'
import NekohackLogo from '~/assets/nekohack_logo.svg'
import { CONTACT_URL as contactUrl } from '~/utils/constants'
</script>
