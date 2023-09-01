<script setup>
import { ref } from 'vue'

import Grid from './components/Grid.vue'
import Notes from './components/Notes.vue'
import Navbar from './components/Navbar.vue'

import Button from 'primevue/button';


const selected = ref({ notes: [], card: {}, isCard: false });

const modes = {
    Train: "Train",
    Test: "Test",
    Edit: "Edit"
}

const currentMode = ref(modes.Train);

function resetSelection() {
    selected.value.notes = [];
    selected.value.card = {};
    selected.value.isCard = false;
}

function selectNote(note) {
    if (selected.value.isCard) {
        resetSelection();
    }

    if (selected.value.notes.includes(note)) {
        const index = selected.value.notes.indexOf(note);
        selected.value.notes.splice(index, 1);
    } else {
        selected.value.notes.push(note);
    }
}

function selectMode(mode) {
  currentMode.value = mode;
}

function selectCard(card) {
    if (selected.value.card.name == card.name) {
        resetSelection();
    } else {
        selected.value.notes = card.notes;
        selected.value.card = card;
        selected.value.isCard = true;
    }
}
</script>
<template>
    <div class="surface-ground" style="width: 80em;">
        <Navbar :modes="modes" @select-mode="selectMode" />
        <div class="text-900 font-bold text-6xl mb-4 text-center">
            <div v-if="!selected.notes.length">Select a note or box.</div>
            <div v-else-if="selected.isCard">Learn about {{selected.card.name}}</div>
            <div v-else>Learn about {{selected.notes.join(", ")}} notes.</div>
            <Button v-show="selected.notes.length" @click="resetSelection()">Clear</Button>
        </div>
        <div class="grid">
            <div class="col-6">
                <div class="p-3 h-full">
                    <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                        <Notes v-if="currentMode == modes.Train" @select-note="selectNote" :selected="selected" />
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="p-3 h-full">
                    <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                        <Grid @select-card="selectCard" :selected="selected" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--   <div class="text-center">
        <h1 v-if="!selected.notes.length">Select a note or box.</h1>
        <h1 v-else-if="hasCardSelected()">Learn about {{selected.card.name}}</h1>
        <h1 v-else>Learn about {{selected.notes.join(", ")}} notes.</h1>
    </div>
    <div class="grid">
        <Notes class="col-6 surface-card shadow-2" @select-note="selectNote" :selected="selected"></Notes>
        <Grid class="col-6 surface-card shadow-2" @select-card="selectCard" :selected="selected"></Grid>
    </div> -->
</template>
<style scoped>
</style>