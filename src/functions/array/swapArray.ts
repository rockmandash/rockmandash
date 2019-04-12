import invariant from '../../.internal/invariant';

/**
 * Swap two items in an `array`, it mutates original array.
 * (not pure function)
 *
 * @example
 *
 * let arr = ['a', 'b', 'c'];
 *
 * swapArray(arr, 0, 2);
 *
 * console.log(arr);
 * // => ['c', 'b', 'a']
 *
 */

function swapArray(arr: any[], index1: number, index2: number): void {
  invariant(
    Math.max(index1, index2) < arr.length,
    `Swap functions's index argument is out of index. Array length: ${
      arr.length
    }, recieved: index1: ${index1}, index2: ${index2}`
  );

  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

export default swapArray;
