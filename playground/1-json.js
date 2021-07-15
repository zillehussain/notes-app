const fs = require('fs')
//const book = {
    //title: 'Ego is the enemy',
  //  author: 'Ryan Holiday'
//}

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)

//const databuffer =fs.readFileSync('1-json.json')
//const dataJSON = databuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.title)


const person ={
    name: 'zille',
    palnet: 'earth',
    age: '24'
}
const personJSON = JSON.stringify(person)
fs.writeFileSync('1-json.json', personJSON)

const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)