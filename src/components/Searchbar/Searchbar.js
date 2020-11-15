import React, { useState, useEffect } from "react";
import ResultField from "./ResultField";
import CloseButton from "./CloseButton";
import atractions from "./dummyData"; // podmień na dumm data z projektu kiedy powstanie
import "./searchbar.css";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [atractionList, setatractionList] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setatractionList(atractions);
  };

  const clearInput = (e) => {
    setSearchInput("");
  };

  return (
    <>
      <div className="searchbar">
        {/* input field  */}
        <input
          className="searchbar__input"
          value={searchInput}
          placeholder={"Wyszukaj po nazwie miejsca.."}
          onChange={handleChange}
        />
        {/* result field */}
        {searchInput.length > 0 ? (
          <>
            <ResultField
              atractionList={atractionList}
              searchInput={searchInput}
            />
            {/* close button  */}
            <CloseButton clearInput={clearInput} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Searchbar;
