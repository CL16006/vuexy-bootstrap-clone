<template>
  <ul class="nav flex-column" >
    <li class="nav-item">
      <a class="nav-link" :href="props.link">
        <i :class="props.icon"></i>
        <span :class="{ 'collapsed': props.isCollapsed }" >{{ props.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '#',
  },
  icon: {
    type: String,
    default: '',
  },
  isCollapsed: Boolean,
})
</script>

<style scoped>
.nav {
  transition: width 0.3s ease;
}

.sidebar.collapsed .nav-link span {
  display: none;
}

.sidebar.collapsed:hover .nav-link span {
  display: inline;
}

.nav-link {
  color: #f9f9fafa;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 10px;
}

.nav-link:hover {
  background-color: #7367f0;
}

</style>
