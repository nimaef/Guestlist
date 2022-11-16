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
                <div class="LogoInput">Upload Logo:*<input class="" accept="image/png, image/gif, image/jpeg" type="file" @change="previewLogo"></div>
                <div></div>
                <div class="LogoInput">Upload Splash image:*<input class="" accept="image/png, image/gif, image/jpeg" type="file" @change="previewSplash"></div>
                <div class="">
                  <img v-if="logoSrc" class="additonalImages preview" :src="logoSrc" />
                </div>
                <div></div>
                <div class="">
                  <img v-if="splashSrc" class="additonalImages preview" :src="splashSrc" />
                </div>
              </div>
              <div class="pb-24 flex grid grid-cols-3">
                <div class=""></div>
                <div class="Images">Add additional images:<input accept="image/png, image/gif, image/jpeg"  type="file" multiple @change="previewFiles"  /></div>
                <div></div> 
                <div class="" v-for="(image, key) in images.slice(0, 6)" :key="key">
                <div>
                  <img class="additonalImages preview" :ref="'image'" />
                 <p class="imageTitle">{{ image.name }}</p>
                </div>
                </div>
              </div>
              <!-- <div class=" flex grid grid-cols-3">
                <div class=""><a href="/"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
                <div class=""><a href="/event"><button class="createButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Create</button></a></div>
              </div> -->
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>

      <BaseEventLocation></BaseEventLocation>

      <BaseEventDate></BaseEventDate>

      <BaseEventDescription></BaseEventDescription>

      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
              <div class="flex grid grid-cols-3">
                <div class="floatLeft"></div>
                <div class="title"><p class="locationTitle">Add attachments</p></div>
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
              <!-- <div class=" flex grid grid-cols-3">
                <div class=""><a href="/"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
                <div class=""><a href="/event"><button class="createButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Create</button></a></div>
              </div> -->
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>

      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
              <div class="flex grid grid-cols-3">
                <div class="floatLeft"></div>
                <div class="title"><p class="locationTitle">Tickets per guest</p></div>
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
              <!-- <div class=" flex grid grid-cols-3">
                <div class=""><a href="/"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
                <div class=""><a href="/event"><button class="createButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Create</button></a></div>
              </div> -->
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>

      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
              <div class="flex grid grid-cols-3">
                <div class="floatLeft"></div>
                <div class="title"><p class="locationTitle">Max. amount of guests*</p></div>
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
              <!-- <div class=" flex grid grid-cols-3">
                <div class=""><a href="/"><button class="cancelButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Cancel</button></a></div>
                <div class=""></div>
                <div class=""><a href="/event"><button class="createButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Create</button></a></div>
              </div> -->
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
import BaseEventLocation from '../components/UI/BaseEventLocation.vue'
import BaseEventDate from '../components/UI/BaseEventDate.vue'
import BaseEventDescription from '../components/UI/BaseEventDescription.vue'
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
    BaseEventDate,
    BaseEventDescription,
    BaseNavBar,
    BaseEventLocation,
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
      settingsModalOpen: false,
      images: [],
      logoSrc: null,
      splashSrc: null,

    }
  },
  methods: {
    // name of the method
    previewFiles(e) {
      // log the files that are in the array
      console.log(e.target.files);
      // new variable that pushes the images into the array
      var selectedFiles = e.target.files;
      // loops through the whole array to get the files data
      for (let i = 0; i < selectedFiles.length; i++) {
        // this pushes the images to the array
        this.images.push(selectedFiles[i]);
      }
      // this loops through the images array and sets a number to the images in the array
      for (let i = 0; i < this.images.length; i++) {
        // the reader itself as a variable
        let reader = new FileReader();
        // this loads the reader and when its loaded, it will give a image as result 
       reader.onload = (e) => {
      //  gets the source of the referred image and puts it as result 
          this.$refs.image[i].src = reader.result;
        // this logs the data from the image into the console
          console.log(this.$refs.image[i].src);
        };
        // displayes all the images to the site
        reader.readAsDataURL(this.images[i]);
      }
    },
    previewLogo(e) {
      var file = e.target.files[0];
      let reader = new FileReader();
        // this loads the reader and when its loaded, it will give a image as result 
       reader.onload = (e) => {
          this.logoSrc = reader.result;
        };
        // // displayes all the images to the site
        reader.readAsDataURL(file);
    },
    previewSplash(e){
      var file = e.target.files[0];
      let reader = new FileReader();
      
      reader.onload = (e) => {
        this.splashSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }, 
  }
}

</script>

<style scoped>

.additonalImages{
  width: 120px;
  height: 100px;
  margin-left: 25%;
  margin-top: 1rem;
}

.imageTitle{
  margin-left: 25%;
}

.locationTitle{
  margin-left: 25%;
}
.height{
  height: fit-content;
}

.title{
  font-size: 28px;
  margin-top: 0.5rem;
  padding-bottom: 3rem;
  text-align: center;
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