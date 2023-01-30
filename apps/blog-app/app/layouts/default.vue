<template>
  <Header :top="topUrl" :relates="relateUrls" />
  <router-view />
  <Footer>
    <template #subfield>
      <div class="contact-more">
        <link-text :item="contactUrl">
          <template #custom>
            <NotionLogo />
            <span>{{ contactUrl.placeholder }}</span>
          </template>
        </link-text>
      </div>
    </template>
    <template #copyrightfield>
      <div class="copyright">
        <link-text :item="copyrightUrl">
          <template #custom>
            {{ copyrightUrl.placeholder }}
            <NekohackLogo />
          </template>
        </link-text>
      </div>
    </template>
  </Footer>
</template>

<script setup lang="ts">
import { Footer, Header, LinkText } from 'vue-ui'
import NotionLogo from '~/assets/notion_logo.svg'
import NekohackLogo from '~/assets/nekohack_logo.svg'
import {
  CONTACT_URL as contactUrl,
  COPYRIGHT_URL as copyrightUrl,
  TOP_URL as topUrl,
  RELATE_URL_LIST as relateUrls,
} from '~/utils/constants'
</script>
