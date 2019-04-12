import after from '../../functions/function/after';

describe('after', () => {
  it('should create a function that actually invokes after `n` calls', () => {
    const getMessage = () => 'Hello World';

    const restrictedGetMessage = after(4, getMessage);

    expect(restrictedGetMessage()).toBeUndefined();
    expect(restrictedGetMessage()).toBeUndefined();
    expect(restrictedGetMessage()).toBeUndefined();
    expect(restrictedGetMessage()).toBe('Hello World');
  });

  it('will throw error when passing invalid number', () => {
    expect(() => {
      after(-1, () => {});
    }).toThrow();

    expect(() => {
      after(Number.MAX_SAFE_INTEGER + 1, () => {});
    }).toThrow();

    expect(() => {
      after(10.5, () => {});
    }).toThrow();
  });
});
