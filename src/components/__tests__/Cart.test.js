import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
}));

it("Should load Restaurant Menu Component", async () => {
    await act(async () => render(
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
    </Provider>));

    const accordianHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    const addBtns = screen.getAllByRole("button", {name: "ADD"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
    console.log(addBtns.length);
});