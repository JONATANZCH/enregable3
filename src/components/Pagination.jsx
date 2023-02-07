import React from "react";
import { numbersPage } from "../helpers/handlePagination";
import "./styles/Pagination.css";

const Pagination = ({ setPage, location, RESIDENTS_PERPAGE, page }) => {
    return (
        <ul className="pagination">
            {numbersPage(location, RESIDENTS_PERPAGE).map((numberPage) => (
            <li
                className={`pagination__li ${ numberPage === page ? 'currentPage' : '' }`}
                onClick={() => setPage(numberPage)}
                key={numberPage}
            >
                {numberPage}
            </li>
        ))}
        </ul>
    );
};

export default Pagination;
