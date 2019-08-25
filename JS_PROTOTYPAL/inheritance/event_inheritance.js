/* KEY
    === : Parent Object
    - # - : Child Object

    - initial testing @ the bottom -- soon to implement more advanced JS testing 

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
        function Contact(contact_attrs) {
            EventObject.call(this, contact_attrs)
            this.contactStats = contact_attrs.contactStats
        }

// -- *** -- //
// -- *** -- //

// === TESTING === //
    const testEventObject = new EventObject({})
    // console.log('TEST EVENT OBJECT: ',testEventObject)

    // - 1 - // Pitch
    const testPitch = new Pitch({
        pitchStats: {
            speed: 1000
        }
    })
    // console.log('TEST PITCH OBJECT: ', testPitch)

    // - 2 - // Contact
    const testContact = new Contact({
        contactStats: {
            contactPercent: 10.0 // ues 1000% ...
        }
    })
    // console.log('TEST CONTACT OBJECT: ', testContact)