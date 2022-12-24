import type { AvatarProps, SxProps } from '@mui/material';

export interface SettingsMenuItem {
  text: string;
  onClick: () => void;
}

export interface SettingsMenuProps {
  activeItem: string;
  avatarProps: AvatarProps;
  items: SettingsMenuItem[];
  sx?: SxProps;
  tooltipTitle?: string;
}
