/**
 * Generate a random boolean.
 *
 * @example
 *
 * randomBoolean();
 * // => true or false
 *
 */

function randomBoolean(): boolean {
  return Math.random() > 0.5;
}

export default randomBoolean;
