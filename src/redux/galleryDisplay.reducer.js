const galleryView = (state = false, action) => {

    switch (action.type) {
        case 'SET_DISPLAY':
            return action.payload
        default:
            return state
    }

}

export default galleryView