import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

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

    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Search Wiki</label>
        <input type="text" value={term} onChange={handleTermChange} />
      </form>
      <ul>
        <li>
          <h3>React</h3>
          <p>React is a JavaScript library for building user interfaces.</p>
        </li>
      </ul>
    </div>
  );
};

export default Search;
