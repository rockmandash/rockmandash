import forOwn from '../../functions/object/forOwn';

describe('forOwn', () => {
  it('iterates over own and inherited properties of an object.', () => {
    function Student(this: { name: string; age: number }) {
      this.name = 'Amy';
      this.age = 18;
    }

    Student.prototype.homeworks = ['math', 'science'];

    let student = new (Student as any)();

    let properties: any = [];

    forOwn(student, (value, key) => {
      properties.push([key, value]);
    });

    expect(properties).toEqual([['name', 'Amy'], ['age', 18]]);
  });
  it('should throw error when passing array.', () => {
    expect(() => {
      forOwn(['A', 'B', 'C'], () => {});
    }).toThrow();
  });
});
