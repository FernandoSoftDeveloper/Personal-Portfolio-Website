<script setup>

  import { RouterView, RouterLink } from 'vue-router'

</script>

<template>

  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about-me">About Me</RouterLink></li>
      <li><RouterLink to="/my-services">My Services</RouterLink></li>
      <li><RouterLink to="/contact-me">Contact Me</RouterLink></li>
    </ul>
  </nav>

  <RouterView />

</template>
