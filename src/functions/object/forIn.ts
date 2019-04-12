import invariant from '../../.internal/invariant';

/**
 * Iterates over own and inherited properties of an object.
 *
 * @example
 *
 * function Student(this: { name: string; age: number }) {
 *   this.name = 'Amy';
 *   this.age = 18;
 * }
 *
 * Student.prototype.homeworks = ['math', 'science'];
 *
 * let student = new (Student as any)();
 *
 * forIn(student, (value, key) => {
 *   console.log([key, value])
 * });
 * // => ['name', 'Amy']
 * // => ['age', 18]
 * // => ['homeworks', ['math', 'science']]
 *
 */

function forIn<T extends object>(
  obj: T,
  callback: (
    value: T[Extract<keyof T, string>],
    key: Extract<keyof T, string>
  ) => void
): void {
  invariant(!Array.isArray(obj), `Please use forEach for Array: ${obj}.`);

  for (let key in obj) {
    callback(obj[key], key);
  }
}

export default forIn;
