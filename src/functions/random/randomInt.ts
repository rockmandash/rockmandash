import invariant from '../../.internal/invariant';

/**
 * Generate a random integer between provided min and max.
 *
 * @example
 *
 * const min = 2;
 * const max = 10;
 *
 * randomInt(min, max);
 * // => 3
 *
 */

function randomInt(min: number, max: number): number {
  invariant(
    min <= max,
    `Arguments min: ${min} should be smaller than or equal to max: ${max}`
  );

  invariant(Number.isInteger(min), `Argument min: ${min} should be integer.`);

  invariant(Number.isInteger(max), `Argument max: ${max} should be integer.`);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomInt;
