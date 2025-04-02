<script setup>
import { defineProps, defineEmits } from 'vue'
import LinkListComponent from './LinkListComponent.vue'

// Recibe el prop 'isCollapsed' para saber si el sidebar está colapsado
const props = defineProps({
  isCollapsed: Boolean,
})

// Define un evento 'toggle' para notificar al componente principal cuando se cambia el estado
const emit = defineEmits(['toggle'])

const linkList = [
  {
    link: '#',
    title: 'Dashboard',
    icon: 'bi bi-house',
  },
  {
    link: '#',
    title: 'Layouts',
    icon: 'bi bi-grid-1x2',
  },
  {
    link: '#',
    title: 'Front-pages',
    icon: 'bi bi-files',
  },
  {
    link: '#',
    title: 'Email',
    icon: 'bi bi-envelope',
  },
  {
    link: '#',
    title: 'Chat',
    icon: 'bi bi-chat-dots',
  },
  {
    link: '#',
    title: 'Calendar',
    icon: 'bi bi-calendar',
  },
  {
    link: '#',
    title: 'Kanban',
    icon: 'bi bi-kanban',
  },
  {
    link: '#',
    title: 'Ecommerce',
    icon: 'bi bi-shop-window',
  },
  {
    link: '#',
    title: 'Academyc',
    icon: 'bi bi-book',
  },
  {
    link: '#',
    title: 'Logistics',
    icon: 'bi bi-truck',
  },
  {
    link: '#',
    title: 'Invoice',
    icon: 'bi bi-cash-coin',
  },
  {
    link: '#',
    title: 'Users',
    icon: 'bi bi-people',
  },
  {
    link: '#',
    title: 'Roles & Permissions',
    icon: 'bi bi-gear',
  },
  {
    link: '#',
    title: 'Pages',
    icon: 'bi bi-file-earmark',
  },
  {
    link: '#',
    title: 'Authentication',
    icon: 'bi bi-lock',
  },
  {
    link: '#',
    title: 'Support',
    icon: 'bi bi-info-circle',
  },
]
</script>

<template>
  <div id="sidebarSupportedContent" :class="['sidebar', { collapsed: props.isCollapsed }, 'overflow-y-auto custom-scroll']">
    <div class="container-fluid">
      <div class="flex-column">
        <img src="/assets/img/airplane.svg" alt="logo" width="100" v-if="!props.isCollapsed" />
        <h6 v-if="!props.isCollapsed">Demo Bootstrap</h6>
        <i
          @click="emit('toggle')"
          :class="isCollapsed ? 'bi bi-circle' : 'bi bi-record-circle'"
          :title="isCollapsed ? 'Expandir' : 'Colapsar'"
        ></i>
      </div>

      <LinkListComponent
        v-for="link in linkList"
        :key="link.title"
        v-bind="link"
        :isCollapsed="isCollapsed"
      />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  background-color: #444a6993;
  color: #f9f9fafa;
  padding-top: 20px;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar.collapsed .nav-link span {
  display: none;
}

.sidebar.collapsed:hover {
  width: 200px;
}

.sidebar.collapsed:hover .nav-link span {
  display: inline;
}

@media (max-width: 768px) {
  .sidebar {
    width: 0;
    overflow-x: hidden;
  }

  .sidebar.active {
    width: 200px;
  }

  .sidebar.collapsed {
    width: 60px;
  }

  .sidebar.collapsed:hover {
    width: 200px;
  }
}

@media (min-width: 769px) {
  .sidebar.collapsed {
    width: 60px;
  }
}

/* Estilo para navegadores basados en WebKit (Chrome, Edge, Safari) */
.custom-scroll::-webkit-scrollbar {
  width: 5px; /* Ancho de la barra */
}

.custom-scroll::-webkit-scrollbar-track {
  background: #444a6993; /* Color del fondo */
  border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #7367f0; /* Color del scroll */
  border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #7367f0; /* Color al pasar el mouse */
}
</style>
