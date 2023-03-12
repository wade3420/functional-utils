type reduceCallbackFn<T, R> = (
  accumulator: R,
  currentValue: T,
  index: number
) => R;

const reduce = <T, R = any>(
  callback: reduceCallbackFn<T, R>,
  initialValue: R
) => {
  return function* (iterable: Array<T>) {
    let acc: R = initialValue;

    for (const [index, value] of [...iterable].entries()) {
      acc = callback(acc, value, index);
      yield acc;
    }
  };
};
export default reduce;
