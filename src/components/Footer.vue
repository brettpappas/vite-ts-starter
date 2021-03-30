<script setup lang="ts">
import { isDark, toggleDark } from '@/logics'
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" title="Home">
      <carbon-campsite />
    </router-link>

    <a class="icon-btn mx-2" title="Toggle Darkmode" @click="toggleDark">
      <carbon-sun v-if="isDark" />
      <carbon-moon v-else />
    </a>

    <router-link class="icon-btn mx-2" to="/about" title="About">
      <carbon-dicom-overlay />
    </router-link>
  </nav>
</template>
