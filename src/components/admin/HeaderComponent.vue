<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4">
    <div class="container-fluid">
      <button
        class="navbar-toggler d-lg-none d-flex"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarSupportedContent"
        aria-controls="sidebarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="emit('toggle')"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <form class="d-none d-lg-flex w-50 m-lg-auto" role="search">
        <div class="input-group">
          <i class="bi bi-search input-group-text"></i>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
      </form>
      <ul class="p-1 mb-lg-0">
        <li class="nav-item d-lg-none d-inline-flex p-2 p-sm-1">
          <a class="nav-link active" aria-current="page" href="#">
            <i class="bi bi-search text-secondary fw-bolder fs-5"></i>
          </a>
        </li>
        <li class="nav-item d-inline-flex p-2 p-sm-1">
          <a class="nav-link active" aria-current="page" href="#">
            <i class="bi bi-translate text-secondary fw-bolder fs-5"></i>
          </a>
        </li>
        <li class="nav-item d-inline-flex p-2 p-sm-1">
          <a class="nav-link active" href="#">
            <i class="bi bi-brightness-high text-secondary fw-bolder fs-5"> </i>
          </a>
        </li>
        <li class="nav-item d-inline-flex p-2 p-sm-1">
          <a href="" class="nav-link active">
            <i class="bi bi-columns-gap text-secondary fw-bolder fs-5"></i>
          </a>
        </li>
        <li class="nav-item d-inline-flex dropdown p-2 p-sm-1">
          <a class="nav-link active" href="#">
            <i class="bi bi-bell text-secondary fw-bolder fs-5">
              <span
                class="position-absolute top-0 end-0 p-1 bg-danger border border-light rounded-circle"
              >
              </span>
            </i>
          </a>
        </li>
        <li class="nav-item d-inline-flex p-2 p-sm-1">
          <a class="position-relative">
            <img
              src="/assets/img/avatar.svg"
              alt="Avatar"
              class="rounded-circle"
              width="50"
              height="50"
            />
            <span
              class="position-absolute bottom-0 end-0 p-2 bg-success border border-light rounded-circle"
            >
            </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const emit = defineEmits(['toggle'])
</script>
<style scoped></style>
