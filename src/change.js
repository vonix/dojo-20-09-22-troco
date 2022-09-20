export default (amountDue, amountPaid) => {
  let amountChange = amountPaid - amountDue 
  if (!amountChange) return 0

  const ballots = {}

  for (const ballot of listBallots) {
    const qtde = Math.floor(amountChange/ballot)
    if (!qtde) continue

    ballots[ballot] = qtde
    amountChange -= ballot * ballots[ballot]
  }

  return ballots
}

const listBallots = [10, 5]
