import forEach from './forEach';
import { callbackFn } from './types';

const map =
 <T>(callback: callbackFn<T>) =>
 (array: T[]) => {
  const result: any[] = [];
  forEach<T>((item, idx, copy) => result.push(callback(item, idx, copy)))(
   array
  );
  return result;
 };

export default map;
