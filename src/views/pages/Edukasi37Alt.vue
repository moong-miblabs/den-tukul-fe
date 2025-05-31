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
                    <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">DETEKSI TEBURKOLOSIS</div>
                    <span class="text-muted-color text-2xl">   Deteksi tuberkulosis pada anak dapat dilakukan dengan melakukan beberapa pemeriksaan penunjang antara lain:</span>
                </div>

                <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Foto thorax, untuk melihat lapang paru</div>
                            <img src="/images/irfan/deteksi_foto.jpg" class="w-10/12 mx-auto" alt="free" />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <div class="flex items-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Tes tuberkulin kulit atau Tes Mantoux</div>
                            <img src="/images/irfan/deteksi_tst.jpg" class="w-10/12 mx-auto" alt="startup" />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <div class="flex items-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Interferon Release Assays atau IGRA, biasanya untuk pengecekan TB laten</div>
                            <img src="/images/irfan/deteksi_interferon.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <div class="flex items-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Pemeriksaan Bakteriologik, pemeriksaan diambil dari sputum dan diambil setiap pagi selama 3 hari berturut-turut.</div>
                            <img src="/images/irfan/deteksi_pemeriksaan_bakteriologik.jpg" class="w-10/12 mx-auto" alt="free" />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <div class="flex items-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Kultur Sputum</div>
                            <img src="/images/irfan/deteksi_kultur_sputum.jpg" class="w-10/12 mx-auto" alt="startup" />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <div class="flex items-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Gene Xpert MTB/RIF Assay</div>
                            <img src="/images/irfan/deteksi_Gene_Xpert_MTBRIF_Assay.jpg" class="w-10/12 mx-auto" alt="enterprise" />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <div class="flex items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>