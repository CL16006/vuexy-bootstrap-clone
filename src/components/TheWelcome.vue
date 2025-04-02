<script setup></script>
<style scoped>
.animated-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgb(252, 147, 147),
    rgb(102, 102, 238),
    rgb(104, 230, 104),
    rgb(255, 255, 99),
    rgb(252, 147, 147)
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 20s infinite linear;
}
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
<template>
  <div class="text-center col-md-8 col-sm-12 m-auto pt-5">
    <h1 class="fw-bold animated-text">One dashboard to manage all your businesses</h1>
    <h6 class="fw-bold text-dark py-2">
      Production-ready & easy to use Admin Template for Reliability and Customizability.
    </h6>
    <button type="button" class="btn btn-primary text-white btn-custom align-items-center p-2">
      Get Early Access
    </button>
  </div>
</template>
