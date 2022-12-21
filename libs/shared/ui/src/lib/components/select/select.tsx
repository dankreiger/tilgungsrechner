import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import type { FC } from 'react';
import type { SelectProps } from './internal';

export const Select: FC<SelectProps> = ({ menuItems, ...props }) => (
  <FormControl fullWidth>
    {props.label && <InputLabel id={props.labelId}>{props.label}</InputLabel>}
    <MuiSelect {...props} labelId={props.labelId}>
      {menuItems.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);
