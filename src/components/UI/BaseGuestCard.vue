<template>
        <div class="TSize topItems">
                <div class="grid grid-cols-5">
                        <div></div>
                        <div></div>
                        <div class="checked">Checked in ?</div>
                        
                </div>
        </div>
        <div class="bg-neutral-300 TSize GuestCard">

                <div class="grid grid-cols-5">
                        <div>
                                <p class="userName ">username/email</p>
                        </div>
                        <div>
                                <p class="flex-auto Label">Label</p>
                        </div>

                        <div>
                                <input class="Checkbox" type="checkbox" name="checkbox" value="value" alt="Checked in?" />
                        </div>
                        
                </div>
        </div>
</template>

<script>

</script>

<style scoped>

div{
        color: black;
}

.TSize{
        font-size: 28px;
}

.GuestCard{
        border-radius: 4px;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2%;
        box-shadow: 2px 3px rgb(100, 100, 100);
}

.userName{
        margin-left: 25px;
}

.Label{
        text-align: center;
}

.checked{
        font-size: 16px;
        text-align: center;
}

.topItems{
        margin-left: 5%;
        margin-right: 5%;
}

.Checkbox{
        align-content: center;
}

</style>