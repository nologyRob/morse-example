describe("morseToEnglish", ()=>{
  it("Should return '.-' when given a string of 'a'", () =>{
    const translatedString = morseToEnglish("a")
    expect(translatedString).toBe('.-')
  })
  
})

describe("englishToMorse", ()=>{
  it("Should return 'a' when given a string of '.-'", () =>{
    const translatedString = englishToMorse(".-")
    expect(translatedString).toBe('a')
  })
  
})