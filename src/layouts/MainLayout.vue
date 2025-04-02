<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '../components/HeaderComponent.vue'
</script>
<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <RouterView />
  </div>
</template>
