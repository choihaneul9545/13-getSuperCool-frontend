import React from "react";
import styled from "styled-components";

function SearchBox({ handleChange, searchInput, handleDefaultCategory }) {
  return (
    <Container>
      <SearchText
        className="search"
        type="search"
        placeholder="SEARCH..."
        name={searchInput}
        onChange={handleChange}
        onMouseDown={handleDefaultCategory}
        value={searchInput}
      />
      <SearchBtn>
        <i class="fas fa-search"></i>
      </SearchBtn>
    </Container>
  );
}

export default SearchBox;

const Container = styled.div`
  width: 100%;
  height: 6vh;
  border-bottom: black 1px solid;
`;

const SearchText = styled.input`
  width: 80%;
  margin-left: 5px;
  background-color: transparent;
  font-size: 20px;
  line-height: 6vh;
  font-weight: 500;
  text-transform: lowercase;
  &::placeholder {
    text-transform: uppercase;
  }
`;

const SearchBtn = styled.button`
  margin-left: 10px;
  font-size: 20px;
  line-height: 6vh;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
`;
