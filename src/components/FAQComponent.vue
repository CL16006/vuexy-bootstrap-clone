<script setup>
const questions=[{
  title:'Do you charge for each upgrade?',
  answer:'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.'
},
{
  title:'Do I need to purchase a license for each website?',
  answer:'Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.'
},
{
  title:'What is a regular license?',
  answer:'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.'
},
{
  title:'What is a extended license?',
  answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime! Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis earum ea, incidunt quam possimus cumque.'
},
{
  title:'Which license is applicable for SASS application',
  answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias exercitationem ab cum nemo facere voluptates veritatis quia, eveniet veniam at et repudiandae mollitia ipsam quasi labore enim architecto non!'
}
]
</script>
<template>
  <div class="text-center">
    <p><span class="badge text-primary bg-light">FAQ</span></p>
    <h3 class="text-dark">
      Frecuently ask
      <span class="fw-bold" style="text-shadow: 0px 3px 5px rgba(0, 0, 255, 0.5)">questions</span>
    </h3>
    <p class="text-secondary">
      Browse through these FAQs to find answers to commonly asked questions.
    </p>
  </div>
  <div class="row">
    <div class="col-12 col-lg-5 col-md-12 col-sm-5">
      <img src="/assets/img/questions.svg" alt="img" style="width: 100%" />
    </div>
    <div class="col">
      <div class="accordion" id="accordionQuestion" v-for="(question,index) in questions" v-bind:key="index" >
        <div class="accordion-item m-2">
          <h2 class="accordion-header text-dark">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse'+index"
              aria-expanded="true"
              :aria-controls="'collapse'+index"
            >
              {{ question.title }}
            </button>
          </h2>
          <div
            :id="'collapse'+index"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-secondary">
              {{ question.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
