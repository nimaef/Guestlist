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
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Privacy and Security </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class=" h-96 rounded-lg border-4 border-dashed border-gray-200">
              <div class="grid grid-cols-6">  
                <div></div>
                <p class="optionText">Who can see your account?</p>
                <div></div>
                <div class="optionText"><input class="radioButton" name="accountType" type="radio" value="Everyone">Everyone</div>
                <div class="optionText"></div>
              </div>
              <div class="grid grid-cols-6">  
                <div></div>
                <p class="optionText"></p>
                <div></div>
                <div class="optionText"><input class="radioButton" type="radio" name="accountType" value="Everyone">Only me</div>
                <div class="optionText"></div>
              </div>
              <div class="grid grid-cols-6">  
                <div></div>
                <p class="optionText1">Enable 2 Factor Auth?</p>
                <div></div>
                <div class="optionText1"><input class="radioButton" type="checkbox" value="Everyone"><a href="/2fa"><button class="enableButton">Enable</button></a></div>
                <div class="optionText1"><a href="/Disable2fa"><button class="enableButton">Disable</button></a></div>
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
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      settingsModalOpen: false
  

    }
  }
}



</script>

<style scoped>

.enableButton{
  color: black;
  border: 2px  solid black;
  border-radius: 8px;
  padding: 0.2rem;
}

.enableButton:hover {
  background-color: rgba(128, 128, 128, 0.286);
}

.optionText{
  color: black;
  margin-top: 2rem;
  font-size: 28px;
  width: 180%;
}

.optionText1{
  color: black;
  margin-top: 2rem;
  font-size: 28px;
  width: 180%;
  margin-top: 7vh;
}

.radioButton{
  margin-right: 10%;
  margin-left: 10%;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

</style>