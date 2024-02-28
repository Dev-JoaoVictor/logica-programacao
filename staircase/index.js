function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = n - i
    console.log(' '.repeat(spaces) + '#'.repeat(i))
  }
}


staircase(5)