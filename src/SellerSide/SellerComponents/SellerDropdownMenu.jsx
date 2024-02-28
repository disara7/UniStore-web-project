import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { red } from '@mui/material/colors';
import './SellerDropdownMenu.css'



export default function SellerDropdownMenu({options,isDisabled}) {
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className='test'>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        disabled={isDisabled}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField
            {...params}
            label="Select"
            className="autocomplete-input"
            InputLabelProps={{
              className: 'autocomplete-label',
            }}
          />}
      />
    </div>
  );
}
