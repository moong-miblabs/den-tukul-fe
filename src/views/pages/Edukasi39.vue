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
        </div>
    </div>
</template>