import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const GridPanelSt = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  min-height: 240px;
`;
