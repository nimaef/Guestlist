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

    <BaseForgotPassword></BaseForgotPassword>

    
  </div>
</template>

<script setup>
import BaseForgotPassword from '../components/UI/BaseForgotPassword.vue'

</script>