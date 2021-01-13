// import generator from 'generate-password'
const generator = require('generate-password')

module.exports = function generate(type) {  
    const generatedValue = generator.generate({
      length: type === "password" ? 24 : 8, 
      numbers: true,
      symbols: false,
      uppercase: true,
      exclude: '{},.;[]',
      excludeSimilarCharacters: true
    })

    console.log(`Generated ${type}: ${generatedValue}`)
    // check length of pw in db to be sure
    return generatedValue
}
    
