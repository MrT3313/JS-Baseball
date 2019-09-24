
const QUERY_numHumanPlayers = (param) => {
    let numberOfPlayers = param || 0
    // --*-- //
    // numberOfPlayers = prompt('You can have up to 2 players')
        // console.log('-x- numberOfPlayers -x-', numberOfPlayers)
    numberOfPlayers = parseInt(numberOfPlayers)

    switch(numberOfPlayers) {
        case 0:
        case 1:
        case 2:
            console.log('Thank you for entering correctly')
            break;
        default:
            console.log('Enter number between 0 & 2')
            break;
        
    }
return numberOfPlayers}


// -*- ES6 EXPORTS -*- //
export default {
    QUERY_numHumanPlayers
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }