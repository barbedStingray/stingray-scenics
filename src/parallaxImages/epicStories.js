
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
        motionValues: [0.57, 0.8],
        coordinateOffset: { xPosition: ['2.5dvw', '7dvw'], yPosition: ['2dvh', '3dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: smugglers,
        dimensions: ['20dvh', '85dvw'],
        motionValues: [0.55, 0.8],
        coordinateOffset: { xPosition: ['10dvw', '8dvw'], yPosition: ['20dvh', '22dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: imperials,
        dimensions: ['20dvh', '85dvw'],
        motionValues: [0.55, 0.8],
        coordinateOffset: { xPosition: ['10dvw', '8dvw'], yPosition: ['20dvh', '22dvh']},
    },
    // {
    //     photoType: 'landscapeImage',
    //     picture: rivendellCharge,
    //     position: ['30%', '38%'],
    //     dimensions: ['20dvh', '55dvw'],
    //     motionValues: [0.70, 0.8],
    //     coordinateOffset: { xPosition: ['0dvw', '2dvw'], yPosition: ['0dvh', '-3dvh']},
    // },
]

export default epicStoriesImages
