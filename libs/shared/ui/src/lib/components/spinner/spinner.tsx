import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import type { SpinnerProps } from './internal';

export const Spinner: FC<SpinnerProps> = ({ show }) => {
  if (!show) return null;
  return (
    <CircularProgress
      sx={{
        display: show ? 'block' : 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
