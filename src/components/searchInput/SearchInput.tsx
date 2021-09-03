import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/icons/SearchIcon';
import SettingsSearchIcon from '../../assets/icons/SettingsSearchIcon';
import { addCompanies } from '../../store/companySlice';
import { useAppDispatch } from '../../store/store';

interface SearchInputProps {
  width?: string;
  background?: string;
  setting?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  width,
  background,
  setting,
}) => {
  const [value, setValue] = React.useState<string>();

  const dispatch = useAppDispatch();
  return (
    <SearchContainer>
      <Input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search"
        value={value}
        width={width}
        background={background}
      />
      {setting && (
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
