<template>
  <div class="d-flex justify-content-center">
    <div class="card shadow-lg rounded m-3" style="width: 26rem">
      <div class="card-body mx-4">
        <div class="mb-3 text-center">
          <img src="/assets/img/dog.png" alt="" style="max-width: 50%" />
        </div>
        <h4 class="mb-3 text-dark">Welcome Demo Bootstrap!👋</h4>
        <p class="mb-6 text-secondary">Please sign-in to your account and start the adventure</p>
        <form @submit.prevent="logining" class="mb-4">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control border-secondary"
              placeholder="Enter your email"
              aria-label="email"
              id="email"
              v-model="email"
              autofocus
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group" id="password">
              <input
                :type="pass ? 'password' : 'text'"
                class="form-control border-secondary"
                placeholder="************"
                aria-label="password"
                v-model="password"
              />
              <div class="input-group-text border-secondary text-secondary cursor-pointer">
                <i :class="pass ? 'bi bi-eye-slash' : 'bi bi-eye'" @click="pass = !pass"></i>
              </div>
            </div>
          </div>
          <div class="mb-3" v-if="error">
            <p class="text-danger">{{ error }}</p>
          </div>
          <div class="mb-3 d-flex display-content-between">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label me-1" for="flexCheckChecked">Remember me </label>
            </div>
            <a href="/forgotpassword" class="ms-4">Forgot my password?</a>
          </div>
          <div class="mb-6">
            <button type="submit" class="btn btn-primary text-light d-grid w-100">Login</button>
          </div>
        </form>
        <p class="text-center">
          <span>New in our platform? </span><a href="/register">Create an account</a>
        </p>
        <p class="text-center">or</p>
        <div class="d-flex justify-content-center">
          <a href="" class="btn btn-icon rounded-circle text-primary">
            <i class="bi bi-github"></i>
          </a>
          <a href="" class="btn btn-icon rounded-circle text-primary">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="" class="btn btn-icon rounded-circle text-primary">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="" class="btn btn-icon rounded-circle text-primary">
            <i class="bi bi-google"></i>
          </a>
        </div>
      </div>
      <LoadingComponent v-if="loading"></LoadingComponent>
    </div>
  </div>
</template>
<script setup>
import LoadingComponent from '@/components/LoadingComponent.vue'
import { ref } from 'vue'
import { login } from '@/services/users.services'

const pass = ref(true)
const error = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

const logining = async () => {
  loading.value = true
  try {
    await login(email.value, password.value)
    loading.value = false
  } catch (error) {
    console.error(error)
    loading.value = false
  }
}
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
