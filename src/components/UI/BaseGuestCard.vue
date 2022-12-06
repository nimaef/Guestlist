<template>
  <div class="">
    <div class="bg-neutral-300 TSize GuestCard">
      <div class="grid grid-cols-5 content">
        <div>
          <p class="userName">{{ guest.name }}</p>
        </div>
        <div>
          <p class="flex-auto Label">{{ guest.label }}</p>
        </div>

        <div class="Checkbox">
          <input
            class="Checkbox"
            type="checkbox"
            name="checkbox"
            :checked="guest.checkedIn"
            alt="Checked in?"
            @click="$emit('onCheck', $event)"
          />
        </div>
        <div class="settingButton">
          {{ test }}
          <a href="/guestSettings"><button>Guest settings</button></a>
        </div>
        <div class="trashIcon" @click="$emit('deleteRow')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  props: {
    guest: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },



  methods: {

  },

  
};
</script>

<style scoped>
/* .fixedContainer{
        height: 600px;
        width: auto;
}

.content {
  height: 590px;
  overflow: auto;
} */

div {
  color: black;
}

.TSize {
  font-size: 28px;
}

.GuestCard {
  border-radius: 4px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  box-shadow: 2px 3px rgb(100, 100, 100);
  padding: 0.5rem;
}

.userName {
  margin-left: 25px;
}

.Label {
  text-align: center;
  margin-left: 25px;
}

.topLabel {
  margin-left: 25px;
}

.checked {
  font-size: 16px;
  text-align: center;
}

.topItems {
  margin-left: 5%;
  margin-right: 5%;
  font-size: 16px;
  text-align: center;
}

.Checkbox {
  margin: auto;
}

.trashIcon {
  margin: auto;
  cursor: pointer;
}

.settingButton {
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  font-size: 22px;
  margin: auto;
  padding: 2%;
}

a {
  color: black;
}
</style>
