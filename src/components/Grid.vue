<script setup>
import { CardState } from '@/constants.js'

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

function severity(box) {
    switch (props.states[box.name].state) {
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
            <Button text raised :disabled="!states[box.name].enabled" :severity="severity(box)" @click="$emit('select-card',box.name)" class="w-full"> {{box.name}} </Button>
            <!-- <Button text :style="[{ 'background-color':calculateColor(card)}]" @click="$emit('select-card',card)" class="w-full"> {{card.name}}</Button> -->
        </div>
    </div>
</template>
<style scoped>
</style>