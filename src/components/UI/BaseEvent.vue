<template>
<div class="py-6">
      <div class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div class="hidden lg:col-span-3 lg:block xl:col-span-3">
          <nav aria-label="Sidebar" class="grid grid-rows-1 gap-4 sticky top-6 divide-y textColor">
            <div class="sideTitle">Your Events</div>
            <div class="yourEvents eventCard">
              <div class="yourEventTitle">Your Event 1</div>
              <p class="yourEventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut laudantium facere recusandae maxime perferendis</p>
            </div>
            <div class="yourEvents eventCard">
              <div class="yourEventTitle">Your Event 2</div>
              <p class="yourEventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut laudantium facere recusandae maxime perferendis</p>
            </div>
            <div class="yourEvents eventCard">
              <div class="yourEventTitle">Your Event 3</div>
              <p class="yourEventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut laudantium facere recusandae maxime perferendis</p>
            </div>
          </nav>
        </div>

        <main class="   textColor">
          <div>
            <p class="shareEventSmall">share this event...</p>
          </div>
        </main>

        <main class="  gap-4 lg:col-span-6 xl:col-span-6 divide-y textColor">
          <div>

            <div class="sideTitle1">Event Title</div>
          </div>  
          <div class="">
            <img class="eventImg" src="../images/pexels-photo-976866.jpeg" alt="">
            <p class="eventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente recusandae rerum nobis iusto error, doloremque dignissimos quisquam quaerat ad assumenda eligendi doloribus repellat aliquid aspernatur porro beatae, veritatis nemo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum sit, unde est porro aliquam alias quas at, quis quisquam molestias autem! Eius, enim? Aliquam autem, consectetur ut facilis minima nisi!</p>
          </div>
        </main>

        <main class="lg:col-span-2 xl:col-span-2  divide-y textColor">
          <div>
            <a href=""><p class="shareEvent">share this event...</p></a>
          </div>
        </main>


      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
        name: 'BaseCard',
  data() {
    return {
    
    };
  },
  // emits: ['survey-submit'],
  methods: {

  },
});
</script>


<style scoped>

.sideTitle{
  font-size: 28px;
}

*, ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: none;
    border-color: #e5e7eb;
}

a{
  color: black;
} 

@media only screen and (max-width: 1024px) {
  .sideTitle1 {
    margin-left: 10vw;
  }
}

@media only screen and (max-width: 1024px) {
  .shareEvent {
    float: right;

  }
}

@media only screen and (max-width: 1024px) {
  .shareEvent {
    display: none;
  }
}

@media only screen and (max-width: 1024px) {
  .shareEventSmall {
    display: block;
    float: right;
  }
}

@media only screen and (min-width: 1024px) {
  .shareEventSmall {
    display: none;
  }
}


.box {
   display: flex;
   align-items:center;
}

main{
  align-content: center;
}

.shareEvent{
  float: right;
}


.sideTitle1{
  font-size: 38px;
  text-align: center;
  max-width: 100%;
}

.eventImg{
  padding: 10px;
  border-radius: 20px;
  margin-top: 5%;
  margin: 5vh auto;
}

.eventTitle{
  font-size: 24px;
  width: 50%;
}

.yourEventTitle{
  font-size: 24px;
}

.eventDesc{
  max-width: 87%;
  margin-top: 3%;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 2vh;
}

.yourEventDesc{
  max-width: 90%;
  margin-top: 2%;
}
.yourEvents{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 6px;
}

.eventCard{
  padding: 10px;
}

.suggEventCard{
  padding: 10px;
}

.eventBtn{
  width: 15%;
  height: auto;
  border: 1px solid black;
  border-radius: 4px; 
  float: right;
  text-align: center;
}

a:link {
  color: black;
}

</style>