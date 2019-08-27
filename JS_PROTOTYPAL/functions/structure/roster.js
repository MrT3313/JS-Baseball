// Get Roster
const Roster = (teamObject) => {
    console.log('=============== Get Roster ===============')

    const combined_playerCat_array =    teamObject.teamPlayers.outfielders.concat(
                                        teamObject.teamPlayers.infielders.concat(
                                        teamObject.teamPlayers.pitchers).concat(
                                        teamObject.teamPlayers.DHs))
return combined_playerCat_array}

// -- EXPORTS -- //
module.exports = {
    Roster
}