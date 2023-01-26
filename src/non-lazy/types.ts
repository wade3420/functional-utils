export interface callbackFn<T, Return = void> {
 (value: T, index: number, array: T[]): Return;
}

export interface reduceCallbackFn<T, Return = any> {
 (accumulator: T | NonNullable<Return>, value: T, index: number, array: T[]):
  | T
  | NonNullable<Return>;
}
