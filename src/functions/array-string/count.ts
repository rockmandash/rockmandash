/**
 * Counts the occurrences of a value in an array.
 *
 * @example
 *
 * count('#x#Y#x#', 'x');
 * // => 2
 *
 * count('ssss', 'ss')
 * // => 2
 *
 * count('ssss', 'ss', true) // overlap
 * // => 3
 *
 */

function count(str: string, substr: string, overlap?: boolean): number;

/**
 * Counts the occurrences of a value in an array.
 *
 * @example
 *
 * count([0, 1, 2, 2, 4, 5], 2);
 * // => 2
 *
 */

function count(arr: any[], value: any): number;

function count(
  arrOrString: string | any[],
  value: any,
  overlap = false
): number {
  if (typeof arrOrString === 'string') {
    if (arrOrString === '') {
      return 0;
    }
    if (value === '') {
      return arrOrString.length + 1;
    }

    const skip = overlap ? 1 : value.length;
    let count = 0;
    let position = arrOrString.indexOf(value);

    while (position !== -1) {
      count++;
      position = arrOrString.indexOf(value, position + skip);
    }

    return count;
  } else {
    return arrOrString.reduce<number>(
      (prev, current) => prev + Number(current === value),
      0
    );
  }
}

export default count;
