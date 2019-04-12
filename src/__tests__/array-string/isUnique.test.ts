import isUnique from '../../functions/array-string/isUnique';

describe('isUnique', () => {
  it('Checks if `array` has no duplicated value.', () => {
    // array
    expect(isUnique([0, 1, 2, 3, 4, 5])).toBeTruthy();
    expect(isUnique([0, 1, 2, 3, 4, 5, 5])).toBeFalsy();
    expect(isUnique([])).toBeTruthy();

    // string
    expect(isUnique('abcd')).toBeTruthy();
    expect(isUnique('aabcd')).toBeFalsy();
    expect(isUnique('')).toBeTruthy();
  });
});
