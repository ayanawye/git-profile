import React from "react";
import style from "./Pagination.module.scss";

interface Props {
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

function Pagination(props: Props) {
  const { usersPerPage, totalUsers, paginate, currentPage } = props;
  
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }


  return (
    <div className={style.pagination}>
      <ul className={style.container}>
        {pageNumber.length > 1 ? (
          pageNumber.map((number) => (
            <li
              key={number}
              className={currentPage === number ? style.active : ""}
              onClick={() => paginate(number)
              }
            >
              {number}
              <p
                className={style.page}
              >
              </p>
            </li>
          ))
        ) : ''}
      </ul>
    </div>
  );
}

export default Pagination;
