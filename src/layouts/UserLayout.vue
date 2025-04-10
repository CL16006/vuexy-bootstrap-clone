<script setup>
import { ref } from 'vue'
import SideBarComponent from '@/components/admin/SideBarComponent.vue'
import HeaderComponent from '@/components/admin/HeaderComponent.vue'
import { RouterView, useRoute } from 'vue-router'
import UserInfoComponent from '@/components/users/UserInfoComponent.vue'

// Controla si el sidebar está colapsado
const isSidebarCollapsed = ref(false)

// Función para cambiar el estado del sidebar
function toggleSidebarCollapse() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

// Estado de la pestaña activa
const activeTab = ref(0)

// Función para seleccionar la pestaña
const selectTab = (index) => {
  activeTab.value = index
}

// Definir las pestañas con su información
const tabs = ref([
  { id: 'account', name: 'Account', url: '/user/account' },
  { id: 'security', name: 'Security', url: '/user/security' },
  { id: 'billing', name: 'Billing', url: '/user/billing' },
  { id: 'notifications', name: 'Notifications', url: '/user/notifications' },
  { id: 'connections', name: 'Connections', url: '/user/connections' },
])

// Obtener la ruta actual para marcar la pestaña activa
const route = useRoute()

// Actualiza el índice de la pestaña activa según la ruta actual
const updateActiveTab = () => {
  const currentTab = tabs.value.findIndex(tab => tab.url === route.path)
  activeTab.value = currentTab !== -1 ? currentTab : 0
}

// Observa los cambios en la ruta
import { watch } from 'vue'
watch(route, updateActiveTab, { immediate: true })
</script>

<template>
  <div class="container">
    <HeaderComponent @toggle="toggleSidebarCollapse" />
    <SideBarComponent
      :isCollapsed="isSidebarCollapsed"
      @toggle="toggleSidebarCollapse"
    />
    <div class="row content">
      <div class="col-sm-12 col-md-12 col-lg-4">
        <UserInfoComponent />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-8">
        <nav class="navbar navbar-expand-lg bg-body-tertiary my-3">
          <div class="container-fluid">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                <router-link
                  class="nav-link"
                  :to="tab.url"
                  :class="{ active: activeTab === index }"
                  @click="selectTab(index)"
                  :aria-controls="tab.id"
                  :aria-selected="activeTab === index ? 'true' : 'false'"
                >
                  {{ tab.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Personalización de las pestañas activas */
.nav-link.active {
  color: #fff; /* Cambia el color del texto a blanco */
  background-color: #007bff; /* Cambia el fondo a color primary */
}
</style>

