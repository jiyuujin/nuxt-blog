<template>
  <nav-text
    :top="{
      title: 'webneko.dev',
      link: '/apps/blog-app/app/public',
      placeholder: 'トップへ戻る',
    }"
    :relates="[{
      title: 'nekohack.me',
      link: 'https://nekohack.me/',
      placeholder: '自身が代表を務める org のウェブサイト',
    }, {
      title: 'Yuma Kitamura | nekohack.me',
      link: 'https://yuma-kitamura.nekohack.me/',
      placeholder: '自身のプロフィールサイト',
    }]"
  />
  <router-view />
  <footer-text />
</template>

<script setup lang="ts">
import { NavText } from 'vue-ui'
import FooterText from '~/components/FooterText.vue'
</script>
