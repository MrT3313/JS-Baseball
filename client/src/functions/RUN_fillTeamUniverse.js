// IMPORTS
    import ES6_INHERITANCE_teamUniverse from '../inheritance/teamObject.js'

// FILL TEAM UNIVERSE
const fillTeamUniverse = (teamUniverse) => {
    console.log('-X- insideRun_fillTeamUniverse -X-')
    console.log('teamUniverse', teamUniverse)
    // --*-- //
    return teamUniverse.teams_array.map(team => new ES6_INHERITANCE_teamUniverse.MAIN_teamObject(team))
}

// ES6 EXPORTS
export default {
    fillTeamUniverse
}
