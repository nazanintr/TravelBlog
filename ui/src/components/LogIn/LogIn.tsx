import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginButton,
  LoginPageContainer,
  FormContainer,
  InputField,
  Title,
  InputFieldContainer
} from "./styles"
import { useDispatch } from "react-redux";
import { login } from "state-management/actions/user/userActions";



const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ email, password }));
    navigate("/", { replace: true });
  };

  return (
    <LoginPageContainer>
      <Title>Log In</Title>
      <FormContainer onSubmit={handleFormSubmit}>
        <InputFieldContainer>
          <InputField
            id="outlined-search"
            label="email"
            type="search"
            value={email}
            onChange={handleEmailChange}
          />
          <InputField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputFieldContainer>
        <LoginButton
          disabled={!email || !password}
          variant="contained"
          color="primary"
          type="submit">
          Log In
        </LoginButton>
        <LoginButton variant="outlined" onClick={() => navigate("/signup", { replace: true })}>Sign Up</LoginButton>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LogIn;
