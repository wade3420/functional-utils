export interface callbackFn<T, Return = void> {
 (value: T, index: number, array: T[]): Return;
}

export interface reduceCallbackFn<T, Return = any> {
 (accumulator: T | Return, value: T, index: number):
  | T
  | Return;
}
