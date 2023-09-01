<script setup>
import { ref } from 'vue'

import Menubar from 'primevue/menubar';

const emit = defineEmits(['select-mode'])
const props = defineProps(['modes'])

function setMode(event) {
    const { label } = event.item;
    emit('select-mode', label)
}

const items = ref([{
        label: props.modes.Train,
        command: setMode,
        icon: 'pi pi-fw pi-power-off'
    },
    {
        label: props.modes.Test,
        command: setMode,
        icon: 'pi pi-fw pi-power-off'
    },
    {
        label: props.modes.Edit,
        command: setMode,
        icon: 'pi pi-fw pi-power-off'
    }
]);
</script>
<template>
    <Menubar :model="items" />
</template>
<style scoped>
</style>