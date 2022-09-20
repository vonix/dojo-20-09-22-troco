import change from '../../src/change'

describe('change', () => {
  const ballot5 = 5
  const ballot10 = 10

  it('should returns 0 when has no change', () => {
    const amountDue = 100
    const amountPaid = 100

    expect(change(amountDue, amountPaid)).toBe(0)
  })

  it('returns 1 ballot of 10', () => {
    const amountDue = 90
    const amountPaid = 100

    expect(change(amountDue, amountPaid)).toEqual({
      [ballot10]: 1
    })
  })

  it('should returns 1 ballot of 10 and 1 ballot of 5 when change is equal 15', () => {
    const amountDue = 85
    const amountPaid = 100

    expect(change(amountDue, amountPaid)).toEqual({
      [ballot5]: 1,
      [ballot10]: 1
    })
  })
})
