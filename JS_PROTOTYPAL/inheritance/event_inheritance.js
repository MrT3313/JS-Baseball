/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === EventObject === 
    function EventObject(event_attrs) {
        this.time = new Date()
    }

    // - 1 - // -- Pitch -- //
        function Pitch(pitch_attrs) {
            EventObject.call(this, pitch_attrs)
            this.type = pitch_attrs.type
            this.pitchStats = pitch_attrs.pitchStats
        }

    // - 2 - // -- Contact -- //
        function Contact(hit_attrs) {
            EventObject.call(this, hit_attrs)
            this.hitStats = pitch_attrs.hitStats
        }

// -- *** -- //
// -- *** -- //