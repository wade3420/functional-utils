function take<T>(limit: number) {
 return function* (gen: Iterable<T>) {
  let count = 0;
  for (let value of gen) {
   if (count === limit) {
    break;
   }
   yield value;
   count++;
  }
 };
}
