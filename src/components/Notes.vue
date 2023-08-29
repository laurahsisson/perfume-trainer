<script setup>
import Button from 'primevue/button';

defineEmits(['select-note'])
defineProps(['selected'])

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
</script>

<template>
    <ul style="list-style-type: none">
        <li class="note text-2xl" v-for="(n,index) in notes" @click="$emit('select-note',n.note)">
            <Button :class="{'p-button-text':!selected.notes.includes(n.note)}" raised>{{n.emoji}} {{n.note}} {{n.emoji}}</Button>
        </li>
    </ul>
</template>
<style scoped>
</style>