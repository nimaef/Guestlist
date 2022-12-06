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
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Guest Settings</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="place-content-center border-t-4 border-top border-neutral-900">
              <div class=""  v-for="(guest) in guests.slice(0,1)">
                <div class="grid">
                  <div class="GuestName">
                    <p class="">{{guest.name}}</p>
                  </div>
                  <div class="rightSide">
                    <p>Select the Label you want to give this guest.</p>
                    <div>
                      <label for="location" class="block text-sm font-medium text-gray-700"></label>
                      <select id="location" name="location" class="selector mt-1 block w-full rounded-md border-gray-300 mb-10 pt-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <!--#region main  -->
                        <option selected>select label</option>
                        <option >{{labels.at(0)}}</option>
                        <option >{{labels.at(1)}}</option>
                        <option >{{labels.at(2)}}</option>
                        <!--#endregion -->
                      </select>
                    </div>
                  </div>
                </div>
              </div>
 
                        
              <div class="rightSide">
                <div class=""></div>
                <div class=""></div>
                <div class=" "></div>
                <div class=" "></div>
                <div></div>
                <div class=""><a href="/Guestlist"><button class="editButton bg-transparent border-black  font-semibold  py-2 px-4 border border-black-500 rounded">Done</button></a></div>
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
      ],

      labels: ['VIP', 'Label', 'Labeltje']
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

.GuestName{
  text-align: center;
  font-size: 38px;
  margin-top: 3rem;
  margin-bottom: 5rem;
}

.selector{
  width: 55%;
  margin-left: auto;
  margin-right: auto;
}

.leftText{
  margin-top: auto;
  margin-bottom: auto;
}

.rightSide{
  text-align: center;
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

  width: 50%;
}

</style>