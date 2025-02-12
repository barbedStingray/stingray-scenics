import b1BattleDroid from '../images/starWars/b1BattleDroid.png'


const characters = [
    { model: 'Boromir', picture: b1BattleDroid },
    { model: 'Aragorn', picture: b1BattleDroid },
    { model: 'Legolas', picture: b1BattleDroid },
    { model: 'Gandalf', picture: b1BattleDroid },
    { model: 'Merry', picture: b1BattleDroid },
    { model: 'Sam', picture: b1BattleDroid },
    { model: 'Pippen', picture: b1BattleDroid },
    { model: 'Frodo', picture: b1BattleDroid },
    { model: 'Gimli', picture: b1BattleDroid },
    { model: 'Kanan', picture: b1BattleDroid },
    { model: 'Hera', picture: b1BattleDroid },
    { model: 'Sabine', picture: b1BattleDroid },
    { model: 'Chopper', picture: b1BattleDroid },
    { model: 'Ezra', picture: b1BattleDroid },
    { model: 'Zeb', picture: b1BattleDroid }
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