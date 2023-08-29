<script setup>
import Button from 'primevue/button';

defineEmits(['select-card'])
defineProps(['selected'])

const cards = [
    { name: "Freesia", notes: ["Floral", "Fruity"] },
    { name: "Caramel", notes: ["Amber", "Sweet"] }
]
const numberOfColumns = 3

// https://stackoverflow.com/questions/52067287/how-to-create-a-dynamic-grid-using-vue
const gridStyle = {
    gridTemplateColumns: `repeat(${numberOfColumns}, minmax(100px, 1fr))`
}

function notesMatches(selected, card) {
    for (var i = card.notes.length - 1; i >= 0; i--) {
        if (selected.notes.includes(card.notes[i])) {
            return true;
        }
    }
    return false;
}

function calculateColor(selected,card,index) {
    if (selected.card.name == card.name) {
        return { 'background-color': 'LightGreen' }
    } else if (notesMatches(selected, card) ) {
        return { 'background-color': 'dodgerblue' }
    } else {
        return { 'background-color': 'lightgrey' }
    }
}

</script>
<template>
    <ul :style="gridStyle" class="card-list">
        <li v-for="(card, index) in cards" class="card-item"  @click="$emit('select-card',card,index)">
            <Button text :style="[calculateColor(selected,card,index)]">Card={{card.name}} w/ {{ index + 1 }}</Button>
        </li>
    </ul>
</template>
<style scoped>
.card-list {
    display: grid;
    grid-gap: 1em;
}
/*
button {
    width: 3em;
    height: 3em;
}*/

ul {
    list-style-type: none;
}
</style>