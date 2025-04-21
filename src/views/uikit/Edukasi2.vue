<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

onMounted(() => {
    // This will return a live HTMLCollection of elements with the specified class name
    var elements = document.getElementsByClassName('layout-main-container');

    var firstElement = null
    if(elements.length) {
        // Accessing the first element with the class name
        var firstElement = elements[0];
    }

    if(firstElement) {
        firstElement.style.backgroundColor = '#FFFBF3';
    }
})

onUnmounted(() => {
    // This will return a live HTMLCollection of elements with the specified class name
    var elements = document.getElementsByClassName('layout-main-container');

    var firstElement = null
    if(elements.length) {
        // Accessing the first element with the class name
        var firstElement = elements[0];
    }

    if(firstElement) {
        firstElement.removeAttribute('style');
    }
})

</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full">
                <img src="/images/edukasi/1.png">
                <img src="/images/edukasi/2-alt.png">
                <img src="/images/edukasi/3.png">
                <img src="/images/edukasi/4.png">
                <img src="/images/edukasi/5.png">
                <img src="/images/edukasi/6.png">
                <img src="/images/edukasi/7.png">
                <img src="/images/edukasi/8.png">
                <img src="/images/edukasi/9.png">
                <img src="/images/edukasi/12.png">
            </div>
        </div>
    </div>
</template>
