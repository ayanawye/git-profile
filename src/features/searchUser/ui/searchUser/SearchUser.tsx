import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./SearchUser.module.scss";
import { Loader, checkAuth, useDebounce } from "../../../../shared";
import {
  useLazyGetReposByUserQuery,
  useLazySearchUserQuery,
} from "../../api/searchUserApi";
import { IUser, UserCard } from "../../../../entities/searchUser";
import UserRepoModal from "../userRepoModal/UserRepoModal";
import Pagination from "../pagination/Pagination";

function SearchUser() {
  const [search, setSearch] = useState<string>("");
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const debouncedSearch = useDebounce(search);

  const [searchUser, { data, isLoading }] = useLazySearchUserQuery();
  const [getReposByUser, { data: repos }] = useLazyGetReposByUserQuery();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = (user: string) => {
    getReposByUser(user);
    setIsActiveModal(!isActiveModal);
  };

  useEffect(() => {
    if (search.length) {
      searchUser({ q: debouncedSearch, page: currentPage });
    }
  }, [debouncedSearch, currentPage]);

  useEffect(() => {
    checkAuth();
  }, []);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.wrapper}>
      <input
        placeholder="Search users"
        type="text"
        value={search}
        onChange={handleChange}
      />
      {data && (
        <div className={style.totalCount}>Total: {data?.total_count}</div>
      )}

      <div className={style.users}>
        {isLoading && <Loader />}
        {data?.items.map((user: IUser) => (
          <UserCard
            key={user.id}
            name={user.login}
            avatar={user.avatar_url}
            link={user.html_url}
            onClick={handleClick}
          />
        ))}
        {data && (
          <Pagination
            usersPerPage={30}
            totalUsers={data.total_count}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
      {repos && isActiveModal && (
        <UserRepoModal close={() => setIsActiveModal(false)} repos={repos} />
      )}
    </div>
  );
}

export default SearchUser;
