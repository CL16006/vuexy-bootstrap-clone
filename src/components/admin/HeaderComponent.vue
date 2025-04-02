<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarSupportedContent"
        aria-controls="sidebarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="" id="navbarSupportedContent">
        <form class="d-flex w-50" role="search">
          <div class="input-group">
            <i class="bi bi-search input-group-text"></i>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>
        <div class="">
          <ul class="d-flex navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="bi bi-translate text-secondary fw-bolder fs-5"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <i class="bi bi-brightness-high text-secondary fw-bolder fs-5"> </i>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link active">
                <i class="bi bi-columns-gap text-secondary fw-bolder fs-5"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link active" href="#">
                <i class="bi bi-bell text-secondary fw-bolder fs-5">
                  <span
                    class="position-absolute top-20 start-90 translate-middle p-2 bg-danger border border-light rounded-circle"
                  >
                  </span>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div class="">
          <a class="position-relative">
            <img
              src="/assets/img/avatar.svg"
              alt="Avatar"
              class="rounded-circle"
              width="50"
              height="50"
            />
            <span
              class="position-absolute top-100 start-90 translate-middle p-2 bg-success border border-light rounded-circle"
            >
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup></script>
<style scoped></style>
