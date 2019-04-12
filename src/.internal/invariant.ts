function invariant(condition: boolean, message?: string) {
  if (!condition) {
    let error = new Error(message);
    error.name = 'Invariant Violation';
    throw error;
  }
}

export default invariant;
