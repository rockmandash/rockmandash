import invariant from '../../.internal/invariant';

/**
 * This function makes writing for loops more functional way.
 * It invokes the iteratee `n` times.
 *
 * @example
 *
 * loop(5, index => {
 *   console.log(index);
 * })
 * // => 0
 * // => 1
 * // => 2
 * // => 3
 * // => 4
 *
 */

function loop(loopTimes: number, callback: (index: number) => any): void {
  invariant(
    loopTimes >= 0,
    `loopTimes argument must be greater or equal than 0, but got number: ${loopTimes}`
  );
  invariant(
    Number.isSafeInteger(loopTimes),
    `loopTimes argument must be a Safe Integer, but got number: ${loopTimes}`
  );

  for (let i = 0; i < loopTimes; i++) {
    callback(i);
  }
}

export default loop;
