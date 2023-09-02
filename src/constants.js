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

function severity(state) {
    switch (state) {
        case CardState.Selected:
            return "info";
        case CardState.Highlighted:
            return "success";
        case CardState.Danger:
            return "danger";
        default:
            return "secondary";
    }
}

export { Modes, CardState, severity };