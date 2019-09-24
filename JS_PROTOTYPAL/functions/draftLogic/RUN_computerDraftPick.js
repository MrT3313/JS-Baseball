// -*- IMPORTS -*- //
    // -A- // ES6 Imports
    import ES6_HELPER_randomNum from '../HELPER_randomNum.js'
// -B- // Node Imports


const RUN_computerDraftPick = (pickUniverse) => {
    console.log('-X- insideRUN_computerDraftPick -X-')
    console.log('-*- computer pickUniverse -*-', pickUniverse)

    const randomMin = 1
    const randomMax = pickUniverse.length
        // console.log(randomMin, randomMax)

    const randomNumber = ES6_HELPER_randomNum.randomNumber(0, pickUniverse.length) - 1
        // console.log('-*- randomNumber -*-',randomNumber)
        // console.log('-*- selection -*-',pickUniverse[randomNumber])

    const selection = pickUniverse.splice(randomNumber,1)
        // console.log('-*- selection -*-', selection)
        // console.log('-*- pickUniverse.length -*-', pickUniverse.length)
return selection}

// -*- ES6 EXPORTS -*- //
export default {
    RUN_computerDraftPick
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }