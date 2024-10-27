<template>
    <div className="card" @click="goAsAdmin">
        <div class="font-semibold text-xl mb-4">Login sebagai Admin</div>
        <p>Use this page to start from scratch and place your custom content.</p>
    </div>
    <div className="card" @click="goAsResponden">
        <div class="font-semibold text-xl mb-4">Login sebagai Responden</div>
        <p>Use this page to start from scratch and place your custom content.</p>
    </div>
</template>


<script setup>
// ========== INSTANCE ==========
import { useRouter } from 'vue-router'
const $router = useRouter() 

import { useStore } from '@/store'
const $store = useStore()

// ========== METHODS ==========
function goAsAdmin() {
    $store.setRole('ADMIN')
    $router.push({ name: 'dashboard' })
}

function goAsResponden() {
    $store.setRole('RESPONDEN')
    $router.push({ name: 'home' })
}
</script>