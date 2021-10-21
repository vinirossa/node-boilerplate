import sayName from './say-name'

describe('Say Name', () => {
  it('should return "The name is Maycon"', () => {
    expect(sayName('Maycon')).toBe('The name is Maycon')
  })

  it('should return "The name is Vinícius"', () => {
    expect(sayName('Vinícius')).toBe('The name is Vinícius')
  })
})
