<template>
  <div class="card mt-3" style="width: 22rem">
    <div class="card-body">
      <div class="row">
        <div class="col text-center">
          <img src="/assets/img/avatar.svg" alt="Avatar" class="rounded" width="100" height="100" />
          <h6 class="card-text mt-3">Violet Mendoza</h6>
          <p class="mt-3"><span class="badge text-secondary bg-primary">Author</span></p>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex">
          <div class="col-4 fs-3 m-0 text-primary">
            <i class="bi bi-check2-square" style="background-color: aliceblue"></i>
          </div>
          <div class="col m-0">
            <p class="m-0">1.23k</p>
            <p class="text-secondary">Task Done</p>
          </div>
        </div>
        <div class="col d-flex">
          <div class="col-3 fs-3 m-0 text-primary">
            <i class="bi bi-handbag" style="background-color: aliceblue"></i>
          </div>
          <div class="col">
            <p class="m-0">568</p>
            <p class="text-secondary">Projects Done</p>
          </div>
        </div>
      </div>
      <div class="row border-bottom m-1">
        <h6 class="m-3">Details</h6>
      </div>
      <div class="mb-2">
        <p v-for="(item,index) in userInfo" v-bind:key="index" class="m-1"><span class="fw-semibold">{{ item.title }}: </span>{{ item.info }}</p>
      </div>
      <div class="my-3 text-center">
        <a href="#" class="btn btn-primary text-light m-3">Edit</a>
        <a href="#" class="btn text-danger m-3r" style="background-color: #facfd1">Suspend</a>
      </div>
    </div>
  </div>
  <div class="card mt-3" style="width: 22rem">
    <div class="card-body">
      <p class="mt-3"><span class="badge text-secondary bg-primary">Standard</span></p>
      <p class="text-end">
        <span class="text-primary fs-6 align-top text-semibold">$</span
        ><span class="text-primary fs-1 text-semibold">99</span> month
      </p>
      <ul class="text-secondary">
        <li>10 users</li>
        <li>Up to 10 GB storage</li>
        <li>Basic support</li>
      </ul>
      <div class="row d-flex">
        <p class="col text-start">Days</p>
        <p class="col text-end">26 of 30 days</p>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 75%"></div>
      </div>
      <p class="text-secondary">4 days remaining</p>

      <a href="#" class="btn btn-primary text-light w-100">Upgrade</a>
    </div>
  </div>
</template>
<script setup>
const userInfo = [
  {
    title: 'Username',
    info: '@violet.dev',
  },
  {
    title:'Email',
    info:'violet@example.com'
  },
  {
    title:'Status',
    info:'Active',
  },
  {
    title:'Role',
    info:'Author',
  },
  {
    title:'Tax id.',
    info:'Tax-8965',
  },
  {
    title:'Contact',
    info:'(123) 76543210',
  },
  {
    title:'Languages',
    info:'French',
  },
  {
    title:'Country',
    info:'England',
  }
]
</script>
<style scoped>
.card {
  z-index: 1;
}
</style>
