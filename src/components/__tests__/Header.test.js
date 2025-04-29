import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from '../../utils/appStore';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it('Should load Header Component with a login button', () => {
    render(
        <BrowserRouter>
         <Provider store={appStore}>
        <Header />
    </Provider>
        </BrowserRouter>
    );
//    const loginButton = screen.getByRole('button');

  const loginButton = screen.getByRole('button', {name: 'login'});

   expect(loginButton).toBeInTheDocument();

});

it('Should load Header Component with a Cart items 0', () => {
    render(
        <BrowserRouter>
         <Provider store={appStore}>
        <Header />
    </Provider>
        </BrowserRouter>
    );

  // const cartItems = screen.getByText('Cart');

  // we can use regex also to match the text.
  const cartItems = screen.getByText(/Cart/);

   // expect(loginButton).toBeInTheDocument();

   expect(cartItems).toBeInTheDocument();
});

it('Should load Header Component with a Cart item', () => {
    render(
        <BrowserRouter>
         <Provider store={appStore}>
        <Header />
    </Provider>
        </BrowserRouter>
    );

  // const cartItems = screen.getByText('Cart');

  // we can use regex also to match the text.
  const cartItems = screen.getByText(/Cart/);

   // expect(loginButton).toBeInTheDocument();

   expect(cartItems).toBeInTheDocument();
});

it('Should change Login Button to Logout on Click', () => {
    render(
    <BrowserRouter>
         <Provider store={appStore}>
           <Header />
        </Provider>
    </BrowserRouter>
    );

  const loginButton = screen.getByRole('button', { name: 'login'});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', {name: 'logout'});

   expect(logoutButton).toBeInTheDocument();

});