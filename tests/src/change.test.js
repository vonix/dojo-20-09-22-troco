import change from '../../src/change'

describe('change', () => {
  const ballot5 = 5
  const ballot10 = 10
  const coin50 = 0.50

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

  it('should returns 1 ballot of 10 and 1 ballot of 5 and 1 coin of 0.50 when change is equal 15.50', () => {
    const amountDue = 84.5
    const amountPaid = 100

    expect(change(amountDue, amountPaid)).toEqual({
      [ballot5]: 1,
      [ballot10]: 1,
      [coin50]: 1
    })
  })

  it('should returns that totalPaid is less than amountDue', () => {
    const amountDue = 100
    const amountPaid = 50
    expect(() => change(amountDue, amountPaid)).toThrow(Error)
  })
})
