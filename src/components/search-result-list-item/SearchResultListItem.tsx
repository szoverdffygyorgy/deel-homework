import { ReactNode, useMemo } from "react";
import "./SearchResultListItem.css";
import { IndexPair } from "../../types/types";
import getHighlightedSubstringIndices from "../../utils/getHighlightedSubstringIndices";

type Props = {
  name: string;
  searchString: string;
  onClick: (name: string) => () => void;
};

const SearchResultListItem = ({ name, searchString, onClick }: Props) => {
  const highlightedIndices = useMemo<IndexPair[]>(
    () => getHighlightedSubstringIndices(name, searchString),
    [name, searchString]
  );

  const highlightedNameParts = useMemo<ReactNode[]>(() => {
    const nameWithHighlights: ReactNode[] = [];
    let prevHighlightedIndex = 0;

    if (!highlightedIndices.length) {
      return [name];
    }

    for (let i = 0; i < highlightedIndices.length; i++) {
      const [from, to] = highlightedIndices[i];

      nameWithHighlights.push(name.substring(prevHighlightedIndex, from));
      nameWithHighlights.push(<mark key={i}>{name.substring(from, to)}</mark>);

      if (to !== name.length && i === highlightedIndices.length - 1) {
        nameWithHighlights.push(name.substring(to, name.length));
      }

      prevHighlightedIndex = to;
    }

    return nameWithHighlights;
  }, [highlightedIndices, name]);

  return (
    <li className="search-result-list-item" onClick={onClick(name)}>
      {highlightedNameParts}
    </li>
  );
};

export default SearchResultListItem;
