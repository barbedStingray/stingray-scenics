const gallerySection = (state = 'Welcome Ben', action) => {
    switch (action.type) {
        case 'SECTION_CHANGE':
            return action.payload
        default: 
        return state
    }
}

export default gallerySection