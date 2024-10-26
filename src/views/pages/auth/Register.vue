<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref } from 'vue';

const nama = ref('')
const username = ref('')
const whatsapp = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')
</script>

<template>
    <FloatingConfigurator />
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <img viewBox="0 0 54 40" fill="none" src="/images/GKL20_Politeknik-Kesehatan-Semarang - Koleksilogo.com.png" class="mb-8 w-16 shrink-0 mx-auto">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Mendaftarlah di DEN TUKUL!</div>
                        <span class="text-muted-color font-medium">Isi data Anda untuk mendaftar ke DEN TUKUL</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Nama</label>
                        <InputText id="email1" type="text" class="w-full md:w-[30rem] mb-8" v-model="nama" />

                        <label for="email2" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Whatsapp</label>
                        <InputText id="email2" type="text" class="w-full md:w-[30rem] mb-8" v-model="whatsapp" />

                        <label for="email3" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                        <InputText id="email3" type="text" class="w-full md:w-[30rem] mb-8" v-model="email" />

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
