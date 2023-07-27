import AutoCompleteSearchInput from "../autocomplete-search-input/AutoCompleteSearchInput";
import { useEffect, useState } from "react";
import fetchNames from "../../utils/fetchNames";

function App() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    fetchNames().then((res) => setNames(res));
  }, []);

  return (
    <div className="app-container">
      <h2 className="search-title">Search names</h2>
      <AutoCompleteSearchInput names={names} />
    </div>
  );
}

export default App;
