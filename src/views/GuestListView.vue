<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="min-h-screen bg-gray-100">

    <BaseNavBar></BaseNavBar>
    
      <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Guestlist</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="place-content-center border-t-4 border-top border-neutral-900">
              <div class=" topItems">
                <div class="grid grid-cols-5">
                        <div>Guest</div>
                        <div class="topLabel">Label</div>
                        <div class="checked">Checked in ?</div>
                        <div>Setting</div>
                        <div>Delete</div>
                </div>
        </div>
        
            <BaseGuestCard v-for="(guest, index) in guests" @deleteRow="deleteGuest(index)" :index="index" :guest="guest" @onCheck="checkGuest($event, index)"></BaseGuestCard>

              
                        
              <div class="flex grid grid-cols-6">
                <div class=""></div>
                <div class=""></div>
                <div class=" "></div>
                <div class=" "></div>
                <div></div>
                <div class=""><a href="/event"><button class="editButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Done</button></a></div>
              </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>

  </div>

</template>

<script>

import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import BaseCard from '../components/UI/BaseCard.vue'
import BaseNavBar from '../components/UI/BaseNavBar.vue'
import BaseGuestCard from '../components/UI/BaseGuestCard.vue'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
  } from '@headlessui/vue'


export default {
  components: {
    Popover,
    BellIcon,
    Bars3Icon,
    XMarkIcon,
    PopoverButton,
    PopoverPanel,
    BaseCard,
    BaseGuestCard,
    BaseNavBar,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
  },

  emits:[
    'GuestCard'
  ],

  data() {
    return {
      user:  {
      name: 'Nima Ecija y Fernández',
      email: 'nimafernandez@gmail.com',
      phone: '+31012345678',
      country: 'Netherlands, Limburg',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },

      index: null,
      settingsModalOpen: false,
      guests: [
        {
          name: 'Gast1',
          label: 'VIP',
          checkedIn: false,
          id: 1
        },
        {
          name: 'Gast2',
          label: 'label',
          checkedIn: false,
          id: 2
        },
        {
          name: 'Gast3',
          label: 'labeltje',
          checkedIn: false,
          id: 3
        },
        {
          name: 'Gast4',
          label: 'labeltje',
          checkedIn: false,
          id: 4
        },
        {
          name: 'Gast5',
          label: 'labeltje',
          checkedIn: false,
          id: 5
        },
        {
          name: 'Gast6',
          label: 'labeltje',
          checkedIn: false,
          id: 6
        },
      ],
    }
  },

    methods: {
      deleteGuest(index) {
        console.log("test")
        console.log(index)
        console.log(this.guests.checkedIn)
        this.guests.splice(index, 1);
      },
      checkGuest(e, index){
        this.guests[index].checkedIn = e.target.checked;
      },
    }


}



</script>

<style scoped>

.cardScroll{
  height: 10rem;
}

.content{
  height: 10rem;
  overflow: auto;
}

.topLabel{
        margin-left: 25px;
}

.checked{
        font-size: 16px;
        text-align: center;
}

.topItems{
        margin-left: 5%;
        margin-right: 5%;
        font-size: 16px;
        text-align: center;
        color: black;
}

.TSize{
        font-size: 28px;
}

.profile{
  color: black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}

.textSize{
  font-size: 24px;
}

.profileLeft{
  color: black;
  margin-top: 2rem;
}

.profileRight{
  color: black;
  margin-left: auto;
  margin-top: 2rem;
}

.profileRight1{
  color: black;
  margin-left: auto;
  margin-top: 2rem;
  width: 120%;
}

.profileRight2{
  color: black;
  margin-top: 2rem;
}

.editButton{
  color: black;
  margin-top: 2.5rem;
  margin-left: 20%;
  width: 50%;
}

</style>