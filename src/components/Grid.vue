<script setup>
import Button from 'primevue/button';

defineEmits(['select-card'])
const props = defineProps(['selected'])

// const cards = [
//     { name: "Freesia", notes: ["Floral", "Fruity"] },
//     { name: "Caramel", notes: ["Amber", "Sweet"] },
//     { name: "Pepper", notes: ["Spicy"] },
//     { name: "Apple", notes: ["Fruity"] }
// ]

const cards = [
    { name: 'Musk', notes: ['Floral', 'Fruity', 'Fresh'] },
    { name: 'Bergamot', notes: ['Citrus', 'Green', 'Woody'] },
    { name: 'Amber', notes: ['Warm', 'Woody', 'Citrus'] },
    { name: 'Sandalwood', notes: ['Warm', 'Woody', 'Sweet'] },
    { name: 'Patchouli', notes: ['Green', 'Woody', 'Citrus'] },
    { name: 'Vanilla', notes: ['Warm', 'Fruity', 'Floral'] },
    { name: 'Jasmine', notes: ['Floral', 'Fruity', 'Green'] },
    { name: 'Cedarwood', notes: ['Woody', 'Green', 'Sweet'] },
    { name: 'Rose', notes: ['Floral', 'Fruity', 'Green'] },
    { name: 'Vetiver', notes: ['Green', 'Woody', 'Sweet'] },
    { name: 'Mandarin', notes: ['Floral', 'Fresh', 'Citrus'] },
    { name: 'Lemon', notes: ['Citrus', 'Sweet', 'Woody'] },
    { name: 'Tonka Bean', notes: ['Warm', 'Sweet', 'Woody'] },
    { name: 'Iris', notes: ['Green', 'Warm', 'Floral'] },
    { name: 'Orange Blossom', notes: ['Floral', 'Warm', 'Fresh'] },
]

function notesMatches(card) {
    for (var i = card.notes.length - 1; i >= 0; i--) {
        if (props.selected.notes.includes(card.notes[i])) {
            return true;
        }
    }
    return false;
}

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
        <div class="col-4" v-for="card in cards">
            <Button text :style="[{ 'background-color':calculateColor(card)}]" @click="$emit('select-card',card)" class="w-full"> {{card.name}}</Button>
        </div>
    </div>
</template>
<style scoped>
</style>