import { useRouter } from "next/router";
import { useState } from "react";

export default function Pagination() {

    const router = useRouter();

    const [page, setPage] = useState(0);

    const pageLimit = 10;
    const pagesCount = Math.ceil(100 / pageLimit);
    

    const handlePrevButtonClick = () => {
        setPage(page - 1);
        const skip = pageLimit * (page - 1)
        router.push(`/?limit=${pageLimit}&skip=${skip}`)
    }

    const handleNextButtonClick = () => {
        const nextPage = page + 1
        setPage(nextPage);
        const skip = pageLimit * nextPage
        router.push(`/?limit=${pageLimit}&skip=${skip}`)
    }

    const handlePageButtonClick = (page) => {
        setPage(page);
        const skip = pageLimit * page
        router.push(`/?limit=${pageLimit}&skip=${skip}`)
    }

    return (
        <nav className="flex w-full justify-end">
            <button
                className={`w-8 h-8 hover:bg-white disabled:cursor-not-allowed`}
                onClick={handlePrevButtonClick}
                id="prev-button"
                aria-label="Previous page"
                title="Previous page"
                disabled={page === 0}
            >
                &lt;
            </button>

            <div id="pagination-numbers">
                {
                    Array.from({ length: pagesCount }).map((i, index) => (
                        <button 
                            className={`w-8 h-8 hover:bg-white hover:text-black ${page === index  ? 'bg-blue-900 text-white' : ''}`}
                            key={index + 1}
                            onClick={() => handlePageButtonClick(index)}
                        >
                                {index + 1}
                        </button>
                    ))
                }
            </div>

            <button
                className="pagination-button w-8 h-8 hover:bg-white disabled:cursor-not-allowed"
                onClick={handleNextButtonClick}
                id="next-button"
                aria-label="Next page"
                title="Next page"
                disabled={page === pagesCount}
            >
                &gt;
            </button>
        </nav>
    )
}