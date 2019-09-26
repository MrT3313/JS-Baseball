/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === ResultObject ===
    function ResultObject(result_attrs) {
        this.time = new Date()
    }

    // - 1 - // -- HitResult -- //
        function Hit(hit_attrs) {
            ResultObject.call(this, hit_attrs),
            this.type = hit_attrs.type // single, double, triple. HR
        }

    // - 2 - // -- Out -- //
        function Out(hit_attrs) {
            ResultObject.call(this, hit_attrs),
            this.type = hit_attrs.type // Strikeout, Fielding
        }

// -- *** -- //
// -- *** -- //

// === TESTING === //

    const testResult = new ResultObject({})
    // console.log("TEST RESULT OBJECT: ", testResult)

    // - 1 - // Hit
        const testHit = new Hit({
            type: 'single'
        })
        // console.log('TEST HIT: ',testHit)
    // - 2 - // Out
        const testOut = new Out({
            type: 'fielding'
        })
        // console.log('TEST OUT: ',testOut)