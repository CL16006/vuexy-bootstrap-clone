<script setup></script>
<template>
  <div class="text-center">
    <p><span class="badge text-primary bg-light">Contact US</span></p>
    <h3 class="text-dark"><span class="fw-bold" style="text-shadow: 0px 3px 5px rgba(0, 0, 255, 0.5); ">Let's work</span> together</h3>
    <p class="text-secondary">Any question or remark? just write us a message</p>
  </div>
  <div class="row">
    <div class="col-12 col-lg-5 col-md-12 col-sm-5 ">
      <img src="/assets/img/contact.svg" alt="img" style="width: 100%;"/>
      <div class="row pt-2">
        <div class="col d-flex p-2">
          <i class="bi bi-envelope text-primary"></i><p><span class="text-secondary">Email:</span> example@gmail.com</p>
        </div>
        <div class="col d-flex p-2 ">
          <i class="bi bi-telephone text-success"></i><p><span class="text-secondary">Phone:</span> +503 76543212</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card p-5 shadow-lg">
        <div class="row">
          <h2 class="text-dark">Send a message</h2>
          <p class="text-secondary">If you would like to discuss anything related to payment, account, licensing,
            partnerships, or have pre-sales questions, you’re at the right place.</p>
        </div>
        <div class="row">
          <div class="col">
            <label for="fullname" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control border-secondary"
              placeholder="John"
              aria-label="fullname"
              id="fullname"
            />
          </div>
          <div class="col">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control border-secondary"
              placeholder="name@example.com"
              aria-label="email"
              id="email"
            />
          </div>
        </div>
        <div class="col-12 pt-2">
          <label for="message" class="form-label">Message</label>
          <textarea
            class="form-control border-secondary"
            id="message"
            rows="6"
            placeholder="Write a message"
          ></textarea>
        </div>
        <div class="col-12 pt-4">
          <button type="submit" class="btn btn-primary text-light">Send inquiry</button>
        </div>
      </div>
    </div>
  </div>
</template>
