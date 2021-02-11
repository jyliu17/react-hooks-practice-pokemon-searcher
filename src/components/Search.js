import React from "react";



function Search({onSearch, onSetSearch}) {


  function handleChange(event){
    onSetSearch(event.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={onSearch} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
} 

export default Search;
