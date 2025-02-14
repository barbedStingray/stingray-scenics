import * as images from '../../../images';


// * if you update your photos, use Squoosh to make webp photos.
// * high resolution are just webp at 75% quality - Low is largest dimension to 200 and 0-20% quality


const galleryData = {
    welcome: {
        mainDisplay: {
            icon: images.stingrayLogo,
            color: '#00000055',
            content: {
                title: 'The Gallery',
                description: 'Welcome! On display you will find figures from Lord of the Rings and Star Wars as well as custom made terrain. Use the arrows to browse the different sections and factions.',
                photo: { lowSrc: images.mainHeroSm, highSrc: images.mainHeroLg},
            },
        },
    },
    lordOfTheRings: {
        mainDisplay: {
            icon: images.theOneRing,
            color: '#00822599',
            content: {
                title: 'Lord of the Rings',
                description: 'Travel the world of Middle Earth with miniatures from Mordor, Gondor, Moria, Lothlorien, Rohan, Isengard, The Shire, Easterlings, Harad...',
                photo: { lowSrc: images.lotrMainSm, highSrc: images.lotrMainLg},
            },
        },
        // gondor: {
        //     icon: images.minasTirith,
        //     color: '#ffffff33',
        //     content: {
        //         title: 'Minas Tirith',
        //         description: 'The White City',
        //         photo: images.dunharrowGhost,
        //     },
        // },
        // mordor: {
        //     icon: images.mordor,
        //     color: '#ffff0033',
        //     content: {
        //         title: 'Mordor',
        //         description: 'The Eye sees all. The time of the Free Peoples is over.',
        //         photo: images.mordorOrc,
        //     },
        // },
        // rhun: {
        //     icon: images.rhun,
        //     color: '#ffff0033',
        //     content: {
        //         title: 'Rhun',
        //         description: 'Mysterious lands to the east. Easterlings, as theyre called',
        //         photo: images.easterling,
        //     },
        // },
        // theFellowship: {
        //     icon: images.theFellowship,
        //     color: '#ffff0033',
        //     content: {
        //         title: 'The Fellowship',
        //         description: 'Nine travellers on a quest',
        //         photo: images.treeEnt,
        //     },
        // },
        // rohan: {
        //     icon: images.horseLords,
        //     color: '#04c22044',
        //     content: {
        //         title: 'Rohan',
        //         description: 'Land of the Horse Lords',
        //         photo: images.rohanCommand,
        //     },
        // },
    },
    // starWars: {
    //     mainDisplay: {
    //         icon: images.r2d2,
    //         color: '#c00000aa',
    //         content: {
    //             title: 'Star Wars',
    //             description: 'Roam the galaxy and encounter heroes and villains from the Galactic Republic, the Empire, Rebel Alliance, Separatist Battle Droids, Jedi Order, Deathwatch, Crime Syndicates...',
    //             photo: images.b2DroidChrome,
    //         },
    //     },
    //     jediOrder: {
    //         icon: images.jediOrder,
    //         color: '#66ff0088',
    //         content: {
    //             title: 'Jedi Order',
    //             description: 'Guardians of peace and justice in the galaxy.',
    //             photo: images.b2DroidRed,
    //         },
    //     },
    //     galacticEmpire: {
    //         icon: images.galacticEmpire,
    //         color: '#004fc599',
    //         content: {
    //             title: 'Galactic Empire',
    //             description: 'The Galactic Empire ruled by the Sith. Featuring figures such as Darth Vader, Emperor Palpatine, and legions of Storm Troopers.',
    //             photo: images.b2Droid,
    //         },
    //     },
    // },
    // terrain: {
    //     mainDisplay: {
    //         icon: images.stingrayLogo,
    //         color: '#000dbe88',
    //         content: {
    //             title: 'Terrain',
    //             description: 'Various terrains to explore and admire.',
    //             photo: images.b2DroidRed,
    //         },
    //     },
        // miniBases: {
        //     icon: images.stingrayLogo,
        //     color: '#0d00ff',
        //     content: {
        //         title: 'Miniature Bases',
        //         description: 'Unit bases for all sizes',
        //         photo: images.b2Droid,
        //     },
        // },
        // scatter: {
        //     icon: images.stingrayLogo,
        //     color: '#0d00ff',
        //     content: {
        //         title: 'Scatter Terrain',
        //         description: 'Bits of terrain that can be spread across your battlefield',
        //         photo: images.b2DroidChrome,
        //     },
        // },
        // scenicSquares: {
        //     icon: images.stingrayLogo,
        //     color: '#0d00ff',
        //     content: {
        //         title: 'Scenic Squares',
        //         description: 'A small section of terrain that can be configured in different arrangements to form an entire battlefield.',
        //         photo: images.b2Droid,
        //     },
        // },
    // },
    menuSection: {
        mainDisplay: {
            icon: images.stingrayLogo,
            color: ['#000', '#fff'],
            content: {
                title: 'MENU',
                description: 'Welcome to the menu, please see all the different factions below',
                photo: images.b2DroidRed, // probably null ?
            },
        },
    },
}


export default galleryData
