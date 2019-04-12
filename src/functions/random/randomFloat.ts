import invariant from '../../.internal/invariant';

/**
 * Generate a random float between provided min and max.
 *
 * @example
 *
 * const min = 2;
 * const max = 10;
 *
 * randomFloat(min, max);
 * // => 2.5
 *
 */

function randomFloat(min: number, max: number): number {
  invariant(
    min <= max,
    `Arguments min: ${min} should be smaller than or equal to max: ${max}`
  );

  return Math.random() * (max - min) + min;
}

export default randomFloat;
