import foobar from './foobar'

describe('Foobar', () => {
  it('should return foobar', () => {
    expect(foobar('foo', 'bar')).toBe('foobar')
  })
})
