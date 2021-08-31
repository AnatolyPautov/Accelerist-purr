import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import search from '../../assets/icons/search-header.svg';

interface SearchInputProps {
  width?: string;
  background?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({ width, background }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search"
        width={width}
        background={background}
      />
      <SearchIcon>
        <ReactSVG src={search} />
      </SearchIcon>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
  /* visibility: hidden; */
`;

type InputProps = {
  width?: string;
  background?: string;
};
const Input = styled.input<InputProps>`
  background: ${({ background }) => (background ? background : '#f3fcff')};
  border-radius: 6px;
  outline: none;
  border: none;
  height: 36px;
  width: ${({ width }) => (width ? width + 'px' : '365px')};
  padding: 9px 24px;
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default SearchInput;
