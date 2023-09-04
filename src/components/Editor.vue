<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row'; // optional

const props = defineProps(['boxes', 'notes'])
</script>
<template>
    <div class="text-900 font-bold text-6xl mb-4 text-center">
        Edit the boxes.
    </div>
    <div class="p-3 h-full">
        <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
            <div class="grid">
                <div class="col-3" v-for="box in boxes">
                    <div class="border-round border-solid w-full">
                        {{box.name}}
                        <div class="grid p-4">
                            <div class="col-4" v-for="note in box.notes">
                                <div class="border border-solid w-full">
                                    <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />{{note}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid mt-3">
                <div class="col-3" v-for="box in boxes">
                    <Card class="border border-solid">
                        <template #title> {{box.name}} </template>
                        <template #content>
                            <div class="grid">
                                <div class="col" v-for="note in box.notes">
                                    <div class="border border-solid w-full">
                                        <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel"/>{{note}}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>