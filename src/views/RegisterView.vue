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

    <BaseRegister></BaseRegister>

    
  </div>
</template>

<script setup>
import BaseRegister from '../components/UI/BaseRegister.vue'

</script>