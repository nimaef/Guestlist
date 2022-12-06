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
                <div class="emailInvites"><textarea class="emailArea" name="invites" id="" placeholder="Enter email adresses to invite people:"></textarea></div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="moreEmails"><p>To invite more people at once, seperate the e-mail adresses with a comma.</p></div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="moreEmails1"><p>You can also copy the link below and send it to guests.</p></div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="inviteLink"><p>www.examplelink.com/eventlink</p></div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="moreEmails1"><p>Give a label to the people you want to invite.</p></div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div class="moreEmails">
                  <div>
                        <label for="location" class="block text-sm font-medium text-gray-700"></label>
                        <select id="location" name="location" class="mt-1 block w-full rounded-md border-gray-300 mb-10 pt-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                 <!--#region main  -->
                                <option selected>select label</option>
                                <option >label 1</option>
                                <option >label 2</option>
                                <option >label 3</option>
                                <!--#endregion -->
                        </select>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="pb-5 flex grid grid-cols-3">
                <div></div>
                <div></div>
                <div class=""><a href="/event"><button class="donebutton">done</button></a></div>
              </div>
            </div>
          </div>
        </div>
      </main>
</template>

<script>

</script>

<style scoped>

.donebutton{
  color: black;
  border: 2px  solid black;
  border-radius: 8px;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-right: 1rem;
  font-size: 20px;
  float: right;
  width: 20%;
}

.inviteLink{
  border: none;
  background-color: rgba(128, 128, 128, 0.423);
  text-align: center;
  padding: 1rem;
}

textarea{
  resize: none;
}

.moreEmails{
  text-align: center;
}

.moreEmails1{
  text-align: center;
  margin-top: 3rem;
  
}

.emailArea{
  width: 20rem;
  height: 15rem;
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