<script setup>
import {onMounted, ref } from 'vue';
import { LOADING_OPTIONS } from '@/env';
import $axios from '@/axios';
import dateFormat from 'dateformat'

const DATA = ref([])

function humanDate(dateString) {
    let dt = new Date(Date.parse(dateString))
    return dateFormat(dt,"d-mmm-yy H:M")
}

async function getDATA() {
    $.LoadingOverlay("show", LOADING_OPTIONS);
    var response = await $axios.get('intervensi')
    $.LoadingOverlay("hide");

    if(response.data.status === "success") {
        let data = response.data.data
        DATA.value = data.map(obj => {
            obj.created_at = humanDate(obj.created_at);
            obj.klasifikasi = obj.klasifikasi=="B"?"Pencegahan Baik":"Pencegahan Kurang"
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
        <div class="font-semibold text-xl mb-4">Hasil Intervensi</div>
        <DataTable :value="DATA" tableStyle="min-width: 50rem">
            <Column field="no" header="No."></Column>
            <Column field="nama_user" header="Nama"></Column>
            <Column field="klasifikasi" header="Klasifikasi"></Column>
            <Column field="created_at" header="Tgl. Input"></Column>
            <Column header="Detail">
                <template #body="slotProps">
                    <Button @click="$router.push('/result2/'+slotProps.data.id)" label="Detail" icon="pi pi-info-circle"></Button>
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
