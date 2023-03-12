const map = <T>(callback: (item: T) => any) => {
 return function* (gen: Iterable<T>) {
  for (let value of gen) {
   yield callback(value);
  }
 };
};

export default map;
