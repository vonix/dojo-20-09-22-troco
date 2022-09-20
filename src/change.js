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

  for (const coin of listCoins) {
    const qtde = Math.floor(amountChange/coin)
    if (!qtde) continue
    ballots[coin] = qtde
    amountChange -= coin * ballots[coin]
  }

  return ballots
}

const listBallots = [10, 5]
const listCoins = [0.5]
