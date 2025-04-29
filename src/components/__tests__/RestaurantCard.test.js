import { render, screen } from "@testing-library/react";
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';


it('Should render Restaurant component with props Data', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText('KFC');

    expect(name).toBeInTheDocument();
});

it('Should render RestaurantCard component with promoted label', () => {
    // Homework test HOC : withPromotedLabel
});