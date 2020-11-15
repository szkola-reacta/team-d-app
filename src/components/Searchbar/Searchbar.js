import React, { useState, useEffect } from "react";
import ResultField from "./ResultField";
import InputField from "./InputField";
import ClearInput from "./ClearInput";
import attractions from "./dummyData"; // podmień na dumm data z projektu kiedy powstanie
import "./searchbar.css";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [atractionList, setatractionList] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setatractionList(attractions);
  };

  const clearInput = (e) => {
    setSearchInput("");
  };

  return (
    <div className="searchbar">
      <InputField searchInput={searchInput} handleChange={handleChange} />

      {searchInput.length !== 0 && (
        <>
          <ResultField
            atractionList={atractionList}
            searchInput={searchInput}
          />

          <ClearInput clearInput={clearInput} />
        </>
      )}
    </div>
  );
};

export default Searchbar;
