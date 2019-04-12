function without<T>(arr: T[], elementToExclude: any): T[];
function without<T>(arr: T[], arrToExclude: any[]): T[];

/**
 * Creates an array excluding all given value.
 *
 * @example
 *
 * without([2, 3, 4], [3, 50]);
 * // => [2, 4]
 *
 */

function without<T>(arr: T[], elementOrArrToExclude: any): T[] {
  if (Array.isArray(elementOrArrToExclude)) {
    return arr.filter(arrItem => !elementOrArrToExclude.includes(arrItem));
  } else {
    return arr.filter(arrItem => arrItem !== elementOrArrToExclude);
  }
}

export default without;
