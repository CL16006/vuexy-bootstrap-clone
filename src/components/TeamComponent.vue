<script setup>
/* import { getUsers } from '@/services/users.services'
import { onMounted, ref } from 'vue'

const data = ref([])

const fetchData = async () => {
  data.value = await getUsers()
  console.log(data.value)
}

onMounted(() => {
   fetchData()
}) */
</script>
<template>
  <div class="text-center">
    <p><span class="badge text-primary bg-light">Our Great Team</span></p>
    <h3 class="text-dark">
      <span class="fw-bold" style="text-shadow: 0px 3px 5px rgba(0, 0, 255, 0.5); ">Supported</span> by Real People
    </h3>
    <p class="text-secondary">
      Who is behind these great-looking interfaces?
    </p>
  </div>
  <div class="row d-flex p-3 m-auto align-items-center">
    <div class="card m-2 col-sm-12" style="width: 15rem" v-for="(user,index) in data" v-bind:key="index">
      <div class="card-body">
        <img :src="user.picture.large" class="card-img-top mb-3 rounded-4" alt="..." />
        <h5 class="card-title text-center text-dark">{{ user.name.first }} {{ user.name.last }}</h5>
        <p class="card-text  text-center text-secondary">
          {{ user.email }}
        </p>
      </div>
    </div>
  </div>
</template>
