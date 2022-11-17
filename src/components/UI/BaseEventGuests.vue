<template>

  <main>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-8 sm:px-0">
        <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
          <div class="flex grid grid-cols-3">
            <div class="floatLeft"></div>
            <div class="title"><p class="locationTitle">Maximum amount of guests*</p></div>
            <div class="floatRight"></div>
          </div>
          <div class="pb-20 flex grid grid-cols-3">
            <div class="LogoInput"></div>
            <div class="center ">Max. amount of guests?<input class="center" type="text" placeholder="Amount:"></div>
          </div>
          <div class="pb-24 h-20 flex grid grid-cols-3">
            <div class=""></div>
            <div class="center">Do you want to determine who can join?</div>
            <div class="center "></div>
          </div>
          <div class="guestAmount flex grid grid-cols-6">
            <div></div>
            <div></div>
            <div class=""><a href=""><button class="guestButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">No</button></a></div>
            <div class=""><a href=""><button class="guestButton bg-transparent border-black text-blue-700 font-semibold  py-2 px-4 border border-black-500 rounded">Yes</button></a></div>
            <div></div>
          </div>
          <div class=" flex grid grid-cols-3">
            <div class=""></div>
            <div class=""></div>
            <div class=""></div>
          </div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>

</script>

<style scoped>

.guestAmount{
  margin-top: -4rem;
}

.TicketAmount{
  margin-top: -5rem;
}

.guestButton{
  display: block;
  margin: 0 auto 2rem;
}

.attachments{
  width: 90%;
  text-align: center;
  margin-top: 3rem;
}

.center{
  text-align: center;
  display: flex;
  flex-direction: column;
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
.YesButton{
  text-align: center;
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