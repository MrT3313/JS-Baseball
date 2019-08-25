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
        function Hit(hit_attrs) {
            ResultObject.call(this, hit_attrs),
            this.type = hit_attrs.type // Strikeout, Fielding
        }

// -- *** -- //
// -- *** -- //