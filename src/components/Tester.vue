<script setup>
import { ref } from 'vue'
import { CardState } from '@/constants.js'

import Grid from '@/components/Grid.vue'


const props = defineProps(['boxes', 'notes'])

const choiceCount = 3
const choiceRetries = 15

const state = ref(resetState());

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getNewQuestion() {
    const newCard = getRandom(props.boxes)
    const newNote = getRandom(newCard.notes)

    const newChoices = [newCard.name]
    var i = 0;
    while (newChoices.length < choiceCount && i < choiceRetries) {
        i += 1;
        const potential = getRandom(props.boxes);

        if (newChoices.includes(potential.name)) {
            continue;
        }
        if (potential.notes.includes(newNote)) {
            continue;
        }

        newChoices.push(potential.name)
    }

    return { answer: newCard.name, note: newNote, choices: newChoices }
}

function resetState() {
    const question = getNewQuestion();

    const newStates = {}

    props.boxes.forEach((box) => {
        if (question.choices.includes(box.name)) {
            newStates[box.name] = { state: CardState.Selected, enabled: true }
        } else {
            newStates[box.name] = { state: CardState.Default, enabled: false }
        }
    });

    return { cardStates: newStates, answer: question.answer, note: question.note, choices: question.choices };
}

function selectCard(name) {
    state.value.choices.forEach((name) => {
        state.value.cardStates[name] = { state: CardState.Default, enabled: false }
    });

    if (name == state.value.answer) {
        state.value.cardStates[name] = { state: CardState.Highlighted, enabled: false }
    } else {
        state.value.cardStates[name] = { state: CardState.Danger, enabled: false }
        state.value.cardStates[state.value.answer] = { state: CardState.Highlighted, enabled: false }
    }
}
</script>
<template>
    <div class="text-900 font-bold text-6xl mb-4 text-center">
        Test your knowledge
    </div>
    <div class="grid">
        <div class="col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                    Please select the {{state.note}} fragrance between {{state.choices.join(", ")}}.
                    {{state}}
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                    <!-- {{state}} -->
                    <Grid @select-card="selectCard" :boxes="boxes" :states="state.cardStates" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>