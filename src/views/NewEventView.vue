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
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">New Event </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="place-content-center h-96 rounded-lg border-4 border-dashed border-gray-200">
              
              <div class="flex grid grid-cols-3">
                <div>A minimum of a logo and a splash image is required*</div>
                <div></div>
                <div class="floatRight">* = Required to create an event</div>
              </div>
              <div class="flex grid grid-cols-6">
                <div class=""></div>
                <div class=""></div>
                <div class="textSize profileLeft"></div>
                <div></div>
              </div>
              <div class="flex grid grid-cols-6">
                <div class=""></div>
                <div class=""></div>
                <div class="textSize profileLeft"></div>
                <div></div>
              </div>
              <div class="flex grid grid-cols-6">
                <div class=""><a href="/"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
                <div class="textSize profileLeft"></div>
                <div></div>
                <div></div>
                <div class=""><a href="/event"><button class="createButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Create</button></a></div>
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
import BaseNewEventButton from '../components/UI/BaseNewEventButton.vue'
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
    BaseNewEventButton,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
  },
  data() {
    return {
      user:  {
      name: 'Nima Ecija y Fernandez',
      email: 'nimafernandez@gmail.com',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      settingsModalOpen: false
  

    }
  }
}



</script>

<style scoped>

.createButton{
  float: right;
}

.floatRight{
  float: right;
}

div{
  color: black;
}

button{
  color: black;
}

</style>