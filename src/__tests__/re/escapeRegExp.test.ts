import escapeRegExp from '../../functions/re/escapeRegExp';

describe('escapeRegExp', () => {
  it('escapes the `RegExp` special characters', () => {
    expect(escapeRegExp('Hello World')).toBe('Hello World');
    expect(escapeRegExp('Hello.World')).toBe('Hello\\.World');
    expect(escapeRegExp('*Hello.World?')).toBe('\\*Hello\\.World\\?');
    expect(escapeRegExp('[*+^]')).toBe('\\[\\*\\+\\^\\]');
  });
});
