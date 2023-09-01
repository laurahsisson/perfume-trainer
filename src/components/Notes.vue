<script setup>
import Button from 'primevue/button';

defineEmits(['select-note'])
const props = defineProps(['selected'])

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
        <Button :class="{'p-button-text':!selected.notes.includes(n.note)}" raised class="flex text-2xl" v-for="(n,index) in notes" @click="$emit('select-note',n.note)">
            {{n.emoji}} {{n.note}} {{n.emoji}}
        </Button>
    </div>
</template>
<style scoped>
</style>