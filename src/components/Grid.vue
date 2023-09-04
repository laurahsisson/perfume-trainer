<script setup>
import { CardState } from '@/constants.js'

import Button from 'primevue/button';

defineEmits(['select-card'])
const props = defineProps(['boxes', 'states'])

function severity(state) {
    switch (state) {
        case CardState.Selected:
            return "info";
        case CardState.Highlighted:
            return "success";
        case CardState.Danger:
            return "danger";
        default:
            return "secondary";
    }
}
</script>
<template>
    <div class="grid">
        <div class="col-4" v-for="box in boxes">
            <Button outlined :raised="states[box.name].state!=CardState.Default" :disabled="!states[box.name].enabled" :severity="severity(states[box.name].state)" @click="$emit('select-card',box)" class="w-full" :class="{'font-semibold': states[box.name].state!=CardState.Default}"> {{box.name}} </Button>
        </div>
    </div>
</template>
<style scoped>
</style>