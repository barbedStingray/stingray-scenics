// Gallery Page Functions

import galleryData from "./galleryData"


// Arrow Navigation
export const handleArrowNavigation = (type, increment, gallerySection, galleryDisplay, dispatch) => {
    const currentList = type === 'section' ? Object.keys(galleryData) : Object.keys(galleryData[gallerySection])
    const currentIndex = currentList.indexOf(type === 'section' ? gallerySection : galleryDisplay)
    const newIndex = currentIndex + increment

    if (newIndex < 0 || newIndex >= currentList.length || currentList[newIndex] === 'menuSection') return

    dispatch({ type: 'SET_DIRECTION', payload: increment })

    if (type === 'section') {
        const newSection = currentList[newIndex];
        const newShade = galleryData[newSection]['mainDisplay'].color
        dispatch({
            type: 'SECTION_CHANGE', payload: { gallerySection: newSection, colorShade: newShade }
        })

    } else {
        const newDisplay = currentList[newIndex];
        const newShade = galleryData[gallerySection][newDisplay].color
        dispatch({
            type: 'DISPLAY_CHANGE',
            payload: { gallerySection: gallerySection, galleryDisplay: newDisplay, colorShade: newShade }
        })
    }
}
