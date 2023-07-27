const filterNames = (
  names: string[],
  searchString: string,
  responseTime = 50
): Promise<string[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        names.filter((name) =>
          name.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }, responseTime);
  });

export default filterNames;
