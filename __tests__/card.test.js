import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../components/card';

/**
 * import { render, screen } from "@testing-library/react";
import Home from "../pages";

const filters = [
    {
        id: 1,
        brand: "Apple"
    }
]

const products = [{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "...",
    "images": ["...", "...", "..."]
}]

test("loads the home page with products", () => {
    render(<Home products={products} filters={filters} />)
    expect(screen.getByTitle('Products Next App'))
});
 */

const product = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "...",
        "images": ["abc.jpg"]
    }
]

test("whether a card component with toggle button and with product details is shown", () => {
    render(<Card products={product} />);
    const card = screen.getByRole("button", {
        name: 'Toggle grid/list view'
    })
    expect(card).toBeInTheDocument();
})

test("whether view is toggled on clicking the toggle button", () => {
    const gridView = false
    render(<Card products={product} />)

    fireEvent.click(screen.getByRole("button"));
    expect(gridView).toBeFalsy();
});