import {
    theStingray,
    theEmpire,
    theOneRing,
    theCIS,
    jediOrder,
} from '../../../images'; // Import all images from a single file

// import theStingray from '../../../images/DGreenIcon.png'
// import theEmpire from '../../../images/empireLogo.png'
// import theOneRing from '../../../images/oneRing.png'
// import theCIS from '../../../images/CIS.png'
// import jediOrder from '../../../images/JediOrder.png'
import b2Droid from '../../../images/starWars/superBattleDroidBlue.png'
import b2DroidRed from '../../../images/starWars/superBattleDroidRed.png'
import b2DroidChrome from '../../../images/starWars/superBattleDroidChrome.png'
import dunharrowGhost from '../../../images/lordoftheRings/dunharrowGhost.png'
import rohanCommand from '../../../images/lordoftheRings/rohanCommand.png'
import urukHaiBanner from '../../../images/lordoftheRings/urukHaiBanner.png'
import treeEnt from '../../../images/lordoftheRings/treeEnt.png'
import greatEagle from '../../../images/lordoftheRings/greatEagle.png'




const galleryData = {
    welcome: {
        mainDisplay: {
            icon: theStingray,
            content: {
                title: 'The Gallery',
                description: 'Welcome! On display you will find figures from Lord of the Rings and Star Wars as well as custom made terrain. Use the arrows to browse the different sections and factions.',
                photo: treeEnt,
            },
        },
    },
    lordOfTheRings: {
        mainDisplay: {
            icon: theOneRing,
            content: {
                title: 'Lord of the Rings',
                description: 'Travel the world of Middle Earth with miniatures from Mordor, Gondor, Moria, Lothlorien, Rohan, Isengard, The Shire, Easterlings, Harad...',
                photo: greatEagle,
            },
        },
        gondor: {
            icon: 'gondor',
            content: {
                title: 'Gondor',
                description: 'The White City',
                photo: dunharrowGhost,
            },
        },
        rohan: {
            icon: 'rohan',
            content: {
                title: 'Rohan',
                description: 'Land of the horse lords.',
                photo: rohanCommand,
            },
        },
        isengard: {
            icon: 'isengard',
            content: {
                title: 'Isengard',
                description: 'The Other dark tower with a white hand.',
                photo: urukHaiBanner,
            },
        },
    },
    starWars: {
        mainDisplay: {
            icon: theCIS,
            content: {
                title: 'Star Wars',
                description: 'Roam the galaxy and encounter heroes and villains from the Galactic Republic, the Empire, Rebel Alliance, Separatist Battle Droids, Jedi Order, Deathwatch, Crime Syndicates...',
                photo: b2DroidChrome,
            },
        },
        empire: {
            icon: theEmpire,
            content: {
                title: 'Empire',
                description: 'The Galactic Empire ruled by the Sith. Featuring figures such as Darth Vader, Emperor Palpatine, and legions of Storm Troopers.',
                photo: b2Droid,
            },
        },
        jediOrder: {
            icon: jediOrder,
            content: {
                title: 'Jedi Order',
                description: 'Guardians of peace and justice in the galaxy.',
                photo: b2DroidRed,
            },
        },
    },
    terrain: {
        mainDisplay: {
            icon: theStingray,
            content: {
                title: 'Terrain',
                description: 'Various terrains to explore and admire.',
                photo: b2DroidRed,
            },
        },
        scatter: {
            icon: theStingray,
            content: {
                title: 'Scatter Terrain',
                description: 'Bits of terrain that can be spread across your battlefield',
                photo: b2DroidChrome,
            },
        },
        scenicSquares: {
            icon: theStingray,
            content: {
                title: 'Scenic Squares',
                description: 'A small section of terrain that can be configured in different arrangements to form an entire battlefield.',
                photo: b2Droid,
            },
        },
        miniBases: {
            icon: theStingray,
            content: {
                title: 'Miniature Bases',
                description: 'Unit bases for all sizes',
                photo: b2Droid,
            },
        },
    },
}


export default galleryData
