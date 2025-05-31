<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: '',
        items: [
            { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Edukasi', icon: 'pi pi-fw pi-book', to: '/edukasi' },
            { label: 'Deteksi', icon: 'pi pi-fw pi-search', to: '/deteksi' },
            { label: 'Pencegahan', icon: 'pi pi-fw pi-map', to: '/intervensi' },
            { label: 'Evaluasi', icon: 'pi pi-fw pi-desktop', to: '/evaluasi' },
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
