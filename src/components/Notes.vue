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
    <div class="flex flex-column">
        <div class="flex text-2xl" v-for="(n,index) in notes" @click="$emit('select-note',n.note)">
            <Button :class="{'p-button-text':!selected.notes.includes(n.note)}" raised>{{n.emoji}} {{n.note}} {{n.emoji}}</Button>
        </div>
    </div>
</template>
<style scoped>
</style>