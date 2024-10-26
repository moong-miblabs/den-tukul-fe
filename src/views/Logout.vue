<template>
    <div></div>
</template>

<script setup>
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const $store    = useStore()
const $router   = useRouter()

onMounted(()=> {
    $store.$reset()
    $router.push({ path : '/login' })
})
</script>