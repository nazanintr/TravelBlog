import styled from 'styled-components';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

const palette = {
    primaryColor: '#d1d1ef',
};

export const PostContainer = styled.div`
    &:hover {
    img {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`

export const NoPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const NoPostsText = styled.p`
  font-size: 24px;
  color: #ffffff;
`;

export const PostCard = styled(Card)`
    &&{
        background-color: ${palette.primaryColor}
    };
`;

export const Description = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 300px;
  white-space: nowrap;
`;