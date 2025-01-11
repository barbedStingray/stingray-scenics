import galleryData from "../pages/galleryPage/galleryComponents/galleryData"

const initialState = {
    gallerySection: 'welcome',
    galleryDisplay: 'mainDisplay',
    colorShade: '#00822533',
    content: {
        title: galleryData.welcome.mainDisplay.content.title,
        description: galleryData.welcome.mainDisplay.content.description,
        photo: galleryData.welcome.mainDisplay.content.photo,
    }
}

const gallerySlice = (state = initialState, action) => {
    switch (action.type) {
        case 'SECTION_CHANGE':
            return {
                gallerySection: action.payload.gallerySection,
                galleryDisplay: 'mainDisplay',
                colorShade: action.payload.colorShade,
                content: {
                    title: galleryData[action.payload.gallerySection].mainDisplay.content.title,
                    description: galleryData[action.payload.gallerySection].mainDisplay.content.description,
                    photo: galleryData[action.payload.gallerySection].mainDisplay.content.photo,
                }
            }
        case 'DISPLAY_CHANGE':
            return {
                gallerySection: action.payload.gallerySection,
                galleryDisplay: action.payload.galleryDisplay,
                colorShade: action.payload.colorShade,
                content: {
                    title: galleryData[action.payload.gallerySection][action.payload.galleryDisplay].content.title,
                    description: galleryData[action.payload.gallerySection][action.payload.galleryDisplay].content.description,
                    photo: galleryData[action.payload.gallerySection][action.payload.galleryDisplay].content.photo,
                }
            }
        default:
            return state
    }
}

export default gallerySlice