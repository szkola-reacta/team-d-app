import React, { useState, useEffect } from "react";
import ResultField from "./ResultField";
import InputField from "./InputField";
import ClearInput from "./ClearInput";
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
        <InputField searchInput={searchInput} handleChange={handleChange} />
        {/* result field */}
        {searchInput.length > 0 ? (
          <>
            <ResultField
              atractionList={atractionList}
              searchInput={searchInput}
            />
            {/* close button  */}
            <ClearInput clearInput={clearInput} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Searchbar;
