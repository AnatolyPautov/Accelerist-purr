import React from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { Slider, withStyles } from '@material-ui/core';

export interface RangeSlider extends FieldRenderProps<string> {}

const RangeSlider: React.FC<RangeSlider> = (props) => {
  const isAge = props.input.name;
  const [value, setValue] = React.useState<number[]>([
    isAge === 'age' ? 20 : 55000000,
    isAge === 'age' ? 40 : 200000000,
  ]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    if (isAge === 'age') {
      props.form.mutators.setMinAge(value[0]);
      props.form.mutators.setMaxAge(value[1]);
    } else {
      props.form.mutators.setMinRevenue(value[0]);
      props.form.mutators.setMaxRevenue(value[1]);
    }
  };
  function valueLabelFormat(value: number) {
    return Math.abs(Number(value)) >= 1.0e9
      ? '$ ' + Math.abs(Number(value)) / 1.0e9 + 'B'
      : // Six Zeroes for Millions
      Math.abs(Number(value)) >= 1.0e6
      ? '$ ' + Math.abs(Number(value)) / 1.0e6 + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(value)) >= 1.0e3
      ? '$ ' + Math.abs(Number(value)) / 1.0e3 + 'K'
      : Math.abs(Number(value));
  }
  return (
    <>
      <IOSSlider
        {...props}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat}
        min={isAge === 'age' ? 18 : 0}
        step={isAge === 'age' ? 1 : 50000}
        max={isAge === 'age' ? 80 : 600000000}
      />
    </>
  );
};

const IOSSlider = withStyles({
  root: {
    color: '#2BAEE0',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 32,
    width: 68,
    backgroundColor: '#fff',
    borderColor: '#CAF0FF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: -14,
    marginLeft: -14,
    zIndex: 1,
    '&:hover': {
      background: '#FBFEFF',
      boxShadow: 'none',
    },
    '&:focus, &$active': {
      background: '#EDFAFF',
      boxShadow: 'none',
    },
  },
  active: {},
  valueLabel: {
    color: 'black',
    whiteSpace: 'nowrap',
    left: 'calc(50% - 15px)',
    top: 'calc(50% - 5px)',
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#E8E8E8',
  },
})(Slider);

export default RangeSlider;
