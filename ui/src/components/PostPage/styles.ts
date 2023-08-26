import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';

export const PostPageContainer = styled.div`
  padding-top: 130px;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;

export const Title = styled.h1`
  color: white;
`;

export const Body = styled(Typography)`
  color: white;
`;

export const ImageContainer = styled.div`
  padding: 20px;
  flex: 1;
  text-align: center;
`;

export const BodyContainer = styled(Grid)`
  flex: 1;
  padding: 20px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
`;