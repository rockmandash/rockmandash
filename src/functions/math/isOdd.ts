import invariant from '../../.internal/invariant';

/**
 * Returns true if the given number is odd.
 *
 * @example
 *
 * isOdd(3);
 * // => true
 *
 */

function isOdd(value: number): boolean {
  const num = Math.abs(value);

  invariant(
    Number.isSafeInteger(num),
    `Argument n: ${num} should be a safe integer`
  );

  return num % 2 === 1;
}

export default isOdd;
