<script setup>
import AppMenu from './AppMenu.vue';
import AppMenuRole from './AppMenuRole.vue';
import AppMenuResponden from './AppMenuResponden.vue';

import { useRoute } from 'vue-router'
const $route = useRoute()

import { useStore } from '@/store'
const $store = useStore() 
</script>

<template>
    <div class="layout-sidebar">
        <app-menu-role v-if="$route.name == 'role'"></app-menu-role>
        <app-menu v-if="$store.getRole == 'ADMIN'"></app-menu>
        <app-menu-responden v-if="$store.getRole == 'RESPONDEN'"></app-menu-responden>
    </div>
</template>

<style lang="scss" scoped></style>
