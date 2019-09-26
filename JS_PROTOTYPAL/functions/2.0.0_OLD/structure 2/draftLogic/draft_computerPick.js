// -- IMPORTS -- //
    const RANDOM_NUMBER = require('../../2.0.0_OLD/helpers/randomNumGen.js')

// -- *** -- //

const computerPick = (availableArray) => {
    // console.log('insideComputerPick')
    // console.log('availableTeams', availableTeams)
    console.log('-x- Available Elements', availableArray.length)

    let max = availableArray.length - 1

    let random = RANDOM_NUMBER.randomNum(max, 0)
        // console.log('random', random)

    let selected = availableArray[random]
        // console.log('-x- SELECTED -x-', selected)

    let updatedArray = availableArray.splice(random,1)
        // console.log('-x- UPDATED ARRAY -x-', updatedArray)

        if (availableArray.includes(selected)) {
            console.log('!!! ERROR !!!')
        }

        selected.user = 'Computer'
return [selected, availableArray]}

// -- EXPORTS -- //
    module.exports = {
        computerPick   
    }