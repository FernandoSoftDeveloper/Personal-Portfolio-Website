<script setup>

  import { RouterView, RouterLink } from 'vue-router'

  import NavbarComponent from './components/core/NavbarComponent.vue';
  import FooterComponent from './components/core/FooterComponent.vue';

</script>

<template>

  <!-- Navbar Section -->
  <NavbarComponent />

  <!-- Main Content -->
  <main>

    <RouterView/>

  </main>

  <FooterComponent/>

</template>
