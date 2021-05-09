import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term,
      },
    });
    setResults(response.data.query.search);
  };

  const renderedResults = results.map((result) => {
    return (
      <li key={result.pageid}>
        <a href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
          <h3>{result.title}</h3>
        </a>
        <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
      </li>
    );
  });

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Search Wiki</label>
        <input type="text" value={term} onChange={handleTermChange} />
      </form>
      <ul>{renderedResults}</ul>
    </div>
  );
};

export default Search;
