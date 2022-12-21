import type { RegularBreakpoints } from '@mui/material/Grid';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { ReactNode } from 'react';

type GridPanel = {
  gridCols?: RegularBreakpoints;
  sx?: SxProps;
  content: ReactNode;
};

export type GridPanelsThreeProps = {
  one: GridPanel;
  two: GridPanel;
  three: GridPanel;
};
