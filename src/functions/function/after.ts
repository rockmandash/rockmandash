import invariant from '../../.internal/invariant';

/**
 * This method creates a function that invokes when it's called `n` or more times.
 *
 * @example
 *
 * const getMessage = () => 'Hello World';
 * const restrictedGetMessage = after(4, getMessage);
 *
 * restrictedGetMessage();
 * // => undefined
 * restrictedGetMessage();
 * // => undefined
 * restrictedGetMessage();
 * // => undefined
 * restrictedGetMessage();
 * // => 'Hello World'
 *
 *
 */

function after<T>(n: number, callback: (...args: any[]) => T): () => T | void {
  invariant(n >= 1, `n argument must be bigger than 0, but got number: ${n}`);
  invariant(
    Number.isSafeInteger(n),
    `n argument must be a Safe Integer, but got number: ${n}`
  );

  let count = 1;

  return () => {
    if (count >= n) {
      return callback();
    } else {
      count += 1;
      return;
    }
  };
}

export default after;
