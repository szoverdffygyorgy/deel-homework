const filterNames = (
  names: string[],
  query: string,
  responseTime = 50
): Promise<string[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(names.filter((name) => name.includes(query)));
    }, responseTime);
  });

export default filterNames;
