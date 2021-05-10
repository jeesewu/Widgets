import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleInputTermChange = (event) => {
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
      <div key={result.pageid} className="item">
        <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
          <h3>{result.title}</h3>
        </a>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Search Wiki</label>
          <input
            value={term}
            onChange={handleInputTermChange}
            className="input"
          />
        </div>
      </form>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
