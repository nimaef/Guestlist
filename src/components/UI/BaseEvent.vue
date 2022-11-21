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

        <div class="textColor">
          <div class="editSettings">
            <a  href="/EditEvent"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg><span class="">Edit event settings</span>
            </a>
          </div>
          <div class="Buttons">
            <a href="/InvitePeople"><p class="shareEventSmall">Invite people...</p></a><br>
            <a href="/Guestlist"><button class="GuestlistSmall">See Guestlist</button></a>
          </div>
          <div>
    
          </div>
        </div>

        <div class="  gap-4 lg:col-span-6 xl:col-span-6 divide-y textColor">
          <div>

            <div class="sideTitle1">Event Title</div>
          </div>  
          <div class="">
            <img class="eventImg" src="../images/pexels-photo-976866.jpeg" alt="">
            <p class="eventDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente recusandae rerum nobis iusto error, doloremque dignissimos quisquam quaerat ad assumenda eligendi doloribus repellat aliquid aspernatur porro beatae, veritatis nemo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum sit, unde est porro aliquam alias quas at, quis quisquam molestias autem! Eius, enim? Aliquam autem, consectetur ut facilis minima nisi!</p>
          </div>
        </div>

        <div class="Share lg:col-span-2 xl:col-span-2  divide-y textColor">
          <div>
            <a href="/InvitePeople"><p class="shareEvent">Invite people...</p></a>
          </div>
          <div>
            <a href="/Guestlist"><button class="Guestlist">See Guestlist</button></a>
          </div>
        </div>


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

.Buttons{
  height: fit-content;
  display: block;

}

.editSettings a{
  width: 10rem;
  white-space: nowrap ;
  display: flex;
  z-index: 4;
}
.editSettings{
  width: 20rem;
}

.Guestlist{
  border: 2px solid black;
  padding: 0.5rem;
  border-radius: 8px;
  float: right;
  margin-top: 2rem;
}

.GuestlistSmall{
  border: 2px solid black;
  padding: 0.5rem;
  border-radius: 8px;
}

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
  .Guestlist {
    float: right;
    z-index: 1;
  }
}

@media only screen and (max-width: 1024px) {
  .Guestlist {
    display: none;
  }
}

@media only screen and (max-width: 1024px) {
  .GuestlistSmall {
    display: flex;
    margin-top: 2rem;
    float: right;
    z-index: 1;
  }
}

@media only screen and (min-width: 1024px) {
  .GuestlistSmall {
    display: none;
  }
}

@media only screen and (max-width: 1024px) {
  .shareEvent {
    float: right;
    z-index: 1;
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
    z-index: 1;
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
  z-index: 0;
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