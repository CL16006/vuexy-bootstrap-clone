<script setup>
import { ref } from 'vue'
import SideBarComponent from '@/components/admin/SideBarComponent.vue'
import HeaderComponent from '@/components/admin/HeaderComponent.vue'
import { RouterView } from 'vue-router'

// Controla si el sidebar está colapsado
const isSidebarCollapsed = ref(false)

// Función para cambiar el estado del sidebar
function toggleSidebarCollapse() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

</script>
<template>
  <div class="container">
    <HeaderComponent  @toggle="toggleSidebarCollapse"></HeaderComponent>
    <SideBarComponent
      :isCollapsed="isSidebarCollapsed"
      @toggle="toggleSidebarCollapse"
    ></SideBarComponent>
    <RouterView />
  </div>
</template>
