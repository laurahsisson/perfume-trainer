<script setup>
import { ref } from 'vue'

import Tester from '@/components/Tester.vue'
import Trainer from '@/components/Trainer.vue'
import Navbar from '@/components/Navbar.vue'

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

const boxes = [
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

function selectMode(mode) {
    currentMode.value = mode;
}
</script>
<template>
    <div class="surface-ground" style="width: 80em;">
        <Navbar :modes="modes" @select-mode="selectMode" />
        <Tester v-if="currentMode==modes.Test" :notes="notes" :boxes="boxes" />
        <Trainer v-if="currentMode==modes.Train" :notes="notes" :boxes="boxes" />
    </div>
</template>
<style scoped>
</style>