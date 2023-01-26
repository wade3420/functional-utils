interface callbackFn<T> {
 (value: T, index: number, array: T[]): void;
}

const forEach =
 <T>(callback: callbackFn<T>) =>
 (array: T[]) => {
  for (let i = 0; i < array.length; i++) {
   callback(array[i], i, [...array]);
  }
  return array;
 };

export default forEach;
