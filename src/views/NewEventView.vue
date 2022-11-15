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
            <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
              <div class="flex grid grid-cols-3">
                <div class="floatLeft"></div>
                <div class="title">Add images to your new event</div>
                <div class="floatRight">* = Required to create an event</div>
              </div>
              <div class="pb-20 flex grid grid-cols-3">
                <div class="LogoInput">Upload Logo:*<input class="" accept="image/png, image/gif, image/jpeg" type="file"></div>
                <div class=""></div>
                <div class="LogoInput">Upload Splash image:*<input class="" accept="image/png, image/gif, image/jpeg" type="file"></div>
                <div></div>
              </div>
              <div class="pb-24 flex grid grid-cols-3">
                <div class=""></div>
                <div class="Images">Add additional images:<input accept="image/png, image/gif, image/jpeg"  type="file"  /></div>
                <div></div>
              </div>
              <div class=" flex grid grid-cols-3">
                <div class=""><a href="/"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
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

.height{
  height: 30rem;
}

.title{
  font-size: 28px;
  margin-top: 0.5rem;
  padding-bottom: 3rem;
}

.LogoInput{
  margin-left: 20%;
  padding: 1rem;
}

.Images{
  margin-left: 25%;
}
.createButton{
  float: right;
}

.floatRight{
  float: right;
  text-align: right;
  padding: 1rem;
}

.floatLeft{
  padding: 1rem;
}

div{
  color: black;
}

button{
  color: black;
}

</style>