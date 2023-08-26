import styled from 'styled-components';
import { Container } from '@mui/material';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
  gap: 20px;
  padding-bottom: 30px;
`;

export const HomeContainer = styled(Container)`
    padding-top: 130px;
    width: 100%;
`