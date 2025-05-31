<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    const backToTopButton = document.getElementById('back-to-top');
    // Scroll to top when back to top button is clicked
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})

const active = ref(null)

function scrollToElement(idElement) {
    const targetElement = document.getElementById(idElement);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.error(`Elemen dengan ID '${idElement}' tidak ditemukan.`);
    }
}

async function goto(strNum){
    active.value = strNum
    setTimeout(() => {
        scrollToElement('ID'+strNum)
    }, 1000);
}

const class_header = ref([
    'text-black-alpha-90',
    'dark:text-white-alpha-90'
])

const style_header = ref({
    // color: '#000',
    fontSize: '16px'
})

const class_content = ref([
    'text-black-alpha-90',
    'dark:text-white-alpha-90'
])

const style_content = ref({
    // color: '#000',
    fontSize: '14px',
    textAlign: 'justify',
    textJustify: 'inter-word',
    lineHeight: 1.8,
    letterSpacing: '0.03em'
})
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row gap-4">
            <a href="#" id="back-to-top"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
            <div class="w-full">
                <div class="card" style="padding: .25em;">
                    <div class="flex mb-4 gap-2 justify-center">
                        <Button @click="goto('0')" rounded label="1" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '0'" />
                        <Button @click="goto('1')" rounded label="2" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '1'" />
                        <Button @click="goto('2')" rounded label="3" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '2'" />
                        <Button @click="goto('3')" rounded label="4" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '3'" />
                        <Button @click="goto('4')" rounded label="5" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '4'" />
                        <Button @click="goto('5')" rounded label="6" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '5'" />
                        <Button @click="goto('6')" rounded label="7" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '6'" />
                        <Button @click="goto('7')" rounded label="8" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '7'" />
                        <Button v-if="0" @click="goto('8')" rounded label="9" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round" :outlined="active !== '8'" />

                        <!-- <Button @click="active = '0'" rounded label="PENGERTIAN" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '0'" />
                        <Button @click="active = '1'" rounded label="PENYEBAB" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '1'" />
                        <Button @click="active = '2'" rounded label="GEJALA" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '2'" />
                        <Button @click="active = '3'" rounded label="PENULARAN" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '3'" />
                        <Button @click="active = '4'" rounded label="PENCEGAHAN" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '4'" />
                        <Button @click="active = '5'" rounded label="IMPLEMENTASI" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '5'" />
                        <Button @click="active = '6'" rounded label="DETEKSI" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '6'" />
                        <Button @click="active = '7'" rounded label="PENGOBATAN" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '7'" />
                        <Button @click="active = '8'" rounded label="PUSTAKA" class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" :outlined="active !== '8'" /> -->
                    </div>
                    <Accordion v-model:value="active">
                        <AccordionPanel value="0" id="ID0" @click="goto('0')">
                            <AccordionHeader :style="style_header" :class="class_header">1. PENGERTIAN TUBERKULOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="features" class="px-6 lg:px-20 mx-0 lg:mx-20">
                                    <div class="grid grid-cols-12 gap-4 justify-center">
                                        <div
                                            class="col-span-12 mt-3 mb-20 p-2 md:p-20"
                                            style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                                        >
                                            <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                                                <div class="text-gray-900 mb-2 text-3xl font-semibold">PENGERTIAN TUBERKULOSIS</div>
                                                <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6 tri-wiji-format" style="max-width: 800px">
                                                    Tuberkulosis (TB) merupakan suatu penyakit yang disebabkan oleh organisme kompleks Mycobacterium tuberculosis, yang meliputi M. africanum, M. bovis, dan M. canetti (dan lainnya yang tidak memengaruhi manusia) (Thomas, A (2018). 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="features" class="px-6 lg:px-20 mx-0 lg:mx-20">
                                    <div class="grid grid-cols-12 gap-4 justify-center">
                                        <div
                                            class="col-span-12 mt-3 mb-20 p-2 md:p-20"
                                            style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                                        >
                                            <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                                                <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6 tri-wiji-format" style="max-width: 800px">
                                                    Tuberkulosis adalah suatu penyakit kronik menular yang disebabkan oleh bakteri Mycobacterium tuberculosis. Bakteri ini berbentuk batang dan bersifat asam sehingga sering dikenal dengan Basil Tahan Asam (BTA). Sebagian besar kuman TB sering ditemukan menginfeksi parenkim paru dan menyebabkan TB paru, namun bakteri ini juga memiliki kemampuan menginfeksi organ tubuh lainnya (TB paru ekstra) seperti pleura, kelenjar limfe, tulang, dan organ ekstra paru lainnya (Kemenkes, 2020).
                                                </p>
                                                <img src="/images/edukasi/a.jpeg" class="mt-6" alt="Company logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="1" id="ID1" @click="goto('1')">
                            <AccordionHeader :style="style_header" :class="class_header">2. PENYEBAB TUBERKULOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="features" class="px-6 lg:px-20 mx-0 lg:mx-20">
                                    <div class="grid grid-cols-12 gap-4 justify-center">
                                        <div
                                            class="col-span-12 mt-3 mb-20 p-2 md:p-20"
                                            style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                                        >
                                            <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                                                <div class="text-gray-900 mb-2 text-3xl font-semibold">PENYEBAB TUBERKULOSIS</div>
                                                <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6 tri-wiji-format" style="max-width: 800px">
                                                    Tuberkulosis (TB) merupakan suatu penyakit yang disebabkan oleh organisme kompleks Mycobacterium tuberculosis. Tuberkulosis biasanya menular dari manusia ke manusia lain lewat udara melalui percik renik atau droplet nucleus (<5 microns) yang keluar ketika seseorang yang terinfeksi TB paru atau TB laring sedang batuk, bersin, atau bicara.
                                                </p>
                                                <img src="/images/irfan/penyebab3.jpg" class="mt-6" alt="Company logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="2" id="ID2" @click="goto('2')">
                            <AccordionHeader :style="style_header" :class="class_header">3. TANDA & GEJALA TUBERKULOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">TANDA & GEJALA TUBERKULOSIS</div>
                                    </div>

                                    <div id="features" class="px-6 lg:px-20 mt-3 mx-0 lg:mx-20">
                                        <div class="grid grid-cols-12 gap-4 justify-center">
                                            <div
                                                class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                                                style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                                            >
                                                <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                                                    <div class="text-gray-900 mb-2 text-3xl font-semibold">Gejala Utama</div>
                                                    <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6 tri-wiji-format" style="max-width: 800px">
                                                        Batuk berdahak terus menerus selama ≥ 2 minggu
                                                    </p>
                                                    <img src="/images/irfan/gejala_utama.jpg" class="mt-6" alt="Company logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Gejala Tambahan</div>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Batuk mengeluarkan darah</div>
                                                <img src="/images/irfan/gejala_batuk_berdarah.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Demam berulang ≥ 2 minggu tanpa sebab yang jelas </div>
                                                <img src="/images/irfan/gejala_demam.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Berat badan turun atau tidak naik dalam 2 bulan terakhir</div>
                                                <img src="/images/irfan/gejala_penurunan_berat_badan.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Sesak napas atau nyeri dada</div>
                                                <img src="/images/irfan/gejala_sesak_nafas.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Berkeringat di malam hari</div>
                                                <img src="/images/irfan/gejala_berkeringat.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Nafsu makan turun</div>
                                                <img src="/images/irfan/gejala_kehilangan_nafsu_makan.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Lesu atau malaise, anak kurang aktif bermain</div>
                                                <img src="/images/irfan/gejala_lesu.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="3" id="ID3" @click="goto('3')">
                            <AccordionHeader :style="style_header" :class="class_header">4. CARA PENULARAN TUBERKULOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="features" class="px-6 lg:px-20 mx-0 lg:mx-20">
                                    <div class="grid grid-cols-12 gap-4 justify-center">
                                        <div
                                            class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                                            style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                                        >
                                            <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                                                <div class="text-gray-900 mb-2 text-3xl font-semibold">CARA PENULARAN TUBERKULOSIS</div>
                                                <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6 tri-wiji-format" style="max-width: 800px">
                                                    Penularan tuberkulosis (TBC) biasanya terjadi melalui udara ketika penderita TBC batuk atau bersin. Bakteri TB tersebut dapat bertahan di udara untuk jangka waktu tertentu sebelum akhirnya terhirup oleh orang lain. Penularan umumnya terjadi di ruangan dimana percikan dahak tersebut berada dalam waktu yang lama, terutama jika ruangan tersebut gelap dan lembab. Saat batuk, seorang penderita TBC dapat melepaskan sekitar 3.000 percikan dahak, yang mengandung bakteri TBC.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="features" class="px-6 lg:px-20 mx-0 lg:mx-20">
                                    <div class="grid grid-cols-12 gap-4 justify-center">
                                        <div
                                            class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                                            style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                                        >
                                            <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                                                <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6 tri-wiji-format" style="max-width: 800px">
                                                    Tidak semua orang yang menghirup udara yang mengandung bakteri TB akan segera terkena TBC. Pada umumnya, bakteri yang terhirup akan berdiam di paru-paru tanpa menyebabkan penyakit atau menularkan kepada orang lain. Bakteri ini tetap berada dalam tubuh dan menunggu saat yang tepat untuk menginfeksi, yaitu ketika daya tahan tubuh sedang lemah. Selain itu, untuk penderita TBC yang telah menjalani pengobatan secara teratur selama minimal 2 minggu, risiko penularannya kepada orang lain melalui udara yang dihirupnya menjadi sangat rendah.
                                                </p>
                                                <img src="/images/irfan/penularan.jpg" class="mt-6" alt="Company logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="4" id="ID4" @click="goto('4')">
                            <AccordionHeader :style="style_header" :class="class_header">5. PENCEGAHAN TUBERKULOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">PENCEGAHAN TUBERKULOSIS</div>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Imunisasi BCG</div>
                                                <img src="/images/irfan/pencegahan_imunisasi.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                        <span class="text-surface-600 dark:text-surface-200 tri-wiji-format">Imunisasi BCG pada bayi usia 0-1 bulan untuk mencegah TBC berat </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Menutup mulut dan hidung</div>
                                                <img src="/images/irfan/pencegahan_menutup_hidung.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                        <span class="text-surface-600 dark:text-surface-200 tri-wiji-format">Saat batuk sebaiknya menutup mulut dan hidung untuk mencegah terperciknya kuman TBC di udara </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Menampung dahak</div>
                                                <img src="/images/irfan/pencegahan_dahak.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                        <span class="text-surface-600 dark:text-surface-200 tri-wiji-format">Buang dahak ke tempat pembuangan sampah tertutup</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Menjaga sirkulasi udara</div>
                                                <img src="/images/irfan/pencegahan_sirkulasi.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                        <span class="text-surface-600 dark:text-surface-200 tri-wiji-format">Menjaga sirkulasi di ruangan tertutup dan cahaya matahari yang cukup</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Mengobati pasien TB</div>
                                                <img src="/images/irfan/pencegahan_mengobati.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                        <span class="text-surface-600 dark:text-surface-200 tri-wiji-format">Mengobati pasien TB terutama TB tipe menular hingga sembuh</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="5" id="ID5" @click="goto('5')">
                            <AccordionHeader :style="style_header" :class="class_header">6. IMPLEMENTASI</AccordionHeader>
                            <AccordionContent>
                                <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Implementasi</div>
                                        <span class="text-muted-color text-2xl">yang dilakukan di rumah</span>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Minum obat secara teratur</div>
                                                <img src="/images/irfan/implementasi_minum_obat.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Membatasi kontak dengan orang lain</div>
                                                <img src="/images/irfan/implementasi_jaga_jarak.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Menyediakan ruangan (kamar) terpisah</div>
                                                <img src="/images/irfan/implementasi_kamar_terpisah.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Keluarga sebaiknya mendengarkan keluh kesah pasien</div>
                                                <img src="/images/irfan/implementasi_keluhan_keluarga.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="6" id="ID6" @click="goto('6')">
                            <AccordionHeader :style="style_header" :class="class_header">7. DETEKSI TEBURKOLOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">DETEKSI TEBURKOLOSIS</div>
                                        <span class="text-muted-color text-2xl">   Deteksi tuberkulosis pada anak dapat dilakukan dengan melakukan beberapa pemeriksaan penunjang antara lain:</span>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Foto thorax, untuk melihat lapang paru</div>
                                                <img src="/images/irfan/deteksi_foto.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Tes tuberkulin kulit atau Tes Mantoux</div>
                                                <img src="/images/irfan/deteksi_tst.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Interferon Release Assays atau IGRA, biasanya untuk pengecekan TB laten</div>
                                                <img src="/images/irfan/deteksi_interferon.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Pemeriksaan Bakteriologik, pemeriksaan diambil dari sputum dan diambil setiap pagi selama 3 hari berturut-turut.</div>
                                                <img src="/images/irfan/deteksi_pemeriksaan_bakteriologik.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Kultur Sputum</div>
                                                <img src="/images/irfan/deteksi_kultur_sputum.jpg" class="w-10/12 mx-auto" alt="startup" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl tri-wiji-format">Gene Xpert MTB/RIF Assay</div>
                                                <img src="/images/irfan/deteksi_Gene_Xpert_MTBRIF_Assay.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                                                <div class="my-8 flex flex-col items-center gap-4">
                                                    <div class="flex items-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="7" id="ID7" @click="goto('7')">
                            <AccordionHeader :style="style_header" :class="class_header">8. PENGOBATAN TUBERKULOSIS</AccordionHeader>
                            <AccordionContent>
                                <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">PENGOBATAN TUBERKULOSIS</div>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-12 p-0 md:p-12">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <img src="/images/irfan/pengobatan.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <Divider class="w-full bg-surface-200"></Divider>
                                                <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">TB Ringan : Pengobatan TBC minimal dilakukan  selama 6-8 BULAN</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">TB ekstra paru berat (TB Otak, TB Tulang) : pengobatan minimal dilakukan selama 12 BULAN</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Jangan berhenti minum meskipun gejala sudah tidak muncul sebelum masa pengobatan selesai</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Harus tepat DOSIS, tepat CARA, serta tepat WAKTU dalam mengkonsumsinya sehingga untuk mencegah resistensi obat atau kebal obat.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="8" id="ID8" v-if="0">
                            <AccordionHeader :style="style_header" :class="class_header">9. DAFTAR PUSTAKA</AccordionHeader>
                            <AccordionContent>
                                <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                                    <div class="text-center mb-6">
                                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">DAFTAR PUSTAKA</div>
                                    </div>

                                    <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                                        <div class="col-span-12 lg:col-span-12 p-0 md:p-12">
                                            <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                                                <img src="/images/irfan/Daftar_Pustaka.jpg" class="w-10/12 mx-auto" alt="free" />
                                                <Divider class="w-full bg-surface-200"></Divider>
                                                <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Agustina, Novita. (2022). Pemeriksaan Penunjang TB pada Anak. Diakses pada 03 Februari 2024, dari https:// yankes.kemkes.go.id/ view_artikel/ 1886/ pemeriksaan-penunjang-tb-pada-anak.</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Kemenkes RI. (2016). Petunjuk Teknis Manajemen dan Tatalaksana TB Anak. Jakarta: Kementerian Kesehatan RI.</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Kemenkes RI. (2020). Tata Laksana Tuberkulosis. Jakarta: Kementerian Kesehatan RI.</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Pratama, Yogi Arvendo. (2021). Karakteristik Klinis Penyakit Tuberkulosis Paru pada Anak. Jurnal Penelitian Perawat Professional, 3 (2): 237-242. https:// jurnal.globalhealthsciencegroup.com/ index.php/ JPPP/ article/ view/ 403</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Rita, Erni et al., (2020). Modul Tuberkulosisi pada Kader TB. Jakarta: Fakultas Ilmu Keperawatan, Universitas Muhammadiyah Jakarta. </span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Thomas, Thania A. (2018). Tuberculosis in Children. Pediatr Clin North Am, 64 (4): 893-909.</span>
                                                    </li>
                                                    <li class="py-2">
                                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                                        <span class="text-xl leading-normal">Yanantika, Rima Dwi. (2023). Cara Penularan Tuberkulosis Paru. Diakses pada 07 Februari 2024, dari https://plk.unair.ac.id/cara-penularan-tuberkulosis-paru/</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
/* Back to Top Button Styles */
#back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: block; /* Hidden by default */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

#back-to-top:hover {
  opacity: 1;
  background-color: #45a049;
  transform: translateY(-2px);
}

#back-to-top.show {
  display: block; /* Show when scrolled down */
}
</style>