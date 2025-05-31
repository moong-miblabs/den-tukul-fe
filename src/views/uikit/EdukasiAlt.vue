<template>
    <div></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '@/store'
const $store = useStore()
import { BASE_URL } from '@/env.js'
function gotoEdukasi() {
    window.location.href = BASE_URL+'edukasi/index.html'
}
onMounted(() => {
    gotoEdukasi()
})
</script>