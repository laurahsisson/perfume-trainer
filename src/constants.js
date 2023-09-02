const Modes = {
    Train: "Train",
    Test: "Test",
    Edit: "Edit"
}

const CardState = {
    Default: 0, // Default state
    Selected: 1, // User actively chooses the card
    Highlighted: 2, // User takes an action that indirectly selects the card
    Danger: 3, // Red alert
}

export { Modes, CardState };