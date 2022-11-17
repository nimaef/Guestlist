<template>

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
</template>

<script>

</script>

<style scoped>

.attachments{
  width: 90%;
  text-align: center;
  margin-top: 3rem;
}

.additonalImages{
  width: 120px;
  height: 100px;
  margin-left: 25%;
  margin-top: 1rem;
}

.desc{
  width: 100%;
  padding: 1rem;
  resize: none;
}
.imageTitle{
  margin-left: 25%;
}

.datePicker{
  text-align: center;
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