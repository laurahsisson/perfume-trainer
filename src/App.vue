<script setup>
import { ref } from 'vue'

import Tester from '@/components/Tester.vue'
import Trainer from '@/components/Trainer.vue'
import Editor from '@/components/Editor.vue'
import Navbar from '@/components/Navbar.vue'

import { deepClone } from '@/constants.js'

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
    "Musky",
]);


const boxes = ref([
    { name: "Ambrettolide", notes: ["Musky", "Floral"] },
    { name: "Ambroxan", notes: ["Woody", "Musky", "Fresh"] },
    { name: "Citral", notes: ["Citrus", "Fruity", "Green"] },
    { name: "Dihydro Eugenol", notes: ["Spicy", "Fresh"] },
    { name: "Ethyl Maltol", notes: ["Sweet"] },
    { name: "Hedione", notes: ["Floral", "Fresh"] },
    { name: "Hexenyl Cis-3 Acetate", notes: ["Green", "Fruity"] },
    { name: "Iso E Super", notes: ["Woody", "Floral"] },
    { name: "Ebanol", notes: ["Woody"] },
    { name: "Orange Terpenes", notes: ["Citrus", "Fresh"] },
    { name: "Stemone", notes: ["Green"] },
    { name: "Velvione", notes: ["Musky"] },
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