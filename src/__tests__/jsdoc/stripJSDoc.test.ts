import stripJSDoc from '../../functions/jsdoc/stripJSDoc';

describe('stripJSDoc', () => {
  it('should return jsdoc part in given source code string', () => {
    const JSDocs = stripJSDoc(
      `
/**
 * Returns all indices of value in the array. If value never occurs, returns []
 *
 * @example
 *
 * indexOfAll('the magical unicorn is magic', 'magic');
 * // => [4, 23]
 *
 */

function indexOfAll(str: string, substr: string, overlap?: boolean): number[];

/**
 * Returns all indices of value in the array. If value never occurs, returns []
 *
 * @example
 *
 * indexOfAll([1, 2, 3, 1, 2, 3], 1);
 * // => [0, 3]
 *
 */

function indexOfAll(arr: any[], value: any): number[];

function indexOfAll(
  arrOrString: string | any[],
  value: any,
  overlap = false
): number[] {
  if (typeof arrOrString === 'string') {
    if (arrOrString === '') {
      return [];
    }
    if (value === '') {
      return [];
    }

    const skip = overlap ? 1 : value.length;
    let count = [];
    let position = arrOrString.indexOf(value);

    while (position !== -1) {
      count.push(position);
      position = arrOrString.indexOf(value, position + skip);
    }

    return count;
  } else {
    return arrOrString.flatMap((item, index) =>
      item === value ? [index] : []
    );
  }
}

export default indexOfAll;
`
    );

    expect(JSDocs).toEqual([
      `Returns all indices of value in the array. If value never occurs, returns []

@example

indexOfAll('the magical unicorn is magic', 'magic');
// => [4, 23]
`,
      `Returns all indices of value in the array. If value never occurs, returns []

@example

indexOfAll([1, 2, 3, 1, 2, 3], 1);
// => [0, 3]
`
    ]);
  });

  it('will return empty array if empty or no matching or invalid.', () => {
    expect(
      stripJSDoc(`
    /**
     */
    `)
    ).toEqual(['']);

    expect(
      stripJSDoc(`
    /**
     * Hello World

     */
    `)
    ).toEqual([]);

    expect(
      stripJSDoc(`
12345
    `)
    ).toEqual([]);
  });
});
