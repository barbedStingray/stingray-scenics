import sBattleDroid from '../images/sBattleDroid.png'
import sBattleDroid2 from '../images/sBattleDroid2.png'
import sBattleDroid3 from '../images/sBattleDroid3.png'
import rohan from '../images/rohan.png'
import goblin from '../images/goblin.png'



const tinyFiguresImages = [
    {
        photoType: 'miniImage',
        picture: rohan,
        position: ['5%', '10%'],
        dimensions: ['25dvh', '75dvw'],
        motionValues: [0.21, 0.5],
        coordinateOffset: { xPosition: ['0dvw', '-4dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'miniImage',
        picture: sBattleDroid,
        position: ['35%', '5%'],
        dimensions: ['45dvh', '40dvw'],
        motionValues: [0.17, 0.5],
        coordinateOffset: { xPosition: ['0dvw', '-2dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'miniImage',
        picture: sBattleDroid2,
        position: ['65%', '45%'],
        dimensions: ['35dvh', '50dvw'],
        motionValues: [0.19, 0.5],
        coordinateOffset: { xPosition: ['0dvw', '0dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'miniImage',
        picture: sBattleDroid3,
        position: ['40%', '38%'],
        dimensions: ['20dvh', '55dvw'],
        motionValues: [0.33, 0.5],
        coordinateOffset: { xPosition: ['0dvw', '2dvw'], yPosition: ['0dvh', '-3dvh']},
    },
    {
        photoType: 'miniImage',
        picture: goblin,
        position: ['5%', '50%'],
        dimensions: ['20dvh', '55dvw'],
        motionValues: [0.22, 0.5],
        coordinateOffset: { xPosition: ['0dvw', '0dvw'], yPosition: ['0dvh', '-3dvh']},
    },
]


export default tinyFiguresImages