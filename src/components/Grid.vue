<script setup>
import { CardState, severity } from '@/constants.js'

import Button from 'primevue/button';

defineEmits(['select-card'])
const props = defineProps(['boxes', 'states'])


function calculateColor(card) {
    if (props.selected.isCard) {
        if (props.selected.card.name == card.name) {
            return 'LightGreen';
        }
    } else if (notesMatches(card)) {
        return 'dodgerblue';
    }
    return 'lightgrey';
}
</script>
<template>
    <div class="grid">
        <div class="col-4" v-for="box in boxes">
            <Button outlined :disabled="!states[box.name].enabled" :severity="severity(states[box.name].state)" @click="$emit('select-card',box)" class="w-full"> {{box.name}} </Button>
        </div>
    </div>
</template>
<style scoped>
</style>