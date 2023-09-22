import {useState} from "react";
import {PageContainer, SearchContainer, SearchInput} from "./SearchBar.styles.js"
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    
<PageContainer>
    <SearchContainer>
      <SearchInput
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </SearchContainer>
</PageContainer>
  );
}


