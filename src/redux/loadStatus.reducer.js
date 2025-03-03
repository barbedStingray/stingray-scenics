const loadStatus = (state = false, action) => {

    switch (action.type) {
        case 'SET_LOAD_STATUS':
            return action.payload
        default:
            return state
    }

}

export default loadStatus