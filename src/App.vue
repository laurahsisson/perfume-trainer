<script setup>
import { ref } from 'vue'

import Grid from './components/Grid.vue'
import Notes from './components/Notes.vue'
import Divider from 'primevue/divider';


const isCardSelected = ref(false);
const selected = ref({ notes: [], card: {} });

function hasCardSelected() {
    return Object.keys(selected).length;
}

function resetSelection() {
    selected.value.notes = [];
    selected.value.card = {};
}

function selectNote(note) {
    if (hasCardSelected()) {
        resetSelection();
    }

    if (selected.value.notes.includes(note)) {
        const index = selected.value.notes.indexOf(note);
        selected.value.notes.splice(index, 1);
    } else {
        selected.value.notes.push(note);
    }
}

function selectCard(card, index) {
    if (selected.value.card.name == card.name) {
        resetSelection();
    } else {
        selected.value.notes = card.notes;
        selected.value.card = card;
    }
}
</script>
<template>
    <div class="text-center">
        <h1 v-if="!selected.notes.length">Select a note or box.</h1>
        <h1 v-else-if="hasCardSelected()">Learn about {{selected.card.name}}</h1>
        <h1 v-else>Learn about {{selected.notes.join(", ")}} notes.</h1>
    </div>
    <div class="grid">
    <!--     <Notes class="col-6 surface-card shadow-2" @select-note="selectNote" :selected="selected"></Notes>
        <Grid class="col-6 surface-card shadow-2" @select-card="selectCard" :selected="selected"></Grid> -->
    </div>
</template>
<style scoped>
</style>