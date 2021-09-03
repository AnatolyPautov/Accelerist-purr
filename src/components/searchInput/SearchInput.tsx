import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/icons/SearchIcon';
import SettingsSearchIcon from '../../assets/icons/SettingsSearchIcon';
import { addCompanies } from '../../store/companySlice';
import { useAppDispatch } from '../../store/store';

interface SearchInputProps {
  width?: string;
  background?: string;
  searchList?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  width,
  background,
  searchList,
}) => {
  const [value, setValue] = React.useState<string>();

  const dispatch = useAppDispatch();
  return (
    <SearchContainer searchList={searchList} width={width}>
      <Input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search"
        value={value}
        background={background}
      />
      {searchList && (
        <Setting>
          <SettingsSearchIcon />
        </Setting>
      )}
      <Search
        onClick={() => dispatch(addCompanies({ page: 1, limit: 12, q: value }))}
      >
        <SearchIcon />
      </Search>
    </SearchContainer>
  );
};
type SearchContainerProps = {
  searchList?: string;
  width?: string;
};
const SearchContainer = styled.div<SearchContainerProps>`
  position: relative;
  width: 100%;
  max-width: ${({ width }) => (width ? width + 'px' : '365px')};
  flex: 1 1 auto;
  @media (max-width: 1110px) {
    display: ${({ searchList }) => (searchList ? 'block' : 'none')};
  }
`;

type InputProps = {
  background?: string;
};
const Input = styled.input<InputProps>`
  background: ${({ background }) => (background ? background : '#f3fcff')};
  border-radius: 6px;
  outline: none;
  border: none;
  height: 36px;
  width: 100%;
  padding: 9px 24px;
`;
const Search = styled.div`
  position: absolute;
  top: 6px;
  right: 20px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const Setting = styled(Search)`
  right: 52px;
`;

export default SearchInput;
