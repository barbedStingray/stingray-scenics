import * as images from '../../../images';



const galleryData = {
    welcome: {
        mainDisplay: {
            icon: images.theStingray,
            color: '#008225',
            content: {
                title: 'The Gallery',
                description: 'Welcome! On display you will find figures from Lord of the Rings and Star Wars as well as custom made terrain. Use the arrows to browse the different sections and factions.',
                photo: images.treeEnt,
            },
        },
    },
    lordOfTheRings: {
        mainDisplay: {
            icon: images.theOneRing,
            color: '#0d00ff',
            content: {
                title: 'Lord of the Rings',
                description: 'Travel the world of Middle Earth with miniatures from Mordor, Gondor, Moria, Lothlorien, Rohan, Isengard, The Shire, Easterlings, Harad...',
                photo: images.greatEagle,
            },
        },
        gondor: {
            icon: 'gondor',
            color: '#00fbff',
            content: {
                title: 'Gondor',
                description: 'The White City',
                photo: images.dunharrowGhost,
            },
        },
        rohan: {
            icon: 'rohan',
            color: '#0d00ff40',
            content: {
                title: 'Rohan',
                description: 'Land of the horse lords.',
                photo: images.rohanCommand,
            },
        },
        isengard: {
            icon: 'isengard',
            color: '#0d00ff40',
            content: {
                title: 'Isengard',
                description: 'The Other dark tower with a white hand.',
                photo: images.urukHaiBanner,
            },
        },
    },
    starWars: {
        mainDisplay: {
            icon: images.theCIS,
            color: '#c90000',
            content: {
                title: 'Star Wars',
                description: 'Roam the galaxy and encounter heroes and villains from the Galactic Republic, the Empire, Rebel Alliance, Separatist Battle Droids, Jedi Order, Deathwatch, Crime Syndicates...',
                photo: images.b2DroidChrome,
            },
        },
        empire: {
            icon: images.theEmpire,
            color: '#0d00ff40',
            content: {
                title: 'Empire',
                description: 'The Galactic Empire ruled by the Sith. Featuring figures such as Darth Vader, Emperor Palpatine, and legions of Storm Troopers.',
                photo: images.b2Droid,
            },
        },
        jediOrder: {
            icon: images.jediOrder,
            color: '#0d00ff40',
            content: {
                title: 'Jedi Order',
                description: 'Guardians of peace and justice in the galaxy.',
                photo: images.b2DroidRed,
            },
        },
    },
    terrain: {
        mainDisplay: {
            icon: images.theStingray,
            color: '#0d00ff40',
            content: {
                title: 'Terrain',
                description: 'Various terrains to explore and admire.',
                photo: images.b2DroidRed,
            },
        },
        scatter: {
            icon: images.theStingray,
            color: '#0d00ff40',
            content: {
                title: 'Scatter Terrain',
                description: 'Bits of terrain that can be spread across your battlefield',
                photo: images.b2DroidChrome,
            },
        },
        scenicSquares: {
            icon: images.theStingray,
            color: '#0d00ff40',
            content: {
                title: 'Scenic Squares',
                description: 'A small section of terrain that can be configured in different arrangements to form an entire battlefield.',
                photo: images.b2Droid,
            },
        },
        miniBases: {
            icon: images.theStingray,
            color: '#0d00ff40',
            content: {
                title: 'Miniature Bases',
                description: 'Unit bases for all sizes',
                photo: images.b2Droid,
            },
        },
    },
}


export default galleryData
