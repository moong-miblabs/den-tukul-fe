<script setup>
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

            <div
                id="hero"
                class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
                style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
            >
                <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                    <h1 class="text-6xl font-bold text-gray-900 leading-tight">EDUKASI</h1>
                    <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700">Pencegahan TBC pada Anak</p>
                </div>
                <div class="flex justify-center md:justify-end" style="visibility: hidden;">
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </div>

            <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
                <div class="grid grid-cols-12 gap-4 justify-center">
                    <div class="col-span-12 text-center mt-20 mb-6">
                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Daftar Isi</div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-1' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 cursor-pointer">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(27,161,226,0.2), rgba(164,196,0,0.2)), linear-gradient(180deg, rgba(227,200,0,0.2), rgba(244,114,208,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-question !text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold">PENGERTIAN</h5>
                                <span class="text-surface-600 dark:text-surface-200">Pengertian Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-2' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0 cursor-pointer">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(62,101,255,0.2), rgba(0,171,169,0.2)), linear-gradient(180deg, rgba(240,163,10,0.2), rgba(216,0,115,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-cyan-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-exclamation-triangle !text-2xl text-cyan-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">PENYEBAB</div>
                                <span class="text-surface-600 dark:text-surface-200">Penyebab Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-3' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(0,80,239,0.2), rgba(96,169,23,0.2)), linear-gradient(180deg, rgba(135,121,78,0.2), rgba(229,20,0,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-indigo-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-bell !text-2xl text-indigo-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">GEJALA</div>
                                <span class="text-surface-600 dark:text-surface-200">Tanda & Gejala Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-4' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(27,161,226,0.2), rgba(164,196,0,0.2)), linear-gradient(180deg, rgba(227,200,0,0.2), rgba(244,114,208,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-slate-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users !text-2xl text-slate-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">PENULARAN</div>
                                <span class="text-surface-600 dark:text-surface-200">Cara Penularan Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-5' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg-4 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(62,101,255,0.2), rgba(0,171,169,0.2)), linear-gradient(180deg, rgba(240,163,10,0.2), rgba(216,0,115,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-orange-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-shield !text-2xl text-orange-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">PENCEGAHAN</div>
                                <span class="text-surface-600 dark:text-surface-200">Pencegahan Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-6' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(0,80,239,0.2), rgba(96,169,23,0.2)), linear-gradient(180deg, rgba(135,121,78,0.2), rgba(229,20,0,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-pink-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-building !text-2xl text-pink-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">IMPLEMENTASI</div>
                                <span class="text-surface-600 dark:text-surface-200">Implementasi yang dilakukan di rumah</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-7' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(27,161,226,0.2), rgba(164,196,0,0.2)), linear-gradient(180deg, rgba(227,200,0,0.2), rgba(244,114,208,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-teal-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-search !text-2xl text-teal-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">DETEKSI</div>
                                <span class="text-surface-600 dark:text-surface-200">Deteksi Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-8' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg-4 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(62,101,255,0.2), rgba(0,171,169,0.2)), linear-gradient(180deg, rgba(240,163,10,0.2), rgba(216,0,115,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-blue-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="fa fa-fw fa-medkit !text-2xl text-blue-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">PENGOBATAN</div>
                                <span class="text-surface-600 dark:text-surface-200">Pengobatan Tuberkolosis</span>
                            </div>
                        </div>
                    </div>

                    <div @click="$router.push({ name: 'edukasi-9' })" class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(0,80,239,0.2), rgba(96,169,23,0.2)), linear-gradient(180deg, rgba(135,121,78,0.2), rgba(229,20,0,0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-purple-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-book !text-2xl text-purple-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">PUSTAKA</div>
                                <span class="text-surface-600 dark:text-surface-200">DAFTAR PUSTAKA</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                            <div class="text-gray-900 mb-2 text-3xl font-semibold">Tri Wiji Lestari</div>
                            <span class="text-gray-600 text-2xl">2024</span>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                                PRODI S3 KESEHATAN MASYARAKAT<br>
                                FAKULTAS KEDOKTERAN<br>
                                UNIVERSITAS NEGERI SEMARANG
                            </p>
                            <img src="/images/Logo_of_Universitas_Negeri_Semarang.jpg?zsrfc" alt="UNNES Logo" width="50%" class="mt-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
