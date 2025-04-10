<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="text-dark" scope="col" v-for="(item, index) in columns" v-bind:key="index">
          {{ item.header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="" v-for="(item, index) in paginatedData" v-bind:key="index">
        <td class="text-dark">{{ item.project }}</td>
        <td class="text-dark">{{ item.leader }}</td>
        <td class="text-dark">
          <div
            v-for="(team, index) in item.team"
            :key="index"
            class="d-inline p-0 alingn-items-center"
          >
            <img
              :src="team.urlImage"
              alt="avatar"
              class=""
              style="border-radius: 100%; width: 50px; height: 50px; object-fit: cover"
            />
          </div>
        </td>
        <td class="text-dark">
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            :aria-valuenow="item.progress"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" :style="{ width: item.progress + '%' }"></div>
          </div>
          <p>{{ item.progress }}%</p>
        </td>
        <td>{{ item.action }}</td>
      </tr>
    </tbody>
  </table>
  <nav>
    <ul class="pagination justify-content-end">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(1)">Primero</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Anterior</a>
      </li>
      <li
        v-for="page in totalPages"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Siguiente</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)">Último</a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref, computed } from 'vue'
const currentPage = ref(1)
const itemsPerPage = ref(5)

const totalPages = computed(() => {
  return Math.ceil(rows.value.length / itemsPerPage.value)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return rows.value.slice(start, end)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
const columns = ref([
  { header: 'Project' },
  { header: 'Leader' },
  { header: 'Team' },
  { header: 'Progress' },
  { header: 'Action' },
])
const rows = ref([
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '45',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '30',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '10',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '25',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '5',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '60',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '80',
    action: '',
  },
  {
    project: 'Website SEO',
    leader: 'Eileen',
    team: [
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar1.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
      {
        name: 'Kim Karlos',
        urlImage: 'https://cdn.quasar.dev/img/avatar4.jpg',
      },
    ],
    progress: '100',
    action: '',
  },
])
</script>
<style scoped></style>
