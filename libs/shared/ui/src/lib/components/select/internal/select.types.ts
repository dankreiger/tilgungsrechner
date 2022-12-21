import { SelectProps as MuiSelectProps } from '@mui/material/Select';

export interface SelectMenuItem {
  readonly value: string | number;
  readonly label: string | number;
}

export interface SelectProps extends MuiSelectProps {
  readonly menuItems: SelectMenuItem[];
}
