<script setup>
import { ref } from 'vue'

import { CardState } from '@/constants.js'

const props = defineProps(['boxes', 'notes'])

const choiceCount = 3
const choiceRetries = 15

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

    return { answer: newCard, note: newNote, choices: newChoices }
}

function resetState() {
    const question = getNewQuestion();

    const newStates = {}

    props.boxes.forEach((box) => {
        if (question.choices.includes(box.name)) {
            newStates[box.name] = CardState.Active;
        } else {
            newStates[box.name] = CardState.Disabled;
        }
    });

    return { cardStates: newStates, answer: question.answer, note: question.note, choices: question.choices };
}


const state = ref(resetState());
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
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 surface-card" style="border-radius: 6px">
                    {{state}}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>