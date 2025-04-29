import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it('Should Search Res List For burger text input ', async () => {
    await act(async () => render(
    <BrowserRouter>     
        <Body />
    </BrowserRouter>
));

const cardsBeforeSearch = screen.getAllByTestId("resCard");
expect(cardsBeforeSearch.length).toBe(8);

const searchBtn = screen.getByRole('button', {name: 'Search'});

const searchInput = screen.getByTestId("searchInput");

// console.log(searchBtn);

fireEvent.change(searchInput, { target: {value: "Burger" }});

fireEvent.click(searchBtn);

// expect(searchBtn).toBeInTheDocument();

// Screen should load 4 res cards.

const cardsAfterSearch = screen.getAllByTestId("resCard");

expect(cardsAfterSearch.length).toBe(1);

});

// it('Should Search Res List For burger text input ', async () => {
//     await act(async () => render(
//     <BrowserRouter>     
//         <Body />
//     </BrowserRouter>
// ));

// const cardsBeforeFilter = screen.getAllByTestId("resCard");

// expect(cardsBeforeFilter.length).toBe(8);

// const topRatedBtn = screen.getByRole("button", {
//     name: "Top Rated Restaurants",
// });

// fireEvent.click(topRatedBtn);

// const cardsAfterFilter = screen.getAllByTestId('resCard');

// expect(cardsAfterFilter.length).toBe(15);

// });