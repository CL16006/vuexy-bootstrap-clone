<template>
  <div class="d-flex justify-content-center">
    <div class="card shadow-lg rounded m-3" style="width: 26rem">
      <div class="card-body mx-4">
        <div class="mb-3 text-center">
          <img src="/assets/img/dog.png" alt="" style="max-width: 50%" />
        </div>
        <h4 class="mb-3 text-dark">Forgot Password? 🔒</h4>
        <p class="mb-6 text-secondary">
          Enter your email and we'll send you instructions to reset your password
        </p>
        <form @submit.prevent="submitForm" class="mb-4">
          <div class="mb-3">
            <label for="username" class="form-label">Email</label>
            <input
              type="text"
              class="form-control border-secondary"
              placeholder="Enter your email"
              aria-label="username"
              id="username"
              autofocus
              v-model="email"
            />
          </div>
          <div class="mb-6">
            <button type="submit" class="btn btn-primary text-light d-grid w-100 mb-3">
              Send Reset Link
            </button>
          </div>
        </form>
        <div class="text-center">
          <a href="/" class="d-flex justify-content-center">
            <i class="bi bi-arrow-left"></i>
            Back to login</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
