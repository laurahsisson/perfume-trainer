<script setup>
import { ref } from 'vue'
import { CardState } from '@/constants.js'

import Button from 'primevue/button';
import Grid from '@/components/Grid.vue'

const props = defineProps(['boxes', 'notes'])

const state = ref(getNewState());

function getNewState() {
    const newStates = {}

    props.boxes.forEach((box) => {
        newStates[box.name] = { state: CardState.Default, enabled: true };
    });

    return { cardStates: newStates, selectedNotes: [], card: "" };
}

function resetState() {
    state.value = getNewState()
}

function selectCard(box) {
    if (state.value.name == box.name) {
        resetState();
        return;
    }

    resetState();
    state.value.selectedNotes = box.notes;
    state.value.card = box.name;
    state.value.cardStates[box.name] = { state: CardState.Highlighted, enabled: true }
}

function boxMatches(box) {
    for (var i = 0; i < state.value.selectedNotes.length; i++) {
        const note = state.value.selectedNotes[i];
        if (!box.notes.includes(note)) {
            return false;
        }
    }
    return true;
}

function selectNote(note) {
    if (state.value.card) {
        resetState();
    }

    if (state.value.selectedNotes.includes(note)) {
        const index = state.value.selectedNotes.indexOf(note);
        state.value.selectedNotes.splice(index, 1);
    } else {
        state.value.selectedNotes.push(note);
    }

    const newStates = {}
    props.boxes.forEach((box) => {
        const boxState = (boxMatches(box)) ? CardState.Selected : CardState.Default;
        console.log(state.value.selectedNotes,box.notes,boxMatches(box));
        newStates[box.name] = { state: boxState, enabled: true };
    });
    state.value.cardStates = newStates;
}


function severity(note) {
    if (!state.value.selectedNotes.includes(note)) {
        return "secondary";
    }
    if (state.value.card) {
        return "info";
    } else {
        return "success";
    }
}
</script>
<template>
    <div class="text-900 font-bold text-6xl mb-4 text-center">
        <div v-if="!state.selectedNotes.length">Select a note or box.</div>
        <div v-else>
            <div v-if="state.card">Learn about {{state.card}}
            </div>
            <div v-else>Learn about {{state.selectedNotes.join(", ")}} notes.</div>
        </div>
        <Button @click="resetState()" :disabled="!state.selectedNotes.length">Clear</Button>
    </div>
    <div class="grid">
        <div class="col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                    <div class="flex flex-column">
                        <Button raised class="flex text-2xl" v-for="n in notes" :text="!state.selectedNotes.includes(n.note)" :severity="severity(n.note)" @click="selectNote(n.note)">
                            {{n.emoji}} {{n.note}} {{n.emoji}}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                    <Grid @select-card="selectCard" :boxes="boxes" :states="state.cardStates" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>