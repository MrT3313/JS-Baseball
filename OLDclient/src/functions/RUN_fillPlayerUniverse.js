// -*- IMPORTS -*- //
    // -A- // ES6 Imports
    import ES6_INHERITANCE_playerObject from '../inheritance/playerObject.js'
    import ES6_DATA_playerUniverse from '../data/playerUniverse'

    // -B- // Node Imports
    // const NODE_playerUniverse = require('../../data/playerUniverse.js')

// -*- Set Variables -*- //
const playerData = ES6_DATA_playerUniverse
    // console.log(playerData)

// -*- fillPlayerUniverse-*- //
const fillPlayerUniverse = (playerUniverse) => {
    console.log('-X- insideRun_fillTeamUniverse -X-')
    console.log('-X- playerUniverse -X-',playerUniverse)
    const resultToReturn = []
    // --*-- //
    const playerPositionArrays = Object.keys(playerUniverse).map(i => playerUniverse[i])
    // --*-- //
    playerPositionArrays.forEach((positionArray, i) => {
        // console.log('-X- positionArray -X-',positionArray)
        // console.log('-X- i -X-',i)
        switch(i){
            case 0:
                // pitchers
                positionArray.map(player => resultToReturn.push(
                    new ES6_INHERITANCE_playerObject.SUB_playerObject_pitcher(player)
                ))
                break;
            case 1:
                // dh
                positionArray.map(player => resultToReturn.push(
                    new ES6_INHERITANCE_playerObject.SUB_playerObject_dh(player)
                ))
                break;
            case 2:
                // infield
                positionArray.map(player => resultToReturn.push(
                    new ES6_INHERITANCE_playerObject.SUB_playerObject_infielder(player)
                ))
                break;
            case 3:
                // outfield
                positionArray.map(player => resultToReturn.push(
                    new ES6_INHERITANCE_playerObject.SUB_playerObject_outfielder(player)
                ))
                break;
            default:
                alert('ERROR - fillPlayerUniverse')
        }
    return resultToReturn})
// console.log('-X- resultToReturn -X-', resultToReturn)
return resultToReturn}

// -*- ES6 EXPORTS -*- //
export default {
    fillPlayerUniverse,
    playerData,
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }