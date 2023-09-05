<script setup>
import { ref } from 'vue'

import Tester from '@/components/Tester.vue'
import Trainer from '@/components/Trainer.vue'
import Editor from '@/components/Editor.vue'
import Navbar from '@/components/Navbar.vue'

import {deepClone} from '@/constants.js'

const modes = {
    Train: "Train",
    Test: "Test",
    Edit: "Edit"
}

const notes = ref([
    "Citrus",
    "Woody",
    "Spicy",
    "Fresh",
    "Floral",
    "Fruity",
    "Green",
    "Sweet",
    "Warm",
]);

const boxes = ref([
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
]);

const currentMode = ref(modes.Train);

function selectMode(mode) {
    currentMode.value = mode;
}

function updateBoxes(data) {
    boxes.value = deepClone(data);
    const newNotesSet = new Set();
    boxes.value.forEach((box) => {
        box.notes.forEach((note) => {
            newNotesSet.add(note);
        });
    });

    const newNotes = [];
    newNotesSet.forEach((n) => {
        newNotes.push(n);
    });
    notes.value = newNotes;
}

</script>
<template>
    <div class="surface-ground">
        <Navbar :modes="modes" @select-mode="selectMode" />
        <Tester v-if="currentMode==modes.Test" :notes="notes" :boxes="boxes" />
        <Trainer v-if="currentMode==modes.Train" :notes="notes" :boxes="boxes" />
        <Editor v-if="currentMode==modes.Edit" @update="updateBoxes" v-model:boxes="boxes" />
    </div>
</template>
<style scoped>
</style>