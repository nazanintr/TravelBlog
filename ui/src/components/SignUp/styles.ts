import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import { Form, Formik, Field } from "formik";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(209, 209, 239, 1);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px 50px 70px;
  width: 30%;
  @media (max-width: 768px) {
    width:60%;
  }
`;

export const InputFieldContainer = styled.div`
  width: 100%;
  &&{
    margin: 12px auto;
  }
`;

export const InputField = styled(TextField)`
  width: 100%;
  &&{
    margin: 5px auto;
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  &&{
    margin: 3px auto;
  }
`;

export const ForgotButton = styled(LoginButton)`
  &&:hover {
    background-color: transparent;
  };
  && {
    font-size: 10px;
    span {
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export const Title = styled.h1`
    font-weight: 500;
    color: white;
`;

