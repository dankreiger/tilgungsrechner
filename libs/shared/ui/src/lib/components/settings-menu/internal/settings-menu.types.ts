import type { AvatarProps, SxProps } from '@mui/material';

export interface SettingsMenuItem {
  text: string;
  onClick: () => void;
}

export interface SettingsMenuProps {
  avatarProps: AvatarProps;
  items: SettingsMenuItem[];
  sx?: SxProps;
  tooltipTitle?: string;
}
