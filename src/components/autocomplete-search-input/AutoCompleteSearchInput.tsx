import { ChangeEvent, useCallback, useEffect, useState } from "react";
import SearchResults from "../search-results/SearchResults";
import "./AutoCompleteSearchInput.css";
import filterNames from "../../utils/filterNames";

type Props = {
  names: string[];
};

const AutoCompleteSearchInput = ({ names }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [areResultsVisible, setResultsVisibility] = useState<boolean>(false);

  const onInputValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      setResultsVisibility(true);
    },
    []
  );

  const onListItemClick = useCallback(
    (name: string) => () => {
      setInputValue(name);
      setResultsVisibility(false);
    },
    []
  );

  useEffect(() => {
    filterNames(names, inputValue).then((results) => setSearchResults(results));
  }, [inputValue, names]);

  return (
    <div className="input-container">
      <input
        className="search-input"
        value={inputValue}
        onChange={onInputValueChange}
      />
      {areResultsVisible && (
        <div className="search-results--wrapper">
          <SearchResults
            searchString={inputValue}
            results={searchResults}
            onListItemClick={onListItemClick}
          />
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearchInput;
