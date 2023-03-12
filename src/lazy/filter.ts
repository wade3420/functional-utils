const filter = (fn: any) => {
  return function* (gen: any) {
    for (let value of gen) {
      if (fn(value)) {
        yield value;
      }
    }
  };
};

export default filter;
