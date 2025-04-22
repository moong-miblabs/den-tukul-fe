<template>
    <div></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '@/store'
const $store = useStore()
import { BASE_URL } from '@/env.js'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)
function gotoDeteksi() {
    window.location.href = BASE_URL+'deteksi.html?token='+$store.getToken+'&random='+nanoid()
}
onMounted(() => {
    gotoDeteksi()
})
</script>