<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <div class="row">
    <div class="col col-4">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-7">
              <h5 class="text-dark">Congratulations John! 🎉</h5>
              <p class="text-secondary">Best seller of the month</p>
              <h3 class="text-primary">$48.9k</h3>
              <button class="btn btn-primary text-light">View Sales</button>
            </div>
            <div class="col-5 text-end">
              <img src="/assets/img/celebrating.svg" alt="user" style="max-width: 100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-8">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Statistics</h5>
          <p class="card-text">Here you can see some statistics.</p>
        </div>
      </div>
    </div>
  </div>
</template>
