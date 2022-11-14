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
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Account settings </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="place-content-center h-96 rounded-lg border-4 border-dashed border-gray-200">
              <div><img class="profile w-20 rounded-full" :src="user.imageUrl" alt=""/></div>
              <div class="flex grid grid-cols-3 ">
                <div class="profile"></div>
                <div class="textSize profile">{{ user.name }}</div>
              </div>
              <div class="flex grid grid-cols-6">
                <div class=""></div>
                <div class=""></div>
                <div class="textSize profileLeft">Email adress:</div>
                <input class="textSize profileRight" type="email" :placeholder="user.email">
              </div>
              <div class="flex grid grid-cols-6">
                <div class=""></div>
                <div class=""></div>
                <div class="textSize profileLeft">Phone number:</div>
                <input class="textSize profileRight" type="phone" :placeholder="user.phone">
              </div>
              <div class="flex grid grid-cols-6">
                <div class=""><a href="/accountSettings"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
                <div class="textSize profileLeft">Country:</div>
                <input class="textSize profileRight" type="text" :placeholder="user.country">
                <div></div>
                <div class=""><a href="/accountSettings"><button class="editButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Done</button></a></div>
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
    BaseNavBar,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
  },
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
      settingsModalOpen: false
  
    }
  }
}



</script>

<style scoped>
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
  margin-top: 1rem;
}

.profileRight{
  color: black;
  margin-left: auto;
  margin-top: 1rem;
}

.profileRight1{
  color: black;
  margin-left: auto;
  margin-top: 1rem;
  width: 120%;
}

.profileRight2{
  color: black;
  margin-top: 1rem;
}

.editButton{
  color: black;
  margin-top: 2.5rem;
  float: right;
  margin-right: 10%;
  width: 50%;
}

input{
  width: 20rem;
  background-color: lightgrey;
  padding: 5px;
  border: 2px solid black;
}

.cancelButton{
  color: black;
  margin-top: 2.5rem;
  float: left;
  margin-left: 10%;
  width: 50%;
}

</style>