<script setup>
import Button from 'primevue/button';

defineEmits(['select-note'])
const props = defineProps(['notes','selected'])

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