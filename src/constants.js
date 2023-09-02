const Modes = {
    Train: "Train",
    Test: "Test",
    Edit: "Edit"
}

const CardState = {
    Active: 0, // Default state
    Selected: 1, // User actively chooses the card
    Highlighted: 2, // User takes an action that indirectly selects the card
    Disabled: 3, // Shown in grid, but unable to be interacted with
}

export { Modes, CardState };