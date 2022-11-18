<template>

<main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="height place-content-center rounded-lg border-4 border-dashed border-gray-200">
              <div class="flex grid grid-cols-3">
                <div class="floatLeft"></div>
                <div class="title"><p class="locationTitle">Invite people</p></div>
                <div class="floatRight"></div>
              </div>
              <div class=" pb-5 flex grid grid-cols-3">
                <div class="LogoInput"></div>
                <div class="border attachments">Click on the icon to add an excel table to invite more people faster:<input accept="application/pdf, application/xls"  type="file"  multiple/></div>
                <div class="LogoInput"></div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="or">or</div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="emailInvites"><textarea name="invites" id="" placeholder="Enter email adresses to invite people:" cols="45" rows="10"></textarea></div>
                <div></div>
              </div>

            </div>
          </div>
        </div>
      </main>
</template>

<script>

</script>

<style scoped>

textarea{
  resize: none;
}

.emailInvites{
  margin-left: auto;
  margin-right: auto;
}

.or{
  text-align: center;
  font-size: 38px;
  
}

.border{
  border: 2px solid black;
  width: 50%;
  margin-left: auto ;
  margin-right: auto;
  background-color: rgba(128, 128, 128, 0.43);
}

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