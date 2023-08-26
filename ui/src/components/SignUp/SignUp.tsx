import { useNavigate } from "react-router-dom";
import {
    LoginButton,
    LoginPageContainer,
    InputField,
    Title,
    InputFieldContainer,
    FormBox
} from "./styles";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { signUp } from "state-management/actions/user/userActions";

const SignUp = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "Enter A Valid Email!")
            .required("Required"),
        password: Yup.string().min(8, "Password Minimum Length Should be 8!").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Passwords must match").required("Required"),
    });

    const handleFormSubmit = (values: typeof initialValues) => {
        dispatch(signUp(values));
        navigate("/", { replace: true });
    };

    return (
        <LoginPageContainer>
            <Title>Sign Up</Title>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
            >
                {(formikProps) => (
                    <FormBox>
                        <Form>
                            <InputFieldContainer>
                                <Field
                                    as={InputField}
                                    label="name"
                                    name="name"
                                    type="search"
                                    error={!!(formikProps.touched.name && formikProps.errors.name)}
                                    helperText={formikProps.touched.name && formikProps.errors.name}
                                />
                                <Field
                                    as={InputField}
                                    label="email"
                                    name="email"
                                    type="search"
                                    error={!!(formikProps.touched.email && formikProps.errors.email)}
                                    helperText={formikProps.touched.email && formikProps.errors.email}
                                />
                                <Field
                                    as={InputField}
                                    label="Password"
                                    name="password"
                                    type="password"
                                    error={!!(formikProps.touched.password && formikProps.errors.password)}
                                    helperText={formikProps.touched.password && formikProps.errors.password}
                                />
                                <Field
                                    as={InputField}
                                    label="confirm password"
                                    name="confirmPassword"
                                    type="password"
                                    error={!!(formikProps.touched.confirmPassword && formikProps.errors.confirmPassword)}
                                    helperText={formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}
                                />
                            </InputFieldContainer>
                            <LoginButton
                                disabled={!formikProps.isValid}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Sign Up
                            </LoginButton>
                            <LoginButton variant="outlined" onClick={() => navigate("/login", { replace: true })}>
                                Log In
                            </LoginButton>
                        </Form>
                    </FormBox>
                )}
            </Formik>
        </LoginPageContainer >
    );
};

export default SignUp;
