import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

export const SelectField = (props: any) => {
  return (
    <StyledSelect
      options={props.options}
      classNamePrefix="Select"
      name={props.name}
      onChange={props.onChange}
    />
  );
};

const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 100%;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    cursor: pointer;
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__control:hover {
    border: 1px solid #e8e8e8;
  }
  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
  }
  .Select__menu {
    margin: 0;
    font-size: 16px;
    line-height: 155%;
    color: #122434;
    z-index: 2;
  }
`;
