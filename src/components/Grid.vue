<script setup>
import Button from 'primevue/button';

defineEmits(['select-card'])
defineProps(['selected'])

const cards = [
    { name: "Freesia", notes: ["Floral", "Fruity"] },
    { name: "Caramel", notes: ["Amber", "Sweet"] },
    { name: "Pepper", notes: ["Spicy"] },
    { name: "Apple", notes: ["Fruity"] }
]

function notesMatches(selected, card) {
    for (var i = card.notes.length - 1; i >= 0; i--) {
        if (selected.notes.includes(card.notes[i])) {
            return true;
        }
    }
    return false;
}

function calculateColor(selected, card, index) {
    if (selected.isCard) {
        if (selected.card.name == card.name) {
            return 'LightGreen';
        }
    } else if (notesMatches(selected, card)) {
        return 'dodgerblue';
    }
    return 'lightgrey';
}
</script>
<template>
    <div class="grid">
        <div class="col-4" v-for="card in cards">
            <Button text :style="[{ 'background-color':calculateColor(selected,card)}]" @click="$emit('select-card',card,index)" class="w-full"> {{card.name}}</Button>
        </div>
    </div>
</template>
<style scoped>
</style>