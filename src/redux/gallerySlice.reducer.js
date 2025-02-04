import galleryData from "../pages/galleryPage/galleryComponents/galleryData"

const getContent = (section, display) => {
    const sectionData = galleryData[section]
    if (!sectionData) return {}
    const displayData = sectionData[display] || sectionData.mainDisplay
    return displayData.content || {}
}

const initialState = {
    gallerySection: 'welcome',
    galleryDisplay: 'mainDisplay',
    colorShade: '#00000055',
    content: getContent('welcome', 'mainDisplay'),
}

const gallerySlice = (state = initialState, action) => {
    switch (action.type) {
        case 'SECTION_CHANGE':
            return {
                gallerySection: action.payload.gallerySection,
                galleryDisplay: 'mainDisplay',
                colorShade: action.payload.colorShade,
                content: getContent(action.payload.gallerySection, 'mainDisplay'),
            }
        case 'DISPLAY_CHANGE':
            return {
                gallerySection: action.payload.gallerySection,
                galleryDisplay: action.payload.galleryDisplay,
                colorShade: action.payload.colorShade,
                content: getContent(action.payload.gallerySection, action.payload.galleryDisplay),
            }
        case 'MENU_JUMP':
            return {
                gallerySection: action.payload.gallerySection,
                galleryDisplay: action.payload.galleryDisplay,
                colorShade: action.payload.colorShade,
                content: getContent(action.payload.gallerySection, action.payload.galleryDisplay),
            }
        default:
            return state
    }
}
export default gallerySlice