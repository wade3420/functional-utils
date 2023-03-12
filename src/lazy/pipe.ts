import reduce from './reduce';

type Pipe = {
  <T, R>(...fns: Array<(arg: T) => R>): (arg: T) => Generator<T, void, unknown>;
};
const pipe: Pipe =
  (...fns) =>
  (arg) =>
    reduce((acc, fn: any) => fn(acc), arg)(fns);

export default pipe;
