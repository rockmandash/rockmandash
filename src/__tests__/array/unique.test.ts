import unique from '../../functions/array/unique';

describe('unique', () => {
  it('should remove duplication in an Array', () => {
    expect(unique([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5])).toEqual([
      0,
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('should remove duplicated character in a String', () => {
    expect(unique('hello world')).toEqual([
      'h',
      'e',
      'l',
      'o',
      ' ',
      'w',
      'r',
      'd'
    ]);
  });
});
