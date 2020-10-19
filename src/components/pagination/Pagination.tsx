import React from "react";
import "./pagination.css";

type Props = {
    totalPages?: number,
    currentPage?: number,
    onPageChangeHandler(pageNumber: number): void
}

export function Pagination({totalPages, currentPage, onPageChangeHandler}: Props) {

    if (!totalPages || totalPages <= 0) {
        return null;
    }

    const onPageChange = (pageNumber: number) => {

        if (pageNumber !== currentPage) {
            onPageChangeHandler(pageNumber);
        }
    };

    return (
        <div className="pagination-container">
            {Array.from(Array(totalPages - 1).keys()).map((page, index) => (
                <div onClick={() => onPageChange(page + 1)}
                     className={`page ${currentPage === page + 1 ? 'current-page' : ''}`}>
                    {page + 1}
                </div>
            ))
            }
        </div>
    )
}
