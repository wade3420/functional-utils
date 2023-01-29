import { callbackFn } from './types';

const forEach =
 <T>(callback: callbackFn<T>) =>
 (array: T[]) => {
  let i = 0;

  for (const item of array) {
   callback(item, i, [...array]);
   i++;
  }

  return array;
 };

export default forEach;
