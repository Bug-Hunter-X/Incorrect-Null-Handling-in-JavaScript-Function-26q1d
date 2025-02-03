function foo(a, b) {
  if (a === null || b === null) {
    return null; // This is incorrect
  }
  return a + b; 
}