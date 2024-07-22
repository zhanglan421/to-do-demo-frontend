<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <div class="text-2xl font-bold">你好，这是你的任务清单助手</div>

        <div class="flex flex-col justify-center items-center mt-10 w-80 h-80 border-solid border border-black">
            <input type="text" class=" outline-none border mb-3">

            <input type="password" class=" outline-none border">

            <input type="file" class=" outline-none border" @input="uploadFile">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import axios from 'axios'

import cos from '../../assets/cos';

export default defineComponent({
    setup() {
        const uploadFile = (event: any) => {
            cos.putObject({
                Bucket: 'for-qi79-1301392920',
                Body: event.target.files[0],
                Region: 'ap-chengdu',
                Key: event.target.files[0].name,
                Headers: {
                    'content-disposition': "attachment;filename=" + event.target.files[0].name + ";filename*=UTF-8''" + event.target.files[0].name
                },

            }).then((res: any) => {
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
            })
        }

        return { uploadFile }
    }
})
</script>

<style lang="scss" scoped></style>