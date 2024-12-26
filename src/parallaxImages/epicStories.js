
import imperials from '../images/imperials.jpeg'
import pelennorFields from '../images/pelennorFields.jpeg'
import trolls from '../images/trolls.jpeg'
import rivendellCharge from '../images/rivendellCharge.jpeg'
import droids from '../images/droids.png'
import smugglers from '../images/smugglers.jpeg'


const epicStoriesImages = [
    {
        photoType: 'landscapeImage',
        picture: rivendellCharge,
        dimensions: ['20dvh', '85dvw'],
        motionValues: [0.55, 0.81],
        coordinateOffset: { xPosition: ['2.5dvw', '7dvw'], yPosition: ['2dvh', '3dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: smugglers,
        dimensions: ['20dvh', '85dvw'],
        motionValues: [0.57, 0.83],
        coordinateOffset: { xPosition: ['10dvw', '10dvw'], yPosition: ['20dvh', '22dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: imperials,
        dimensions: ['20dvh', '85dvw'],
        motionValues: [0.59, 0.85],
        coordinateOffset: { xPosition: ['12dvw', '12dvw'], yPosition: ['52dvh', '50dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: trolls,
        dimensions: ['20dvh', '85dvw'],
        motionValues: [0.61, 0.87],
        coordinateOffset: { xPosition: ['8dvw', '6dvw'], yPosition: ['71dvh', '70dvh']},
    },
]

export default epicStoriesImages
