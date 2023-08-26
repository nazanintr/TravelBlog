import { render, screen } from "@testing-library/react";
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from "./App";
import { Provider } from 'react-redux';
import { store } from "state-management/store";
import { useState } from "react";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

const setShowHeader = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(),
  }));

describe('App component', () => {
    beforeEach(() => {
        (useState as jest.Mock).mockReturnValue([false, setShowHeader]);

    (useLocation as jest.Mock).mockImplementation(() => ({
      pathname: "/"
    })); 
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
    });

    test('render App', () => {
        expect(screen.queryAllByText(/Sign Up/i).length).toBeGreaterThan(0);
    });

    test('render App without Header when showHeader is true', () => {
        expect(screen.queryByTestId("header")).not.toBeInTheDocument();
    });
});
