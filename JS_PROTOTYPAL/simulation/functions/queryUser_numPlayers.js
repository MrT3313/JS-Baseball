// Find out how many users want to play -- how many will be simulated 
// <= 2

const queryUser_numPlayers = (params) => {
    console.log('inside queryUser_numPlayers')

    
    let numberOfPlayers = params || undefined
    // numberOfPlayers = parseInt(numberOfPlayers)

    while (numberOfPlayers === undefined || numberOfPlayers > 2) {
        /* 
            add a typecheck for non numeric values
        */ 
        // - V1 - //
            // while (typeof numberOfPlayers !== 'number' && numberOfPlayers !== undefined) {
            //     numberOfPlayers = prompt('Please enter a number')
            // }

        numberOfPlayers = prompt('You can have up to 2 players')
    }
console.log(typeof numberOfPlayers)
console.log(numberOfPlayers)
return parseInt(numberOfPlayers)}