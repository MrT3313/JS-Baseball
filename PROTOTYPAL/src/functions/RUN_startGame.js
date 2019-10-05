// -*- IMPORTS -*- //
    // -A- // ES6 Imports
    import ES6_INHERITANCE_gameObject from '../inheritance/gameObject.js'
// -B- // Node Imports


const RUN_startGame = () => {
    console.log('-X- insideRUN_startGame -X-')
    
    const result = new ES6_INHERITANCE_gameObject.MAIN_gameObject()
        // console.log(result)
    return result
}


// -*- ES6 EXPORTS -*- //
export default {
    RUN_startGame
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }