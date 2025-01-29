import b1BattleDroid from '../images/starWars/b1BattleDroid.png'

const characters = [
    { title: 'Boromir', img: b1BattleDroid },
    { title: 'Aragorn', img: b1BattleDroid },
    { title: 'Legolas', img: b1BattleDroid },
    { title: 'Gandalf', img: b1BattleDroid },
    { title: 'Merry', img: b1BattleDroid },
    { title: 'Sam', img: b1BattleDroid },
    { title: 'Pippen', img: b1BattleDroid },
    { title: 'Frodo', img: b1BattleDroid },
    { title: 'Gimli', img: b1BattleDroid },
    { title: 'Kanan', img: b1BattleDroid },
    { title: 'Hera', img: b1BattleDroid },
    { title: 'Sabine', img: b1BattleDroid },
    { title: 'Chopper', img: b1BattleDroid },
    { title: 'Ezra', img: b1BattleDroid },
    { title: 'Zeb', img: b1BattleDroid }
]

const miniShowcase = (state = characters, action) => {

    switch (action.type) {
        case 'SET_SHOWCASE':
            return action.payload
        default:
            return state
    }

}

export default miniShowcase