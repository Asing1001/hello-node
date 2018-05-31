const fs = require('fs');
const { getContent } = require('./firstModule')
const jsonContent = require('./package.json')

console.log(jsonContent)
fs.writeFile("M:/Github/hello-node/test.txt", getContent(), function () {
    console.log('done')
})

console.log('hello world')