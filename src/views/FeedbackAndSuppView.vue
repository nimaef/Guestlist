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
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Support and Contact </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class=" h-96 rounded-lg border-4 border-dashed border-gray-200">
              <div class="grid grid-cols-6">  
                <div></div>
                <p class="optionText">Email adress:</p>
                <div></div>
                <div class="optionText">{{ user.email}}</div>
                <div class="optionText"></div>
              </div>
              <div class="grid grid-cols-6">  
                <div></div>
                <p class="optionText1">Phone number:</p>
                <div></div>
                <div class="optionText1">{{user.phone}}</div>
                <div class="optionText"></div>
              </div>
              <div class="grid grid-cols-6">  
                <div></div>
                <p class="optionText1"></p>
                <div></div>
                <div class="optionText1"></div>
                <div class="optionText1"></div>
                <div class="optionText2"><a href="/feedback"><button class="bg-grey-300">Send Feedback</button></a></div>
                <div></div>
              </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>

  </div>


</template>

<script >

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
      name: 'Nima Ecija y Fernandez',
      email: 'nimafernandez@gmail.com',
      phone: '+31612345678',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      settingsModalOpen: false
  

    }
  }
}



</script>

<style scoped>

a{
  color: black;
}
.optionText{
  color: black;
  margin-top: 5rem;
  font-size: 28px;
  width: 150%;
  margin-left: 0%;
}

.optionText1{
  color: black;
  margin-top: 2rem;
  font-size: 28px;
  width: 150%;
  margin-left: 0%;
  margin-top: 5vh;
}

.optionText2{
  color: black;
  font-size: 15px;
  width: 60%;
  margin-left: 20%;
  margin-top: 11vh;
  border: 1px solid black;
  border-radius: 4px; 
  text-align: center;
}

.radioButton{
  margin-right: 10%;
  margin-left: 10%;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.Logo{
  max-width: 80%;    
  height: auto;
  border-radius: 15px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.432);
}

.alignment{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 5vh;
  color: black;
}

</style>