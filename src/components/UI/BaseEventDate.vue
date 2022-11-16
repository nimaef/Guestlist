<template>
<main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
              <div class="flex grid grid-cols-3">
                <div class="floatLeft"></div>
                <div class="title"><p class="">Add a date and time*</p></div>
                <div class="floatRight"></div>
              </div>
              <div class="pb-20 flex grid grid-cols-4">
                <div></div>
                <div class="datePicker" inline-datepicker data-date="02/25/2022"></div>
                <div class="flex justify-center">
                  <input type="time">
                </div>
                <div class="LogoInput"></div>
                <div></div>
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

.additonalImages{
  width: 120px;
  height: 100px;
  margin-left: 25%;
  margin-top: 1rem;
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