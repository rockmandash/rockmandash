import loop from '../utility/loop';

/**
 * Add an item to an array between each element
 *
 * @example
 *
 * intersperse('BBBB', 'A');
 * // => 'BABABAB'
 *
 */

function intersperse(str: string, item: string): string;

/**
 * Add an item to an array between each element
 *
 * @example
 *
 * intersperse([1, 2, 3], 'A');
 * // => [1, 'A', 2, 'A', 3]
 *
 */

function intersperse<T, U>(arr: T[], item: U): (T | U)[];

function intersperse(arrOrString: any, item: any): any {
  if (arrOrString.length <= 1) {
    return arrOrString;
  }

  const loopTimes = arrOrString.length - 1;

  if (typeof arrOrString === 'string') {
    let result = arrOrString[0];

    loop(loopTimes, index => {
      const chunk = item + arrOrString[index + 1];
      result += chunk;
    });

    return result;
  } else {
    let result = [arrOrString[0]];

    loop(loopTimes, index => {
      result.push(item, arrOrString[index + 1]);
    });

    return result;
  }
}

export default intersperse;
