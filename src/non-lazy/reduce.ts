import forEach from './forEach';
import { reduceCallbackFn } from './types';

const reduce =
  <T, R = any>(callback: reduceCallbackFn<T, R>, initialValue: R) =>
  (array: T[]) => {
    let acc = initialValue ?? array[0];

    forEach<T>((item, idx) => {
      if (idx === 0 && initialValue === undefined) return;

      callback(acc, item, idx);
    })(array);
    return acc;
  };

export default reduce;
