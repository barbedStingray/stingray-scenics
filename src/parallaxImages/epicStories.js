
import imperials from '../images/imperials.jpeg'
import pelennorFields from '../images/pelennorFields.jpeg'
import trolls from '../images/trolls.jpeg'
import rivendellCharge from '../images/rivendellCharge.jpeg'
import droids from '../images/droids.png'
import smugglers from '../images/smugglers.jpeg'


const epicStoriesImages = [
    {
        photoType: 'landscapeImage',
        picture: smugglers,
        position: ['5%', '10%'],
        dimensions: ['25dvh', '75dvw'],
        motionValues: [0.55, 0.8],
        coordinateOffset: { xPosition: ['0dvw', '0dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: trolls,
        position: ['35%', '5%'],
        dimensions: ['45dvh', '40dvw'],
        motionValues: [0.60, 0.8],
        coordinateOffset: { xPosition: ['0dvw', '-4dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: droids,
        position: ['60%', '45%'],
        dimensions: ['35dvh', '50dvw'],
        motionValues: [0.65, 0.8],
        coordinateOffset: { xPosition: ['0dvw', '4dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'landscapeImage',
        picture: rivendellCharge,
        position: ['30%', '38%'],
        dimensions: ['20dvh', '55dvw'],
        motionValues: [0.70, 0.8],
        coordinateOffset: { xPosition: ['0dvw', '2dvw'], yPosition: ['0dvh', '-3dvh']},
    },
]

export default epicStoriesImages
