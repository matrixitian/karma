import generator from 'generate-password'

export default function generate(type) {
    const generatedValue = generator.generate({
      length: type === "password" ? 24 : 12, 
      numbers: true,
      symbols: true,
      uppercase: true,
      exclude: '{},.;[]',
      excludeSimilarCharacters: true
    })

    console.log(`Generated ${type}: ${generatedValue}`)
    // check length of pw in db to be sure
    return generatedValue
}
    
