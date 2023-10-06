import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationGenerator = ({
	numberOfPages,
	currentPage,
	setCurrentPage,
}) => {
	let pageNumbers = [];

	if (numberOfPages > 9) {
		if (currentPage <= 5) {
			pageNumbers = [...Array(8).keys()].slice(2);
            
            return (
                <>
                    {pageNumbers.map((pgNumber) => (
                        <Pagination.Item
                            key={pgNumber}
                            className={currentPage === pgNumber ? "active" : ""}
                            onClick={() => setCurrentPage(pgNumber)}
                        >
                            {pgNumber}
                        </Pagination.Item>
                    ))}
                    <Pagination.Ellipsis />
                </>
            );

        } else if (currentPage >= numberOfPages - 4) {
			pageNumbers = [...Array(numberOfPages).keys()].slice(
				currentPage - 2
			);

            return (
                <>
                    <Pagination.Ellipsis />
                    {pageNumbers.map((pgNumber) => (
                        <Pagination.Item
                            key={pgNumber}
                            className={currentPage === pgNumber ? "active" : ""}
                            onClick={() => setCurrentPage(pgNumber)}
                        >
                            {pgNumber}
                        </Pagination.Item>
                    ))}
                </>
            );

		} else {
			pageNumbers = [...Array(currentPage + 3).keys()].slice(
				currentPage - 2
			);

            return (
                <>
                    <Pagination.Ellipsis />
                    {pageNumbers.map((pgNumber) => (
                        <Pagination.Item
                            key={pgNumber}
                            className={currentPage === pgNumber ? "active" : ""}
                            onClick={() => setCurrentPage(pgNumber)}
                        >
                            {pgNumber}
                        </Pagination.Item>
                    ))}
                    <Pagination.Ellipsis />
                </>
            );
		}
	} else {
        pageNumbers = [...Array(numberOfPages).keys()].slice(2);

        return (
            <>
                {pageNumbers.map((pgNumber) => (
                    <Pagination.Item
                        key={pgNumber}
                        className={currentPage === pgNumber ? "active" : ""}
                        onClick={() => setCurrentPage(pgNumber)}
                    >
                        {pgNumber}
                    </Pagination.Item>
                ))}
            </>
        );
    }
};

const PaginationList = ({ numberOfPages, currentPage, setCurrentPage }) => {
	const nextPage = () => {
		if (currentPage !== numberOfPages) setCurrentPage(++currentPage);
	};

	const previousPage = () => {
		if (currentPage !== 1) setCurrentPage(--currentPage);
	};

	return (
		<>
			<Pagination className="m-5">
				<Pagination.Prev onClick={previousPage} />
				<Pagination.Item
					key={1}
					className={currentPage === 1 ? "active" : ""}
					onClick={() => setCurrentPage(1)}
				>
					{1}
				</Pagination.Item>
				<PaginationGenerator
					numberOfPages={numberOfPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<Pagination.Item
					key={numberOfPages}
					className={currentPage === numberOfPages ? "active" : ""}
					onClick={() => setCurrentPage(numberOfPages)}
				>
					{numberOfPages}
				</Pagination.Item>
				<Pagination.Next onClick={nextPage} />
			</Pagination>
		</>
	);
};

export default PaginationList;
