import forEach from './forEach';
import { callbackFn } from './types';

const filter =
 <T>(callback: callbackFn<T, boolean>) =>
 (array: T[]) => {
  const result: T[] = [];

  forEach<T>((item, idx, copy) => {
   if (callback(item, idx, copy)) {
    result.push(item);
   }
  })(array);

  return result;
 };

export default filter;
