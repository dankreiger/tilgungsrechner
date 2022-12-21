import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import type { FC } from 'react';
import { GridPanelSt, GridPanelsThreeProps } from './internal';

export const GridPanelsThree: FC<GridPanelsThreeProps> = ({
  one,
  two,
  three,
}) => (
  <Container
    sx={{
      p: {
        xs: 0,
        sm: 2,
        md: 4,
        lg: 8,
      },
    }}
  >
    <Grid>
      {/* One */}
      <Grid xs={12} item {...one.gridCols}>
        <GridPanelSt sx={one.sx}>{one.content}</GridPanelSt>
      </Grid>
      {/* Two */}
      <Grid xs={12} item {...two.gridCols}>
        <GridPanelSt sx={two.sx}>{two.content}</GridPanelSt>
      </Grid>
      {/* Three */}
      <Grid xs={12} item {...three.gridCols}>
        <GridPanelSt sx={three.sx}>{three.content}</GridPanelSt>
      </Grid>
    </Grid>
  </Container>
);
