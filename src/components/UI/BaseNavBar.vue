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
  <div>

    <Popover as="template">
      <header :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-3">
              <div class="flex flex-shrink-0 items-center">
                <a href="/">
                  <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                </a>
              </div>
            </div>
            <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div class="w-full">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:show xl:show"> -->
              <!-- Mobile menu button -->
              <!-- <PopoverButton class="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> -->
                <!-- <span class="sr-only">Open menu</span> -->
                <!-- <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" /> -->
                <!-- <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" /> -->
              <!-- </PopoverButton> -->
            <!-- </div> -->

            


            <div class="flex items-center md:absolute md:inset-y-0 md:right-0">
              <!-- Mobile menu button -->
              <PopoverButton class="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>

        <PopoverPanel as="nav" class="" aria-label="Global">
          <!-- <div class="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :aria-current="item.current ? 'page' : undefined" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md py-2 px-3 text-base font-medium']">{{ item.name }}</a>
          </div> -->
          <div class="border-t border-gray-200 pt-4 pb-3">
            <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
              </div>
              <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="headlessui-popoverbutton-1" aria-expanded="false" >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="navItems mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              <li class="flex justify-center gap-4">
                <a href="/accountSettings"><ul class="menuBtn   transform hover:scale-110 bg-blue-300 hover:bg-blue-500 w-44 py-4"><button>Your Profile</button></ul></a>
                <div @click="settingsModalOpen = true"><ul class="menuBtn  transform hover:scale-110 bg-blue-300 hover:bg-blue-500 w-44 py-4"><button>Settings</button></ul></div>
                <a href="/Support"><ul class="menuBtn  transform hover:scale-110 bg-blue-300 hover:bg-blue-500 w-44 py-4"><button>Feedback and Support</button></ul></a>
                <a href="/login"><ul class="menuBtn  transform hover:scale-110 bg-blue-300 hover:bg-blue-500 w-44 py-4"  ><button>Sign out</button></ul></a>
              </li>
            </div>
          </div>
        </PopoverPanel>
      </header>
    </Popover>

  </div>

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
              <a href="/privAndSecSettings"><p class="text-sm  text-gray-500"><button class="modalBtn bg-slate-400" type="button">Privacy and Security</button></p></a>
              <a href="/accountSettings"><p class="text-sm text-gray-500"><button class="modalBtn bg-slate-400" type="button">Account settings</button></p></a>
              <a href="/aboutApp"><p class="text-sm text-gray-500"><button class="modalBtn bg-slate-400" type="button">About the app</button></p></a>
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