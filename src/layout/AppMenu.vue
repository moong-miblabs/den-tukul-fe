<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: '',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-chart-pie', to: '/dashboard' },
            { label: 'Hasil Deteksi', icon: 'pi pi-fw pi-list', to: '/result' },
            { label: 'Hasil Pencegahan', icon: 'pi pi-fw pi-shield', to: '/result2' },
            { label: 'Hasil Evaluasi', icon: 'pi pi-fw pi-desktop', to: '/result3' },
            { label: 'Logout', icon: 'pi pi-fw pi-sign-out', to: '/logout' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
