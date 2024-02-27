function plusMinus(arr) {

  let result = [0, 0, 0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result[0]++
    } else if (arr[i] < 0) {
      result[1]++
    } else {
      result[2]++
    }
  }

  for (let i of result) {
    console.log((i / arr.length).toFixed(6))
  }

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))