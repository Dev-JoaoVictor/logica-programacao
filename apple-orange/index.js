function countApplesAndOranges(s, t, a, b, apples, oranges) {

  const countFruits = (fruitPositions, treePosition) => 
    fruitPositions.map(fruit => fruit + treePosition).filter(fruit => fruit >= s && fruit <= t).length;

  const appleCount = countFruits(apples, a)
  const orangeCount = countFruits(oranges, b)

  console.log(appleCount, orangeCount)
}


countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])