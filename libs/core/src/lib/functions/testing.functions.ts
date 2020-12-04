/* eslint-disable @typescript-eslint/ban-types */

export type MockProxy<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer B
    ? jest.Mock<B, A> & T[K]
    : T[K];
};

export type Mocked<T extends object> = MockProxy<T> & T;

export function mock<T extends object>(overrides: Partial<T> = {}): Mocked<T> {
  return <Mocked<T>>new Proxy(overrides, {
    get(target, prop: keyof T): T[keyof T] {
      if (target[prop] === undefined) {
        target[prop] = <T[keyof T]>(<unknown>jest.fn());
      }

      return <T[keyof T]>target[prop];
    },
  });
}
