import { useEffect, useState } from "react"

export default function FilterMenu({ brandlist, handleAppliedFilters, handleSortFilter, handleClearFiltersAndSort }) {

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [filterItemChecked, setFilterItemChecked] = useState(new Array(brandlist.length).fill(false));
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        setFilterItemChecked(new Array(brandlist.length).fill(false));
        setSelectedFilters([]);
    }, [brandlist])

    const handleFilterMenuButtonClick = () => setIsFiltersOpen(!isFiltersOpen)

    const handleFiltersCheckboxClick = (event, item, position) => {
        if (event.target.checked) {
            const selectedBrands = [...selectedFilters, item];
            setSelectedFilters(selectedBrands);
            handleAppliedFilters(selectedBrands);
        }
        else {
            const selectedBrands = selectedFilters.filter(brand => brand.id !== item.id)
            setSelectedFilters(selectedBrands);
            handleAppliedFilters(selectedBrands);
        }
        const filterItemsCheckedUpdate = filterItemChecked.map((item, index) => index === position ? !item : item)
        setFilterItemChecked(filterItemsCheckedUpdate);
    }

    const handleSortButtonClick = () => {
        handleSortFilter();
    }

    const handleClearButtonClick = () => {
        setFilterItemChecked(new Array(brandlist.length).fill(false));
        setSelectedFilters([]);
        handleClearFiltersAndSort();
    }

    return (
        <div className="flex flex-col">
            <div className="flex mb-2">
                <button onClick={handleFilterMenuButtonClick} className="px-4 py-1 bg-blue-500 text-white rounded-lg md:py-2">
                    Filters
                </button>
                <button onClick={handleSortButtonClick} className="px-4 py-1 mx-4 bg-blue-500 text-white rounded-lg md:py-2">
                    Sort by Price (Low to high)
                </button>
                <button onClick={handleClearButtonClick} className="px-4 py-1 bg-blue-500 text-white rounded-lg md:py-2">
                    Clear Filters and Sort
                </button>
            </div>
            <div className={`${!isFiltersOpen ? `hidden` : `block`} bg-white rounded p-4`}>
                <ul className="flex flex-col md:flex-row md:justify-between">
                    {
                        brandlist.map((item, index) => (
                            <li key={item.id} className="max-w-1/2 box-border">
                                <label htmlFor={item.brand}>
                                    <input
                                        className="mr-1"
                                        name={item.brand}
                                        id={item.brand}
                                        type="checkbox"
                                        onChange={(event) => handleFiltersCheckboxClick(event, item, index)}
                                        checked={filterItemChecked[index]}
                                    />{item.brand}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}