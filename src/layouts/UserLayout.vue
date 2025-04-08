<script setup>
import { ref } from 'vue'
import SideBarComponent from '@/components/admin/SideBarComponent.vue'
import HeaderComponent from '@/components/admin/HeaderComponent.vue'
import { RouterView } from 'vue-router'
import UserInfoComponent from '@/components/users/UserInfoComponent.vue'

// Controla si el sidebar está colapsado
const isSidebarCollapsed = ref(false)

// Función para cambiar el estado del sidebar
function toggleSidebarCollapse() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>
<template>
  <div class="container">
    <HeaderComponent @toggle="toggleSidebarCollapse"></HeaderComponent>
    <SideBarComponent
      :isCollapsed="isSidebarCollapsed"
      @toggle="toggleSidebarCollapse"
    ></SideBarComponent>
    <div class="row content">
      <div class="col-4">
        <UserInfoComponent></UserInfoComponent>
      </div>
      <div class="col">
        <nav class="navbar navbar-expand-lg bg-body-tertiary my-3">
          <div class="container-fluid">
            <div class="">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="btn btn-primary text-light" aria-current="page" href="/user/account">Account</a>
                </li>
                <li class="nav-item">
                  <a class="btn btn-primary text-light" aria-current="page" href="/user/security">Security</a>
                </li>
                <li class="nav-item">
                  <a class="btn btn-primary text-light" aria-current="page" href="/user/billing">Billing</a>
                </li>
                <li class="nav-item">
                  <a class="btn btn-primary text-light" aria-current="page" href="/user/notifications">Notifications</a>
                </li>
                <li class="nav-item">
                  <a class="btn btn-primary text-light" aria-current="page" href="/user/connections">Connections</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <RouterView />
      </div>
    </div>
  </div>
</template>
