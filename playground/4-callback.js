
// setTimeout (() => {
//     console.log('two seconds are up')
// }, 2000)

// const names = [ 'andrew', 'jen', 'jess']
// const ShortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout (() => {
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('patna', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout (() => {
        callback(a + b)
    }, 2000)

}

add(1, 4, (sum) => {
    console.log(sum)
})