const commissionView = (state = false, action) => {

    switch (action.type) {
        case 'SET_COMMISSION':
            return action.payload
        default:
            return state
    }

}

export default commissionView