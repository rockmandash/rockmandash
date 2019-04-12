import replaceAll from '../../functions/array-string/replaceAll';

describe('replaceAll', () => {
  it('replaces all occurences in a string.', () => {
    expect(replaceAll('hello world goodbye world', 'world', 'everyone')).toBe(
      'hello everyone goodbye everyone'
    );
    expect(replaceAll('What????', '?', '!')).toBe('What!!!!');

    expect(
      replaceAll(
        `line1
line2
line3`,
        'line',
        'Line'
      )
    ).toBe(`Line1
Line2
Line3`);
  });

  it('replaces all occurences in an array.', () => {
    const expect1 = replaceAll(['a', 'b', 'c', 'c'], 'c', 'z');
    const result1 = ['a', 'b', 'z', 'z'];
    expect(expect1).toEqual(result1);

    const expect2 = replaceAll(['hello', 1, 'world', 1, 2], 1, {
      hello: 'world'
    });
    const result2 = [
      'hello',
      { hello: 'world' },
      'world',
      { hello: 'world' },
      2
    ];
    expect(expect2).toEqual(result2);
  });
});
