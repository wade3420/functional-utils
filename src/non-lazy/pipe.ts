import reduce from './reduce';

const pipe =
 <T = any>(...functions: Function[]) =>
 (initialValue: T) => {
  return reduce<Function>((acc, func) => func(acc), initialValue)(functions);
 };

export default pipe;
