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
function gotoIntervensi() {
    window.location.href = BASE_URL+'intervensi.html?token='+$store.getToken+'&random='+nanoid()
}
onMounted(() => {
    gotoIntervensi()
})
</script>