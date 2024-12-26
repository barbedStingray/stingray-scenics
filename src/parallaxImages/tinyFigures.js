
import rohanCommand from '../images/lordoftheRings/rohanCommand.png'
import dunharrowGhost from '../images/lordoftheRings/dunharrowGhost.png'
import treeEnt from '../images/lordoftheRings/treeEnt.png'
import greatEagle from '../images/lordoftheRings/greatEagle.png'
import moriaGandalf from '../images/lordoftheRings/moriaGandalf.png'
import urukHaiBanner from '../images/lordoftheRings/urukHaiBanner.png'

import superBattleDroidChrome from '../images/starWars/superBattleDroidChrome.png'
import superBattleDroidBlue from '../images/starWars/superBattleDroidBlue.png'
import b1BattleDroid from '../images/starWars/b1BattleDroid.png'



const tinyFiguresImages = [
    {
        photoType: 'miniImage',
        picture: rohanCommand,
        dimensions: ['40dvh', '40dvh'],
        motionValues: [0.27, 0.63],
        coordinateOffset: { xPosition: ['30dvw', '33dvw'], yPosition: ['56dvh', '58dvh'] },
    },
    {
        photoType: 'miniImage',
        picture: urukHaiBanner,
        dimensions: ['37dvh', '37dvh'],
        motionValues: [0.25, 0.61],
        coordinateOffset: { xPosition: ['-11dvw', '-7dvw'], yPosition: ['52dvh', '61dvh']},
    },
    {
        photoType: 'miniImage',
        picture: treeEnt,
        dimensions: ['40dvh', '60dvw'],
        motionValues: [0.23, 0.57],
        coordinateOffset: { xPosition: ['45dvw', '49dvw'], yPosition: ['10dvh', '3dvh'] },
    },
    {
        photoType: 'miniImage',
        picture: greatEagle,
        dimensions: ['40dvh', '85dvw'], // width, height
        motionValues: [0.21, 0.57],
        coordinateOffset: { xPosition: ['-12dvw', '-10dvw'], yPosition: ['-6dvh', '0dvh'] },
    },
    {
        photoType: 'miniImage',
        picture: superBattleDroidChrome,
        dimensions: ['18dvh', '18dvh'],
        motionValues: [0.19, 0.5],
        coordinateOffset: { xPosition: ['6dvw', '5dvw'], yPosition: ['40dvh', '43dvh'] },
    },
    {
        photoType: 'miniImage',
        picture: superBattleDroidBlue,
        dimensions: ['16dvh', '16dvh'],
        motionValues: [0.17, 0.48],
        coordinateOffset: { xPosition: ['65dvw', '67dvw'], yPosition: ['46dvh', '50dvh'] },
    },
    {
        photoType: 'miniImage',
        picture: b1BattleDroid,
        dimensions: ['22dvh', '22dvh'],
        motionValues: [0.15, 0.46],
        coordinateOffset: { xPosition: ['33dvw', '31dvw'], yPosition: ['42dvh', '40dvh'] },
    },
]


export default tinyFiguresImages