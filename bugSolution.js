function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or throw an error, or use a default value
  }
  return a + b; 
}