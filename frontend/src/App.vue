<script setup>

  import { RouterView, RouterLink } from 'vue-router'

  import NavbarComponent from './components/core/NavbarComponent.vue';

</script>

<template>

  <!-- Navbar Section -->
  <NavbarComponent />

  <!-- Main Content -->
  <main>

    <RouterView/>

  </main>

</template>
