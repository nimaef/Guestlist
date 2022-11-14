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

    <BaseEvent></BaseEvent>

  </div>



</template>

<script setup>
import BaseEvent from '../components/UI/BaseEvent.vue' 
import BaseNavBar from '../components/UI/BaseNavBar.vue'



</script>

<style scoped>
  
.eventPic{
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
}

</style>
