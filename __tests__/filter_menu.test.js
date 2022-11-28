import { render, screen } from "@testing-library/react"; 
import FilterMenu from "../components/filter_menu";

const filters = [
    {
        id: 1,
        brand: "Apple"
    }
]

const handleAppliedFilters = () => {}

const handleSortFilter = () => {}

const handleClearFiltersAndSort = () => {}


test('shows a button with filters label', () => {
    render(<FilterMenu brandlist={filters} handleAppliedFilters={handleAppliedFilters} handleSortFilter={handleSortFilter} handleClearFiltersAndSort={handleClearFiltersAndSort} />)
    const btn = screen.getByRole('button', {
        name: 'Filters'
    })
    expect(btn).toBeInTheDocument();
});