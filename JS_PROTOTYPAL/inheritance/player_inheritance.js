/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === PlayerObject ===
    function PlayerObject(player_attrs) {
        this.firstName = player_attrs.firstName;
        this.lastName = player_attrs.lastName;
        this.number = player_attrs.number;
        this.stats = {
            power: player_attrs.power, // hitting power
            skill: player_attrs.skill, // fielding skill
        }
    }

    // - 1 - // -- Default -- //
        function Default(default_attrs) {
            PlayerObject.call(this, default_attrs)
            this.position = default_attrs.position
        }
    // - 2 - // -- DH -- //
        function DH(dh_attrs) {
            PlayerObject.call(this, dh_attrs)
            this.position = 'DH'
        }

    // - 3 - // -- Pitcher -- //
        function Pitcher(pitcher_attrs) {
            PlayerObject.call(this, pitcher_attrs)
            this.position = 'Pitcher'
            this.arm = pitcher_attrs.arm
            this.pitches = pitcher_attrs.pitches
        }
        
// -- *** -- //
// -- *** -- //