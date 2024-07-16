<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <div class="text-2xl font-bold">你好，这是你的任务清单助手</div>

        <div class="flex flex-col justify-center items-center mt-10 w-80 h-80 border-solid border border-black">
            <input type="text" class=" outline-none border mb-3">

            <input type="password" class=" outline-none border">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<style lang="scss" scoped></style>