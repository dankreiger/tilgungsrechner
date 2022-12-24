import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FC, MouseEvent, useState } from 'react';
import { SettingsMenuProps } from './internal';
export type { SettingsMenuItem } from './internal';

export const SettingsMenu: FC<SettingsMenuProps> = ({
  activeItem: act,
  avatarProps,
  items,
  sx,
  tooltipTitle = 'Open settings',
}) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [activeItem, setActiveItem] = useState(act);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0, ...sx }}>
      <Tooltip title={tooltipTitle}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar {...avatarProps} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        MenuListProps={{ sx: { py: '0' } }}
      >
        {items.map(({ onClick, text }) => (
          <MenuItem
            key={text}
            sx={[
              (theme) => ({
                bgcolor:
                  activeItem === text ? theme.palette.primary.dark : 'inherit',
                '&:hover': {
                  bgcolor: theme.palette.primary.light,
                },
                '&:active': {
                  bgcolor: theme.palette.primary.light,
                },
              }),
            ]}
            onClick={() => {
              setActiveItem(text);
              handleCloseUserMenu();
              onClick();
            }}
          >
            <Typography textAlign="center">{text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
