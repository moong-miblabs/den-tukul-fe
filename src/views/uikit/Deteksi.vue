<script setup>
import { ref } from 'vue';
import { LOADING_OPTIONS } from '@/env';
import $axios from '@/axios';
import { useRouter } from 'vue-router'
const $router = useRouter()

// ========== STATE ==========
const dropdownValues = ref([
    { name: 'IYA', code: '1' },
    { name: 'TIDAK', code: '0' }
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
const q10 = ref(null)
const q11 = ref(null)
const q12 = ref(null)

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

    if(!(q10.value == '1' || q10.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 10 belum dijawab"
        return
    }

    if(!(q11.value == '1' || q11.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 11 belum dijawab"
        return
    }

    if(!(q12.value == '1' || q12.value == '0')) {
        errorVisible.value = true
        errorMessage.value = "Pertanyaan 12 belum dijawab"
        return
    }

    $.LoadingOverlay("show", LOADING_OPTIONS);
    var response = await $axios.post('deteksi/register', {
        q1: q1.value,
        q2: q2.value,
        q3: q3.value,
        q4: q4.value,
        q5: q5.value,
        q6: q6.value,
        q7: q7.value,
        q8: q8.value,
        q9: q9.value,
        q10: q10.value,
        q11: q11.value,
        q12: q12.value,
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
                <div class="font-semibold text-xl">1.	Batuk Berkepanjangan</div>
                <img src="/images/deteksi/1.png" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Batuk yang berlangsung lebih dari 2-3 minggu adalah gejala utama TBC. Pada remaja, batuk ini awalnya kering, kemudian berkembang menjadi batuk berdahak. Dalam kasus yang lebih berat, batuk dapat disertai dengan darah.</p>
                <Select v-model="q1" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">2.	Penurunan Berat Badan</div>
                <img src="/images/deteksi/2.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Remaja dengan TBC sering mengalami penurunan berat badan. Ini bisa terjadi meskipun nafsu makan masih normal.</p>
                <Select v-model="q2" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">3.	Demam Ringan</div>
                <img src="/images/deteksi/3.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Demam rendah yang berlangsung lama, terutama di sore atau malam hari, bisa menjadi tanda TBC. Suhu tubuh biasanya tidak terlalu tinggi, sekitar 37.5-38.5°C.</p>
                <Select v-model="q3" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>
    </Fluid>

    <br>

    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">4.	Keringat Malam</div>
                <img src="/images/deteksi/4.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Berkeringat berlebihan di malam hari, bahkan dalam kondisi cuaca yang tidak panas, adalah gejala khas TBC.</p>
                <Select v-model="q4" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">5.	Kelelahan dan Kelemahan</div>
                <img src="/images/deteksi/5.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Remaja dengan TBC sering merasa lelah dan lemah secara tidak wajar, bahkan setelah istirahat yang cukup.</p>
                <Select v-model="q5" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">6.	Nyeri Dada</div>
                <img src="/images/deteksi/6.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Rasa sakit atau tidak nyaman di dada, terutama saat bernapas dalam atau batuk, bisa mengindikasikan TBC paru.</p>
                <Select v-model="q6" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>
    </Fluid>

    <br>

    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">7.	Sesak Napas</div>
                <img src="/images/deteksi/7.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Kesulitan bernapas atau napas pendek, terutama saat melakukan aktivitas fisik, bisa menjadi tanda TBC yang sudah lanjut.</p>
                <Select v-model="q7" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">8.	Kehilangan Nafsu Makan</div>
                <img src="/images/deteksi/8.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Remaja dengan TBC ,mengalami penurunan nafsu makan yang signifikan.</p>
                <Select v-model="q8" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">9.	Pembengkakan Kelenjar Getah Bening</div>
                <img src="/images/deteksi/9.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Terutama di leher atau di ketiak, bisa menjadi tanda TBC yang menyebar ke sistem limfatik.</p>
                <Select v-model="q9" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>
    </Fluid>

    <br>

    <Fluid class="flex flex-col md:flex-row gap-8">
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">10.	Kulit Pucat</div>
                <img src="/images/deteksi/10.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Kulit yang tampak lebih pucat dari biasanya bisa mengindikasikan anemia, yang sering terjadi pada penderita TBC.</p>
                <Select v-model="q10" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">11.	Perubahan Perilaku</div>
                <img src="/images/deteksi/12.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">Remaja dengan TBC mungkin menjadi lebih mudah tersinggung, lesu, atau mengalami perubahan mood yang tidak biasa.</p>
                <Select v-model="q11" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
            </div>
        </div>

        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">12.	Gangguan Pertumbuhan</div>
                <img src="/images/deteksi/11.jpeg" width="100%">
                <p style="text-align: justify; text-justify: inter-word;">TBC dapat memperlambat pertumbuhan dan perkembangan pada remaja.</p>
                <Select v-model="q12" :options="dropdownValues" optionLabel="name" optionValue="code" placeholder="Apakah Anda mengalaminya?" />
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
