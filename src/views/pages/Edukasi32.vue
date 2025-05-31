<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.scrollTo(0,0)
})

function smoothScroll(id) {
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div id="features" class="px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
                <div class="grid grid-cols-12 gap-4 justify-center">
                    <div
                        class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                            <div class="text-gray-900 mb-2 text-3xl font-semibold">PENYEBAB TUBERKOLOSIS</div>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                                Tuberkulosis (TB) merupakan suatu penyakit yang disebabkan oleh organisme kompleks Mycobacterium tuberculosis. Tuberkulosis biasanya menular dari manusia ke manusia lain lewat udara melalui percik renik atau droplet nucleus (<5 microns) yang keluar ketika seseorang yang terinfeksi TB paru atau TB laring sedang batuk, bersin, atau bicara.
                            </p>
                            <img src="/images/irfan/penyebab3.jpg" class="mt-6" alt="Company logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>