<template>
  <div class="d-flex justify-content-center">
    <div class="card shadow-lg rounded m-3" style="width: 26rem">
      <div class="card-body mx-4">
        <div class="mb-3 text-center">
          <img src="/assets/img/dog.png" alt="" style="max-width: 50%" />
        </div>
        <h4 class="mb-3 text-dark">Adventure starts here 🚀</h4>
        <p class="mb-6 text-secondary">Make your app management easy and fun!</p>
        <form @submit.prevent="submitForm" class="mb-4">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control border-secondary"
              placeholder="Enter your Username"
              aria-label="username"
              id="username"
              autofocus
              v-model="form.username"
              :class="{ 'is-invalid': errors.username }"
            />
            <div v-if="errors.username" class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control border-secondary"
              placeholder="Enter your email"
              aria-label="email"
              id="email"
              autofocus
              v-model="form.email"
              :class="{ 'is-invalid': errors.email }"
            />
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group" id="password">
              <input
                :type="pass ? 'password' : 'text'"
                class="form-control border-secondary"
                placeholder="************"
                aria-label="password"
                v-model="form.password"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="input-group-text border-secondary text-secondary cursor-pointer">
                <i :class="pass ? 'bi bi-eye-slash' : 'bi bi-eye'" @click="pass = !pass"></i>
              </div>
              <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
            </div>
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Password Confirmation</label>
            <div class="input-group" id="confirmPassword">
              <input
                :type="passConfirm ? 'password' : 'text'"
                class="form-control border-secondary"
                placeholder="************"
                aria-label="confirmPassword"
                v-model="form.confirmPassword"
                :class="{ 'is-invalid': errors.confirmPassword }"
              />
              <div class="input-group-text border-secondary text-secondary cursor-pointer">
                <i
                  :class="passConfirm ? 'bi bi-eye-slash' : 'bi bi-eye'"
                  @click="passConfirm = !passConfirm"
                ></i>
              </div>
              <div v-if="errors.confirmPassword" class="invalid-feedback">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                v-model="form.agreement"
                :class="{ 'is-invalid': errors.agreement }"
              />
              <label class="form-check-label me-1" for="flexCheckChecked"
                ><span>I agree to</span><a href="#" class="ms-4">privacity policity & terms</a>
              </label>
              <div v-if="errors.agreement" class="invalid-feedback">{{ errors.agreement }}</div>
            </div>
          </div>
          <div class="mb-6">
            <button type="submit" class="btn btn-primary text-light d-grid w-100">Sing up</button>
          </div>
        </form>
        <p class="text-center">
          <span>Already have an account? </span><a href="/">Sing in instead</a>
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
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { registerSchema } from '@/utils/validations'
import { register } from '@/services/users.services'

const pass = ref(true)
const passConfirm = ref(true)
const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreement: true,
})
const errors = ref({
  username: null,
  email: null,
  password: null,
  confirmPassword: null,
  agreement: null,
})

const submitForm = async () => {
  try {
    if (registerSchema.parse(form.value)) {
      await register(form.value.username, form.value.email, form.value.password)
    }
  } catch (e) {
    const validationErrors = e.errors.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message
      return acc
    }, {})
    errors.value = validationErrors
  }
}
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
