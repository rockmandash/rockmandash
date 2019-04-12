import loop from '../utility/loop';
import isUnique from '../array-string/isUnique';
import invariant from '../../.internal/invariant';

function innerPullAt<T>(arr: T[], index: number): T {
  return arr.splice(index, 1)[0];
}

/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements, it mutates original array.
 * (not pure function)
 *
 * @example
 *
 * let arr1 = [4, 5, 6];
 * pullAt(arr, 1);
 * // => 5
 *
 * console.log(arr1);
 * // => [4, 6]
 *
 */

function pullAt<T>(arr: T[], index: number): T;

/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements, it mutates original array.
 * (not pure function)
 *
 * @example
 *
 * let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 * pullAt(arr, [1, 3, 11, 7, 5, 9]);
 * // => [2, 4, 12, 8, 6, 10]
 *
 * console.log(arr2);
 * // => [1, 3, 5, 7, 9, 11]
 *
 */
function pullAt<T>(arr: T[], indexes: number[]): T[];

function pullAt<T>(arr: T[], indexOrIndexes: any): any {
  if (Array.isArray(indexOrIndexes)) {
    if (indexOrIndexes.length === 0) {
      return [];
    }
    invariant(
      !indexOrIndexes.some(value => !Number.isInteger(value)),
      `Argument indexes: ${indexOrIndexes} should be all integer.`
    );

    invariant(
      !indexOrIndexes.some(value => value >= arr.length),
      `Argument indexes: ${indexOrIndexes} can't bigger thant array's length.`
    );

    invariant(
      isUnique(indexOrIndexes),
      `Argument indexes: ${indexOrIndexes} should be all unique value.`
    );

    const actualIndexes = indexOrIndexes.map((value, valueIndex) => {
      let minusCount = 0;

      loop(valueIndex, loopValueIndex => {
        if (indexOrIndexes[loopValueIndex] < value) {
          minusCount++;
        }
      });
      return value - minusCount;
    });

    let result: T[] = [];

    actualIndexes.forEach(actualIndex => {
      result.push(innerPullAt(arr, actualIndex));
    });

    return result;
  } else {
    invariant(
      Number.isInteger(indexOrIndexes),
      `Argument index: ${indexOrIndexes} should be integer.`
    );

    return innerPullAt(arr, indexOrIndexes);
  }
}

export default pullAt;
