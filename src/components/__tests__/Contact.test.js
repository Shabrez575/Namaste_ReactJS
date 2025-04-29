import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// test('Should load contact us component', () => {
//     render(<Contact/>);

//     const heading = screen.getByRole('heading');

//     //Assertion
//     expect(heading).toBeInTheDocument();

// });

// test('Should load 2 input boxes on the contact component', () => {
//     render(<Contact />);

//     // Querying
//     const inputBoxes = screen.getAllByRole('textbox'); // it return JSX element i.e a object.

//     // console.log(inputBoxes[0]);

//    // ASSERTION

//    expect(inputBoxes.length).not.toBe(3);
// });

//  We can put all the cases in describe block:

describe('Contact Us Page Test Case', () => {

    beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });

    afterAll(() => {
        console.log("After All");
    });

    test('Should load contact us component', () => {
        render(<Contact/>);
    
        const heading = screen.getByRole('heading');
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    // test('Should load 2 input boxes on the contact component', () => {
    //     render(<Contact />);
    
    //     // Querying
    //     const inputBoxes = screen.getAllByRole('textbox'); // it return JSX element i.e a object.
    
    //     // console.log(inputBoxes[0]);
    
    //    // ASSERTION
    
    //    expect(inputBoxes.length).not.toBe(3);
    // });
});