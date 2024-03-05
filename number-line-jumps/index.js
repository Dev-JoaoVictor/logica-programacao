function kangaroo(x1, v1, x2, v2) {
  const value = (x2 - x1) / (v1 - v2);
  return value > 0 && value % 1 === 0 ? 'YES' : 'NO'
}

console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))

