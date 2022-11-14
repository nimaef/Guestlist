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

  <TransitionRoot :show="isOpen" as="template">
    
    <Dialog class="" :open="settingsModalOpen" @close="settingsModalOpen = false">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
        <div>
          <!-- <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"> -->
            <!-- Heroicon name: outline/check -->
            <!-- <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg> -->
          <!-- </div> -->
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Settings</h3>
            <div class="mt-2">
              <p class="text-sm  text-gray-500"><button class="modalBtn bg-slate-400" type="button">Privacy and Security</button></p>
              <p class="text-sm text-gray-500"><button class="modalBtn bg-slate-400" type="button">Account settings</button></p>
              <p class="text-sm text-gray-500"><button class="modalBtn bg-slate-400" type="button">About the app</button></p>
            </div>
          </div>
        </div>
        <div class="mt-24 sm:mt-24 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
          <button @click="settingsModalOpen = false" type="button" class="bg-slate-400 inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">Done</button>
          <button @click="settingsModalOpen = false" type="button" class="bg-slate-600  mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm">Cancel</button>
        </div>
      </div>
      <!-- <DialogPanel>
        <DialogTitle class="">Settings</DialogTitle>
        <DialogDescription>
          These are the settings you will be changing...
        </DialogDescription>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea corrupti ab id iste est labore molestias! Dolores fugiat ex distinctio hic voluptate, sint, suscipit natus aut maxime numquam deleniti.
        </p>

        
      </DialogPanel> -->
        </div>
      </div>

     
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import BaseCard from './BaseCard.vue'
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
    MagnifyingGlassIcon,
    PopoverButton,
    PopoverPanel,
    BaseCard,
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

const completeButtonRef = ref(null)
const isOpen = ref(true)

function setIsOpen(value) {
  isOpen.value - value
}
</script>

<style>
.navItems{
  color: black;
  align-items: center;
}


.menuBtn{
  color: black;
  border: 1px solid black;
  border-radius: 4px; 
  margin-top: 2%;
  text-align: center;
}

a{
  color: black;
}

  ul{
    list-style-type: none;
  }
  
  li{
    list-style-type: none;
  }

.modalBtn{
  color: black;
  border: 1px solid black;
  border-radius: 4px; 
  margin-top: 5%;
  padding: 3%;
  width: 40%;
  text-align: center;
}
</style>