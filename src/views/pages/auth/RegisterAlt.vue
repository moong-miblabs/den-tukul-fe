<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref, onMounted } from 'vue';

// ========== INSTANCE ==========
import { useRouter } from 'vue-router'
const $router   = useRouter()
import { useStore } from '@/store'
const $store = useStore()
import $axios from '@/axios';
// import $ from 'jquery'; import 'gasparesganga-jquery-loading-overlay';

// ========== STATE ==========
const enroll = ref(null)
const nama = ref('')
const username = ref('')
const whatsapp = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')

const provinsis = ref([
    {id: null, nama_provinsi: null}
])
const provinsi = ref(null)
const provinsiLoading = ref(false)

const kabkotas = ref([
    {id: null, nama_kab_kota: null}
])
const kabkota = ref(null)
const kabkotaLoading = ref(false)

const kecamatans = ref([
    {id: null, nama_kecamatan: null}
])
const kecamatan = ref(null)
const kecamatanLoading = ref(false)

const kelurahans = ref([
    {id: null, nama_kelurahan: null}
])
const kelurahan = ref(null)
const kelurahanLoading = ref(false)

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

const pekerjaans = ref([
    {id: null, nama_pekerjaan: null}
])
const pekerjaan = ref(null)
const pekerjaanLoading = ref(false)

const penghasilans = ref([
    {id: null, nama_pekerjaan: null}
])
const penghasilan = ref(null)
const penghasilanLoading = ref(false)

const maritals = ref([
    {id: 'S', nama_marital: 'Belum Kawin (single)'},
    {id: 'M', nama_marital: 'Kawin (Merried)'},
    {id: 'D', nama_marital: 'Bercerai (Divorced)'},
    {id: 'W', nama_marital: 'Ditinggal Mati (Widowed)'}
])
const marital = ref(null)

// ========== ERROR ==========
const errorVisible = ref(false)
const errorMessage = ref('')

// ========== METHODS ==========
async function getProvinsi() {
    kabkotas.value = []
    kabkota.value = null

    kecamatans.value = []
    kecamatan.value = null

    kelurahans.value = []
    kelurahan.value = null

    try {
        provinsiLoading.value = true
        var response = await $axios.get('provinsi')
        provinsiLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            provinsis.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

async function getKabKota() {
    kecamatans.value = []
    kecamatan.value = null

    kelurahans.value = []
    kelurahan.value = null

    try {
        kabkotaLoading.value = true
        var response = await $axios.get('kab-kota',{
            params: {
                attributes: 'id,nama_kab_kota',
                provinsi_id: provinsi.value
            }
        })
        kabkotaLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            kabkotas.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

async function getKecamatan() {
    kelurahans.value = []
    kelurahan.value = null

    try {
        kecamatanLoading.value = true
        var response = await $axios.get('kecamatan',{
            params: {
                attributes: 'id,nama_kecamatan',
                kab_kota_id: kabkota.value
            }
        })
        kecamatanLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            kecamatans.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

async function getKelurahan() {
    try {
        kelurahanLoading.value = true
        var response = await $axios.get('kelurahan',{
            params: {
                attributes: 'id,nama_kelurahan',
                kecamatan_id: kecamatan.value
            }
        })
        kelurahanLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            kelurahans.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

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

async function getPekerjaan() {
    try {
        pekerjaanLoading.value = true
        var response = await $axios.get('pekerjaan')
        pekerjaanLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            pekerjaans.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

async function getPenghasilan() {
    try {
        penghasilanLoading.value = true
        var response = await $axios.get('penghasilan')
        penghasilanLoading.value = false
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data.data
            penghasilans.value = data
        } else {
            errorMessage.value = response.data.message
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}

onMounted(async () => {
    await getProvinsi()
    await getAgama()
    await getPendidikan()
    await getPekerjaan()
    await getPenghasilan()
})
</script>

<template>
    <FloatingConfigurator />
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <img viewBox="0 0 54 40" fill="none" src="/images/Logo_of_Universitas_Negeri_Semarang.jpg?wsxokn" class="mb-8 w-16 shrink-0 mx-auto">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Mendaftarlah di DEN TUKUL!</div>
                        <span class="text-muted-color font-medium">Isi data Anda untuk mendaftar ke DEN TUKUL</span>
                    </div>

                    <div>
                        <InputOtp v-if="enroll" v-model="enroll" :length="6" class="w-full md:w-[30rem] mb-8"/>

                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Nama</label>
                        <InputText id="email1" type="text" class="w-full md:w-[30rem] mb-8" v-model="nama" />

                        <label for="email2" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Whatsapp</label>
                        <InputText id="email2" type="text" class="w-full md:w-[30rem] mb-8" v-model="whatsapp" />

                        <label for="email3" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                        <InputText id="email3" type="text" class="w-full md:w-[30rem] mb-8" v-model="email" />

                        

                        <Select v-model="provinsi" :options="provinsis" optionLabel="nama_provinsi" optionValue="id" placeholder="Provinsi" class="w-full md:w-[30rem] mb-8" :loading="provinsiLoading" :filter="true" @update:modelValue="getKabKota" />

                        <Select v-model="kabkota" :options="kabkotas" optionLabel="nama_kab_kota" optionValue="id" placeholder="Kabupaten/Kota" class="w-full md:w-[30rem] mb-8" :loading="kabkotaLoading" :filter="true" @update:modelValue="getKecamatan" />

                        <Select v-model="kecamatan" :options="kecamatans" optionLabel="nama_kecamatan" optionValue="id" placeholder="Kecamatan" class="w-full md:w-[30rem] mb-8" :loading="kecamatanLoading" :filter="true" @update:modelValue="getKelurahan"/>

                        <Select v-model="kelurahan" :options="kelurahans" optionLabel="nama_kelurahan" optionValue="id" placeholder="Desa/Kelurahan" class="w-full md:w-[30rem] mb-8" :loading="kelurahanLoading" :filter="true" />

                        <Select v-model="agama" :options="agamas" optionLabel="nama_agama" optionValue="id" placeholder="Agama" class="w-full md:w-[30rem] mb-8" :loading="agamaLoading" />

                        <Select v-model="pendidikan" :options="pendidikans" optionLabel="nama_jenjang" optionValue="id" placeholder="Jenjang Pendidikan" class="w-full md:w-[30rem] mb-8" :loading="pendidikanLoading" />

                        <Select v-model="pekerjaan" :options="pekerjaans" optionLabel="nama_pekerjaan" optionValue="id" placeholder="Pekerjaan" class="w-full md:w-[30rem] mb-8" :loading="pekerjaanLoading" />

                        <Select v-model="penghasilan" :options="penghasilans" optionLabel="nama_penghasilan" optionValue="id" placeholder="Penghasilan / bulan" class="w-full md:w-[30rem] mb-8" :loading="penghasilanLoading" />

                        <Select v-model="marital" :options="maritals" optionLabel="nama_marital" optionValue="id" placeholder="Status Marital" class="w-full md:w-[30rem] mb-8" />

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
                        <Button label="Sign In" class="w-full" as="router-link" to="/"></Button>
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
