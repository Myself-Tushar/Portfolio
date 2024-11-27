import React from 'react';
import './Pagination.css'; // Ensure the CSS file is imported

const Pagination = ({ totalProjects, projectsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalProjects / projectsPerPage); // Calculate total pages

  const handlePageChange = (e, page) => {
    e.preventDefault(); // Prevent default anchor behavior (scrolling)
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); // Set current page on click
    }
  };

  return (
    <div className="pagination-wrapper">
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => handlePageChange(e, currentPage - 1)}
              tabIndex="-1"
              aria-disabled={currentPage === 1 ? 'true' : 'false'}
            >
              Previous
            </a>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a
                className="page-link"
                href="#"
                onClick={(e) => handlePageChange(e, index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => handlePageChange(e, currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;