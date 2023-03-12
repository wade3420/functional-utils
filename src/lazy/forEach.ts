const forEach = <T>(callback: (item: T) => void) => {
 return function* (gen: Iterable<T>) {
  for (const item of gen) {
   callback(item);
   yield item;
  }
 };
};

export default forEach;
