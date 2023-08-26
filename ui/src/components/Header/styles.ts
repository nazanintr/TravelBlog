import { Button } from '@mui/material';
import { Avatar, InputBase, Typography, alpha } from '@mui/material';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1;
  background-color: rgba(209, 209, 239, 1);
`;

export const Title = styled(Typography)`
    cursor: default;
`

export const Profile = styled(Avatar)`
    cursor: pointer;
    margin: auto 3px auto 10px;
`

export const LogOutButton = styled(Button)`
    cursor: pointer;
    margin-left: auto;
    && {
      color: rgba(98, 98, 114, 1);
      font-weight: bold;
    }
`