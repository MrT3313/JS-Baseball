
/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === TeamObject ===
    function TeamObject(team_attrs) {
        this.city = team_attrs.city
        this.name = team_attrs.name
        this.teamPlayers = {
            outfielders: [],
            infielders: [],
            pitchers: [],
        }

    // -- prototype -- //
        TeamObject.prototype.checkRoster = function() {
        if (
            this.teamPlayers.outfielders.length >= 3 &&
            this.teamPlayers.infielders.length >= 4 &&
            this.teamPlayers.pitcher.length >= 1
        ) {
            console.log("min FILLED")
        } else {
            console.log('NOT filled')
        }
    }
}

// -- *** -- //
// -- *** -- //