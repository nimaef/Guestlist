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
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Guestlist </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="place-content-center h-96 rounded-lg border-4 border-dashed border-gray-200">
              <BaseGuestCard></BaseGuestCard>
              <div class="flex grid grid-cols-6">
                <div class=""></div>
                <div class=""></div>
                <div class="textSize profileLeft"></div>
                <div class="textSize profileRight1"></div>
                <div></div>
                <div class=""><a href="/accountSettingsEdit"><button class="editButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Done</button></a></div>
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
  float: right;
  margin-right: 10%;
  width: 50%;
}

</style>