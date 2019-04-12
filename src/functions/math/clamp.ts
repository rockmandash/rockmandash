import invariant from '../../.internal/invariant';

/**
 * Clamps `number` between `min` and `max` bounds.
 *
 * @example
 *
 * let value1 = 5;
 * clamp(8.2, value1, 9.4);
 * // => 8.2
 *
 */

function clamp(min: number, value: number, max: number): number {
  invariant(
    min <= max,
    `Arguments min: ${min} should be smaller than or equal to max: ${max}`
  );

  invariant(!Number.isNaN(min), `Arguments min: ${min} is NaN`);
  invariant(!Number.isNaN(value), `Arguments value: ${value} is NaN`);
  invariant(!Number.isNaN(max), `Arguments max: ${max} is NaN`);

  return Math.max(min, Math.min(max, value));
}

export default clamp;
