function birthdayCakeCandles(candles) {
  let maior = candles[0];
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maior) {
      maior = candles[i]
    }
  }

  for (let j = 0; j < candles.length; j++) {
    if (candles[j] == maior) {
      count++
    }
  }

  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3,]))