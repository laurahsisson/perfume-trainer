<script setup>
import { ref } from 'vue'

import Grid from './components/Grid.vue'
import Trainer from './components/Trainer.vue'
import Tester from './components/Tester.vue'
import Navbar from './components/Navbar.vue'

import Button from 'primevue/button';

const selected = ref({ notes: [], card: {}, isCard: false });

const modes = {
    Train: "Train",
    Test: "Test",
    Edit: "Edit"
}

const notes = [
    { emoji: "🍋", note: "Citrus" },
    { emoji: "🌳", note: "Woody" },
    { emoji: "🌶️", note: "Spicy" },
    { emoji: "💧", note: "Fresh" },
    { emoji: "🌼", note: "Floral" },
    { emoji: "🍎", note: "Fruity" },
    { emoji: "🌿", note: "Green" },
    { emoji: "🎂", note: "Sweet" },
    { emoji: "🍯", note: "Warm" },
]

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
            <div v-if="currentMode == modes.Train">
                <div v-if="!selected.notes.length">Select a note or box.</div>
                <div v-else-if="selected.isCard">Learn about {{selected.card.name}}</div>
                <div v-else>Learn about {{selected.notes.join(", ")}} notes.</div>
                <Button v-show="selected.notes.length" @click="resetSelection()">Clear</Button>
            </div>
            <div v-if="currentMode == modes.Test">
                Test your knowledge
            </div>
        </div>
        <div class="grid">
            <div class="col-6">
                <div class="p-3 h-full">
                    <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                        <Trainer v-if="currentMode == modes.Train" @select-note="selectNote" :notes="notes" :selected="selected" />
                        <Tester v-if="currentMode == modes.Test" :notes="notes" />
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="p-3 h-full">
                    <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                        <Grid @select-card="selectCard" :cards="cards" :selected="selected" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>