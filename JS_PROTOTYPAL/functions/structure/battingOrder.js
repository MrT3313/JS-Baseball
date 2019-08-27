// Batting Order

const battingOrder = (roster) => {
    return roster.filter(player => player.position !== 'pitcher')
}

// -- EXPORTS -- //
    module.exports = {
        battingOrder
    }