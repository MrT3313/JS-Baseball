const randomNumber = (top,bottom) => {
    const result = Math.floor((Math.random() * top) + bottom)
        console.log('result', result)
    return result
}

// -*- ES6 EXPORTS -*- //
export default {
    randomNumber
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }