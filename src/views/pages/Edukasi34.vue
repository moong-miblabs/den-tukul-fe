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
                            <div class="text-gray-900 mb-2 text-3xl font-semibold">CARA PENULARAN TUBERKOLOSIS</div>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                                Penularan tuberkulosis (TBC) biasanya terjadi melalui udara ketika penderita TBC batuk atau bersin. Bakteri TB tersebut dapat bertahan di udara untuk jangka waktu tertentu sebelum akhirnya terhirup oleh orang lain. Penularan umumnya terjadi di ruangan dimana percikan dahak tersebut berada dalam waktu yang lama, terutama jika ruangan tersebut gelap dan lembab. Saat batuk, seorang penderita TBC dapat melepaskan sekitar 3.000 percikan dahak, yang mengandung bakteri TBC.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="features" class="px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
                <div class="grid grid-cols-12 gap-4 justify-center">
                    <div
                        class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                                Tidak semua orang yang menghirup udara yang mengandung bakteri TB akan segera terkena TBC. Pada umumnya, bakteri yang terhirup akan berdiam di paru-paru tanpa menyebabkan penyakit atau menularkan kepada orang lain. Bakteri ini tetap berada dalam tubuh dan menunggu saat yang tepat untuk menginfeksi, yaitu ketika daya tahan tubuh sedang lemah. Selain itu, untuk penderita TBC yang telah menjalani pengobatan secara teratur selama minimal 2 minggu, risiko penularannya kepada orang lain melalui udara yang dihirupnya menjadi sangat rendah.
                            </p>
                            <img src="/images/irfan/penularan.jpg" class="mt-6" alt="Company logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>