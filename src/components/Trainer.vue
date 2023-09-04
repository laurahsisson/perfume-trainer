<script setup>
import { ref } from 'vue'
import { CardState } from '@/constants.js'

import Button from 'primevue/button';
import Grid from '@/components/Grid.vue'

const props = defineProps(['boxes', 'notes'])

const state = ref(getNewState());

const maxNotes = 3

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

function calculateState(box) {
    // If none are selected, state is default.
    if (!state.value.selectedNotes.length) {
        return CardState.Default;
    }

    // Otherwise, the box should contain all selected notes.
    for (var i = 0; i < state.value.selectedNotes.length; i++) {
        const note = state.value.selectedNotes[i];
        if (!box.notes.includes(note)) {
            return CardState.Default;
        }
    }
    return CardState.Selected;
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
        newStates[box.name] = { state: calculateState(box), enabled: true };
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

function disabled(note) {
    // If a card is selected, or there is space for more notes
    // the notes are not disabled.
    if (state.value.card || state.value.selectedNotes.length < maxNotes) {
        return false;
    }
    // Otherwise, only the selected notes are enabled, so that they can 
    // deselected
    return !state.value.selectedNotes.includes(note);
}

function title() {
    return "text-900 font-bold text-6xl mb-4 text-center"
}
</script>
<template>
    <div :class="title()">
        <div :class="title()" v-if="!state.selectedNotes.length">Select a note or box.</div>
        <div v-else>
            <div  :class="title()" v-if="state.card">Learn about {{state.card}}
            </div>
            <div  :class="title()" v-else>Learn about {{state.selectedNotes.join(", ")}} notes.</div>
        </div>
        <Button @click="resetState()" :disabled="!state.selectedNotes.length">Clear</Button>
    </div>
    <div class="grid">
        <div class="col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                    <div class="flex flex-column">
                        <Button class="flex text-2xl my-1" v-for="note in notes" outlined :raised="state.selectedNotes.includes(note)" :disabled="disabled(note)" :severity="severity(note)" @click="selectNote(note)" :class="{'font-semibold': state.selectedNotes.includes(note)}">
                            {{note}}
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