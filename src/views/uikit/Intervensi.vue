<script setup>
import { ref } from 'vue';
import { LOADING_OPTIONS } from '@/env';
import $axios from '@/axios';
import { useRouter } from 'vue-router'
const $router = useRouter()

// ========== STATE ==========
const dropdownValues = ref([
    { name: 'SUDAH', code: '1' },
    { name: 'BELUM', code: '0' }
]);

const q1 = ref(null)
const q2 = ref(null)
const q3 = ref(null)
const q4 = ref(null)
const q5 = ref(null)
const q6 = ref(null)
const q7 = ref(null)
const q8 = ref(null)
const q9 = ref(null)

// ========== ERROR ==========
const errorVisible = ref(false)
const errorMessage = ref('')

// ========== SUCCESS ==========
const successVisible = ref(false)
const successMessage = ref('')

async function onSubmit() {
    if(!(q1.value == '1' || q1.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 1 belum dijawab"
        return
    }

    if(!(q2.value == '1' || q2.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 2 belum dijawab"
        return
    }

    if(!(q3.value == '1' || q3.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 3 belum dijawab"
        return
    }

    if(!(q4.value == '1' || q4.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 4 belum dijawab"
        return
    }

    if(!(q5.value == '1' || q5.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 5 belum dijawab"
        return
    }

    if(!(q6.value == '1' || q6.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 6 belum dijawab"
        return
    }

    if(!(q7.value == '1' || q7.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 7 belum dijawab"
        return
    }

    if(!(q8.value == '1' || q8.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 8 belum dijawab"
        return
    }

    if(!(q9.value == '1' || q9.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 9 belum dijawab"
        return
    }

    $.LoadingOverlay("show", LOADING_OPTIONS);
    var response = await $axios.post('intervensi/register', {
        q1: q1.value,
        q2: q2.value,
        q3: q3.value,
        q4: q4.value,
        q5: q5.value,
        q6: q6.value,
        q7: q7.value,
        q8: q8.value,
        q9: q9.value
    })
    $.LoadingOverlay("hide");
    console.log(response)

    if(response.data.status === "success") {
        successVisible.value = true
        successMessage.value = "Terima Kasih Telah Berpartisipasi"
        setTimeout(() => {
            successVisible.value = false
            successMessage.value = ""
            $router.push('/')
        }, 5000);
    }
}

</script>

<template>
    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">1.	Vaksinasi Bacillus Calmette et Guerin (BCG)</div>
                <img src="/images/intervensi/1.png" width="100%">
                <Select v-model="q1" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">2.	Cuci Tangan</div>
                <img src="/images/intervensi/2.png" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Selalu cuci tangan dengan cara yang benar, gunakan air, (jangan lupa sela-sela jari dan punggung telapak tangan), gunakan sabun untuk membunuh kuman yang tidak terlihat.</p>
                <Select v-model="q2" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">3.	Menutup mulut dengan tisu atau siku Ketika batuk</div>
                <img src="/images/intervensi/3.png" width="100%">
                <Select v-model="q3" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
    </Fluid>

    <br>

    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">4.	Menggunakan masker Ketika batuk</div>
                <img src="/images/intervensi/4.png" width="100%">
                <Select v-model="q4" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">5.	Tidak  membuang dahak sembarangan (ditempat yang ditentukan)</div>
                <img src="/images/intervensi/5.jpeg" width="100%">
                <Select v-model="q5" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">6.	Upayakan berada di ruangan yang mempunyai ventilasi yang cukup sehingga aliran udara lancar dan mendapatkan penyinaran matahari yang baik</div>
                <img src="/images/intervensi/6.png" width="100%">
                <Select v-model="q6" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
    </Fluid>

    <br>

    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">7.	Pisahkan ruang tidur anak yang batuk dengan anggota keluarga  yang sehat</div>
                <img src="/images/intervensi/7.jpeg" width="100%">
                <Select v-model="q7" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">8.	Kurangi kontak dengan penderita dan yang dicurigai menderita TBC</div>
                <img src="/images/intervensi/8.jpeg" width="100%">
                <Select v-model="q8" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">9.	Periksakan diri di fasilitas Kesehatan terdekat</div>
                <img src="/images/intervensi/9.png" width="100%">
                <Select v-model="q9" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda Sudah Melakukannya?" />
            </div>
        </div>
    </Fluid>

    <br>

    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <Button label="Submit" @click="onSubmit"></Button>
            </div>
        </div>
    </Fluid>

    <Dialog v-model:visible="errorVisible" modal :style="{ width: '25rem' }">
        <template #header>
            <span class="text-red-500 dark:text-red-300 text-xl">Gagal!</span>
        </template>
        <span class="text-red-500 dark:text-red-300 block mb-8">{{ errorMessage }}</span>
    </Dialog>

    <Dialog v-model:visible="successVisible" modal :style="{ width: '25rem' }">
        <template #header>
            <span class="text-green-500 dark:text-green-300 text-xl">Berhasil!</span>
        </template>
        <span class="text-green-500 dark:text-green-300 block mb-8">{{ successMessage }}</span>
    </Dialog>
</template>
