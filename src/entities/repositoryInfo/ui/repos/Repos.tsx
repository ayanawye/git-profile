import React, { useEffect, useState } from "react";
import styles from "./Repos.module.scss";
import { useAppSelector } from "../../../../app/providers/store";
import { useGetReposQuery } from "../../api/repositoryApi";
import RepoCard from "../repoCard/RepoCard";
import { IRepo } from "../../model/types";
import { checkToken } from "../../../../shared";

function Repos() {
  const [repoType, setRepoType] = useState<string>("public");
  const user = useAppSelector((state) => state.user.user);

  const { data } = useGetReposQuery(
    {
      user: user?.login || "",
      type: repoType,
    },
    { skip: !user }
  );

  const switchRepoType = (type: string): void => {
    if (type) setRepoType(type);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.switch}>
        <div
          className={`${styles.tab} ${
            repoType === "public" && styles.activeTab
          }`}
          onClick={() => switchRepoType("public")}
        >
          Public
        </div>
        <div
          className={`${styles.tab} ${
            repoType === "private" && styles.activeTab
          }`}
          onClick={() => switchRepoType("private")}
        >
          Private
        </div>
      </div>

      <div className={styles.repos}>
        {data?.map((repo: IRepo) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            author={repo.owner.login}
            repoLink={repo.clone_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Repos;
