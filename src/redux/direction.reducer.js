
const direction = (state = 1, action) => {
    switch (action.type) {
        case 'SET_DIRECTION':
            return action.payload
        default:
            return state
    }
}

export default direction