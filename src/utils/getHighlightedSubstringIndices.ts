import { IndexPair } from "../types/types";

const getHighlightedSubstringIndices = (name: string, searchString: string) => {
  const lowerCaseName = name.toLowerCase();
  const lowerCaseSearchString = searchString.toLowerCase();
  const matches: IndexPair[] = [];

  for (let i = 0; i < name.length; i++) {
    const subString = lowerCaseName.substring(i, i + searchString.length);

    if (subString === lowerCaseSearchString && i !== i + searchString.length) {
      matches.push([i, i + searchString.length]);
    }
  }

  return matches;
};

export default getHighlightedSubstringIndices;
