<template>
  <header class="py-4">
    <nav
      class="navbar navbar-expand-lg landing-navbar px-3 px-md-8 text-white border border-white border-3 fw-bold"
      style="background-color: #f3f2f3"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/perro.svg"
            alt="Logo"
            width="50"
            height="50"
            class="d-inline-block align-text-top"
          />
          <h5 class="d-lg-none d-sm-inline d-md-inline align-text-center text-dark fw-bold">
            Demo Bootstrap
          </h5>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fw-bold">
            <i class="bi bi-three-dots-vertical"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(route, index) in routes" v-bind:key="index">
              <RouterLink :to="route.link" class="nav-link text-dark fs-6">{{
                route.name
              }}</RouterLink>
            </li>
          </ul>
          <i class="bi bi-brightness-high text-dark mx-4 mt-1 fw-bold" style="font-size: 23px"></i>
          <a
            href="/"
            type="button"
            class="btn btn-primary text-white btn-custom fw-bold"
          >
            <i class="bi bi-box-arrow-in-left"></i>
            Login/Register
        </a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
const routes = [
  {
    name: 'Home',
    link: '/home',
  },
  {
    name: 'Feature',
    link: '/home/feature',
  },
  {
    name: 'Team',
    link: '/home/team',
  },
  {
    name: 'FAQ',
    link: '/home/faq',
  },
  {
    name: 'Contact us',
    link: '/home/contactus',
  },
  {
    name: 'Pages',
    link: '/home/pages',
  },
]
</script>
<style scoped>
.btn-custom {
  padding: 8px 20px;
}
</style>
