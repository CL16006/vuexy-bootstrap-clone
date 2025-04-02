<script setup>
const cards=[
  {
    title:'Quality Code',
    text:'Code structure that all developers will easily understand and fall in love with.',
    url:'/assets/img/quality-code.svg',
  },
  {
    title:'Continuos Update',
    text:'Free updates for the next 12 months, including new demos and features.',
    url:'/assets/img/airplane.svg'
  },
  {
    title:'Started-kit',
    text:'Start your project quickly without having to remove unnecessary features.',
    url:'assets/img/started.svg'
  },
  {
    title:'API Ready',
    text:'Just change the endpoint and see your own data loaded within seconds.',
    url:'assets/img/check.svg'
  },
  {
    title:'Excellent Support',
    text:'An easy-to-follow doc with lots of references and code examples.',
    url:'assets/img/avatar.svg'
  },
  {
    title:'Well Documented',
    text:'An easy-to-follow doc with lots of references and code examples.',
    url:'assets/img/document.svg'
  }
]
</script>
<template>
  <div class="text-center">
    <p><span class="badge text-primary bg-light">Useful Features</span></p>
    <h3 class="text-dark">
      <span class="fw-bold"  style="text-shadow: 0px 3px 5px rgba(0, 0, 255, 0.5); ">Everything you need</span> to start your next project
    </h3>
    <p class="text-secondary">
      Not just a set of tool , the package includes ready-to-deploy conceptual application.
    </p>
    <div class="row d-flex p-3 m-auto align-items-center">
      <div class="col-md-4 card bg-light p-3 m-3" style="width: 18rem" v-for="(item,index) in cards" v-bind:key="index">
      <div class="card-body text-center">
        <img class="pt-2" v-bind:src="item.url" alt="imagen" style="max-width: 100px; max-height: 90px;">
        <h5 class="card-title py-2">{{ item.title }}</h5>
        <p class="card-text">
          {{ item.text }}
        </p>
      </div>
    </div>
    </div>
  </div>
</template>
