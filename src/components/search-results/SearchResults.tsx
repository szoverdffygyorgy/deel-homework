import SearchResultListItem from "../search-result-list-item/SearchResultListItem";
import "./SearchResults.css";

type Props = {
  searchString: string;
  results: string[];
  onListItemClick: (name: string) => () => void;
};

const SearchResults = ({ searchString, results, onListItemClick }: Props) => {
  return (
    <ul className="search-results">
      {results.length > 0 &&
        results.map((name) => (
          <SearchResultListItem
            name={name}
            searchString={searchString}
            onClick={onListItemClick}
            key={name}
          />
        ))}
      {results.length === 0 && (
        <li className="no-results-list-item">No results</li>
      )}
    </ul>
  );
};

export default SearchResults;
