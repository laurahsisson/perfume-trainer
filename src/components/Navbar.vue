<script setup>
import { ref } from 'vue'

import Menubar from 'primevue/menubar';

function setLanguage(event) {
  const {label} = event.item;
  console.log(label);
}

const items = ref([{
        label: 'Test',
        command: setLanguage,
        icon: 'pi pi-fw pi-power-off'
    },
    {
        label: 'Learn',
        command: setLanguage,
        icon: 'pi pi-fw pi-power-off'
    },
    {
        label: 'Edit',
        command: setLanguage,
        icon: 'pi pi-fw pi-power-off'
    }
]);
</script>
<template>
    <Menubar :model="items" />
</template>
<style scoped>
</style>