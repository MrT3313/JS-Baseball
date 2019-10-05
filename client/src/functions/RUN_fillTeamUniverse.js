// -*- IMPORTS -*- //
    // -A- // ES6 Imports
    import ES6_INHERITANCE_teamUniverse from '../inheritance/teamObject.js'
    import ES6_DATA_teamUniverse from '../data/teamUniverse'
    // -B- // Node Imports
    // const NODE_teamUniverse = require('../../data/teamUniverse.js')

// -*- Set Variables -*- //
const teamData = ES6_DATA_teamUniverse
    console.log(teamData)

// -*- fillTeamUniverse-*- //
const fillTeamUniverse = (teamUniverse) => {
    console.log('-X- insideRun_fillTeamUniverse -X-')
    console.log('teamUniverse', teamUniverse)
    // --*-- //
    return teamUniverse.teams_array.map(team => new ES6_INHERITANCE_teamUniverse.MAIN_teamObject(team))
}

// -*- ES6 EXPORTS -*- //
export default {
    fillTeamUniverse,
    teamData
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }