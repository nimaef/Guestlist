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
        <main class=" grid grid-rows-1 gap-4 lg:col-span-9 xl:col-span-9  divide-y textColor">
          <div class="sideTitle">Suggested Events</div>
          <div class="yourEvents suggEventCard">
            <div class=""><img class="eventImg" src="../images/pexels-photo-976866.jpeg" ><router-link :to="'event'"><button class="eventBtn">Check Event</button></router-link><p class="eventTitle"> Event 1 </p></div>
            <p class="eventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut laudantium facere recusandae maxime perferendis </p>
          </div>
          <div class="yourEvents suggEventCard">
            <div class=""><img class="eventImg" src="../images/pexels-photo-976866.jpeg" ><router-link :to="'event'"><button class="eventBtn">Check Event</button></router-link><p class="eventTitle"> Event 2 </p></div>
            <p class="eventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut laudantium facere recusandae maxime perferendis </p>
          </div>
          <div class="yourEvents suggEventCard">
            <div class=""><img class="eventImg" src="../images/pexels-photo-976866.jpeg" ><router-link :to="'event'"><button class="eventBtn">Check Event</button></router-link><p class="eventTitle"> Event 3 </p></div>
            <p class="eventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut laudantium facere recusandae maxime perferendis </p>
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

.eventImg{
  float: left;
  width: 250px;
  padding: 10px;
  border-radius: 4%;
  margin-right: 2%;
}

.eventTitle{
  font-size: 24px;
  width: 50%;
}

.yourEventTitle{
  font-size: 24px;
}

.eventDesc{
  max-width: 80%;
  margin-top: 2%;
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