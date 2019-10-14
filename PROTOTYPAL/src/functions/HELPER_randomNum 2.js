const randomNumber = (top,bottom) => {
    return Math.round(Math.random() * (top - bottom) + bottom);
}

// -*- ES6 EXPORTS -*- //
export default {
    randomNumber
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }