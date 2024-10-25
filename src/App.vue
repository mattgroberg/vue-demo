<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar/Navbar.vue';
</script>
<template>
  <div class="app">
    <Navbar />
    <div class="appBody">
      <RouterView />
    </div>
  </div>
</template>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.appBody {
  padding: 1rem;
}
</style>
