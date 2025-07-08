<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2'

import dateFormat from 'dateformat'

// ========== INSTANCE ==========
import { useRouter } from 'vue-router'
const $router   = useRouter()
import { useStore } from '@/store'
const $store = useStore()
import $axios from '@/axios';
// import $ from 'jquery'; import 'gasparesganga-jquery-loading-overlay';

// ========== STATE ==========
const nama = ref('')
const jenis_kelamin = ref(null)
const tanggal_lahir = ref(null)
const username = ref('')
const password = ref('')
const repassword = ref('')

const agamas = ref([
    {id: null, nama_agama: null}
])
const agama = ref(null)
const agamaLoading = ref(false)

const pendidikans = ref([
    {id: null, nama_jenjang: null}
])
const pendidikan = ref(null)
const pendidikanLoading = ref(false)



// ========== ERROR ==========
const errorVisible = ref(false)
const errorMessage = ref('')

// ========== METHODS ==========
async function getAgama() {
    try {
        agamaLoading.value = true
        var response = await $axios.get('agama')
        agamaLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            agamas.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

async function getPendidikan() {
    try {
        pendidikanLoading.value = true
        var response = await $axios.get('jenjang')
        pendidikanLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            pendidikans.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

onMounted(async () => {
    await getAgama()
    await getPendidikan()
})

function onSubmit() {
    if(!nama.value) {
        Swal.fire("nama harus diisi.")
        return
    }
    if(!jenis_kelamin.value) {
        Swal.fire("jenis kelamin harus diisi.")
        return
    }
    if(!tanggal_lahir.value) {
        Swal.fire("tanggal lahir harus diisi.")
        return
    }
    if(!agama.value) {
        Swal.fire("agama harus dipilih diisi.")
        return
    }
    if(!pendidikan.value) {
        Swal.fire("pendidikan terkahir harus diisi.")
        return
    }
    if(!username.value) {
        Swal.fire("username harus diisi.")
        return
    }
    if(!password.value) {
        Swal.fire("password harus diisi.")
        return
    } else {
        if(password.value !== repassword.value) {
            Swal.fire("password dan konfirmasi password tidak sama.")
            return
        }
    }
    Swal.fire({
        title: "Apakah Anda ingat username dan password anda?",
        text: "username dan password dibutuhkan untuk login",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Lupa, Saya Ragu",
        confirmButtonText: "Yakin Ingat"
    })
    .then(result => {
        console.log(result)
        if(result.isConfirmed) {
            $axios.post('login/register', {
                nama_user: nama.value,
                jenis_kelamin: jenis_kelamin.value,
                tanggal_lahir: dateFormat(tanggal_lahir.value,"yyyy-mm-dd"),
                agama_id: agama.value,
                jenjang_id: pendidikan.value,
                username_user: username.value,
                password_user: password.value,
            })
            .then(response => {
                if(response.data.status == "success") {
                    Swal.fire({
                        icon: "success",
                        title: "Berhasil mendaftar",
                        text: "silahkan login dengan username dan password anda"
                    }).
                    then(resultAgain => {
                        $router.push('/login')
                    })
                }
            })
        }
    })
}
</script>

<template>
    <FloatingConfigurator />
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <img viewBox="0 0 54 40" fill="none" src="/images/Logo_of_Universitas_Negeri_Semarang.jpg?wsxokn" class="mb-8 w-16 shrink-0 mx-auto">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Mendaftarlah di MOPETA!</div>
                        <span class="text-muted-color font-medium">Isi data Anda untuk mendaftar ke MOPETA</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Nama</label>
                        <InputText id="email1" type="text" class="w-full md:w-[30rem] mb-8" v-model="nama" />

                        <DatePicker v-model="tanggal_lahir" placeholder="Tanggal Lahir" fluid class="w-full mb-8" dateFormat="yy-mm-dd" />

                        <Select v-model="jenis_kelamin" :options="[{value: 'L', label: 'Laki-laki'},{value: 'P', label: 'Perempuan'}]" optionLabel="label" optionValue="value" placeholder="Gender" class="w-full mb-8" />

                        <Select v-model="agama" :options="agamas" optionLabel="nama_agama" optionValue="id" placeholder="Agama" class="w-full mb-8" :loading="agamaLoading" />

                        <Select v-model="pendidikan" :options="pendidikans" optionLabel="nama_jenjang" optionValue="id" placeholder="Pendidikan Terakhir" class="w-full mb-8" :loading="pendidikanLoading" />

                        <label for="email99" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Username</label>
                        <InputText id="email99" type="text" class="w-full md:w-[30rem] mb-8" v-model="username" />

                        <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                        <label for="password2" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Konfirmasi Password</label>
                        <Password id="password2" v-model="repassword" placeholder="Password" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div class="flex items-center">
                                Sudah punya akun? <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" @click="$router.push({name : 'login'})">Sign in</span>
                            </div>
                        </div>
                        <Button label="Sign Up" class="w-full" @click="onSubmit"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="errorVisible" modal :style="{ width: '25rem' }">
        <template #header>
            <span class="text-red-500 dark:text-red-300 text-xl">Gagal!</span>
        </template>
        <span class="text-red-500 dark:text-red-300 block mb-8">{{ errorMessage }}</span>
    </Dialog>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
