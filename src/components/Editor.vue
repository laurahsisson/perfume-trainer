<script setup>
    import { ref } from 'vue'

import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Divider from 'primevue/divider';
import Chips from 'primevue/chips';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row'; // optional
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';

import { deepClone, deepEquals } from "@/constants.js"

const props = defineProps(['boxes']);
defineEmits(['update']);

const data = ref(deepClone(props.boxes));
const newName = ref("");

function revert() {
    data.value = deepClone(props.boxes);
}

function remove(box) {
    const index = data.value.indexOf(box);
    data.value.splice(index, 1);
}

// This is a very inefficient method of equality checking but probs fine for now. The issue is that it is called multiple times per DOM update.
function hasUnsaved() {
    return !deepEquals(data.value, props.boxes);
}

function switchBy(idx, incr) {
    const temp = data.value[idx + incr];
    data.value[idx + incr] = data.value[idx];
    data.value[idx] = temp;
}

function add() {
    data.value.unshift({name:newName.value,notes:[]});
    newName.value = "";
}

</script>
<template>
    <div class="text-900 font-bold text-6xl text-center">
        Edit the boxes.
    </div>
    <div class="text-center">
        <Button label="Save" :disabled="!hasUnsaved()" @click="$emit('update',data)" />
        <Button label="Revert" :disabled="!hasUnsaved()" severity="danger" @click="revert()" />
        <p class="text-red-500" v-if="hasUnsaved()">You have unsaved changes.</p>
    </div>
    <div class="p-3 h-full">
        <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
            <div class="my-2">
                <InputText placeholder="Box Label" type="text" v-model="newName" />
                <Button severity="success" rounded icon="pi pi-plus" @click="add()" />
            </div>
            <div class="grid p-3">
                <div class="col-3" v-for="(box,i) in data">
                    <Panel :header="box.name">
                        <template #icons>
                            <Button icon="pi pi-times" severity="danger" text rounded size="small" aria-label="Delete" @click="remove(box)" />
                            <Button :disabled="i==0" @click="switchBy(i,-1)" icon="pi pi-sort-up" severity="secondary" text rounded size="small" aria-label="Up" />
                            <Button :disabled="i==data.length-1" @click="switchBy(i,1)" icon="pi pi-sort-down" severity="secondary" text rounded size="small" aria-label="Down" />
                        </template>
                        <p class="m-0">
                            <Chips v-model="box.notes" />
                        </p>
                    </Panel>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>