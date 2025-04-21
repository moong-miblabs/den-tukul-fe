<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { LOADING_OPTIONS } from '@/env';
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

// ========== INSTANCE ==========
import { useRouter } from 'vue-router'
const $router   = useRouter()
import { useStore } from '@/store'
const $store = useStore()
import $axios from '@/axios';
// import $ from 'jquery'; import 'gasparesganga-jquery-loading-overlay';

// ========== STATE ==========
const email = ref(null)
const password = ref(null)

// ========== ERROR ==========
const errorVisible = ref(false)
const errorMessage = ref('')

// ========== VUELIDATE RULES ==========
const rules = {
    email : { required : helpers.withMessage('Username / Email / Whatsapp harus diisi', required) },
    password : { required : helpers.withMessage('Password harus diisi', required) }
}

const v$ = useVuelidate(rules,{email,password})

// ========== METHODS ==========
function capitalizeFirst(word) {
    let firstLetter = word.charAt(0)
    let firstLetterCap = firstLetter.toUpperCase()
    let remainingLetters = word.slice(1).toLowerCase()
    let capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord
}

function capitalizedEachWord(words) {
    let arr = words.split(' ')
    let newArr = arr.map(word => capitalizeFirst(word))
    let str = newArr.join(' ')
    return str
}

async function onSubmit() {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return
    try {
        $.LoadingOverlay("show", LOADING_OPTIONS);
        var response = await $axios.post('login/login', {
            username : email.value,
            password: password.value
        })
        $.LoadingOverlay("hide");
        console.log(response)
        if(response.data.status === 'success') {
            let data = response.data
            $store.setId(data.data.id)
            $store.setToken(data.token)
            $store.setRole(data.data.role)
            $store.setNama(data.data.nama_user)
            $store.setUsername(data.data.username_user)
            $store.setWhatsapp(data.data.whatsapp_user)
            $store.setWhatsappVerified(data.data.whatsapp_verified_at)
            $store.setEmail(data.data.email_user)
            $store.setEmailVerified(data.data.email_verified_at)
            if(data.data.role == 'RESPONDEN') {
                $router.push({ name: 'home' })
            } else if(data.data.role == 'ADMIN') {
                $router.push({ name: 'dashboard' })
            } else if(data.data.role == 'ADMIN,RESPONDEN') {
                $router.push({ name: 'role' })
            }
        } else {
            errorMessage.value = capitalizedEachWord(response.data.message)
            errorVisible.value = true
        }
    } catch (err) {
        console.error(err)
    }
}
</script>

<template>
    <FloatingConfigurator />
    <br>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <img viewBox="0 0 54 40" fill="none" src="/images/Logo_of_Universitas_Negeri_Semarang.jpg?plmqaz" alt="logo UNNES" class="mb-8 w-16 shrink-0 mx-auto">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Selamat Datang di</div>
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Instrumen Deteksi dan Pencegahan TBC pada Anak</div>
                        <span class="text-muted-color font-medium">Sign in untuk melanjutkan</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Username / Email / Whatsapp</label>
                        <InputText id="email1" type="text" placeholder="lorem/example@gmail.com/628xx" class="w-full" :class="{'mb-8': !v$.email.$error, 'mb-1': v$.email.$error}" v-model="email" :invalid="v$.email.$error" />
                        <Message severity="error" class="mb-7" v-if="v$.email.$error" v-for="error in v$.email.$errors">{{error.$message}}</Message>

                        <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" :class="{'mb-4': !v$.password.$error, 'mb-1': v$.password.$error}" fluid :feedback="false" :invalid="v$.password.$error"></Password>
                        <Message severity="error" class="mb-3" v-if="v$.password.$error" v-for="error in v$.password.$errors">{{error.$message}}</Message>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div class="flex items-center">
                                Belum punya akun? <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" @click="$router.push({name: 'register'})">Daftar</span>
                            </div>
                        </div>
                        <!-- <Button label="Sign In" class="w-full" as="router-link" to="/"></Button> -->
                        <Button label="Sign In" class="w-full" @click="onSubmit"></Button>
                        <div class="flex items-center justify-between mt-8 mb-2 gap-8">
                            <div class="flex items-center">
                                &nbsp;
                            </div>
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Lupa password?</span>
                        </div>
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
