function assert(condition: boolean): void {
  if(!condition) {
    throw new Error('Assertion failed!');
  }
}