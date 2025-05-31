<script setup>
import { onMounted, ref } from 'vue';
import { LOADING_OPTIONS } from '@/env';
import $axios from '@/axios';
import { useRouter } from 'vue-router'
const $router = useRouter()

const DATA = ref([])

async function getDATA() {
    $.LoadingOverlay("show", LOADING_OPTIONS);
    var response = await $axios.get('evaluasi')
    $.LoadingOverlay("hide");

    if(response.data.status === "success") {
        let data = response.data.data
        DATA.value = data.map((obj,idx) => {
            obj.no = idx+1
            return obj
        })
    }
}

onMounted(async () => {
    await getDATA()
})
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Hasil Evaluasi</div>
        <DataTable :value="DATA" tableStyle="min-width: 50rem">
            <Column field="no" header="No."></Column>
            <Column field="uu__nama_user" header="Nama"></Column>
            <Column header="Detail">
                <template #body="slotProps">
                    <Button @click="$router.push('/result3/'+slotProps.data.id)" label="Riwayat" icon="pi pi-info-circle"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped lang="scss">
:deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
