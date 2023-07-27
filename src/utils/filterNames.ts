import { DEFAULT_MOCK_SEARCH_TIME } from "../constants/constants";

const filterNames = (
  names: string[],
  searchString: string,
  responseTime = DEFAULT_MOCK_SEARCH_TIME
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
