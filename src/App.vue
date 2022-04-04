<script setup>
import SiteAside from "./components/SiteAside/index.vue";
import Layout from "./components/Layout/index.vue";
</script>

<template>
  <Layout>
    <template v-slot:menu>
      <SiteAside />
    </template>
    <template v-slot:center>
      <router-view />
    </template>
  </Layout>
</template>

<style>
</style>
