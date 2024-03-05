import React from "react";
import style from "./UserRepoModal.module.scss";
import { IRepo, RepoCard } from "../../../../entities/repositoryInfo";

interface Props {
  repos: IRepo[];
  close: () => void;
}

function UserRepoModal(props: Props) {
  const { repos, close } = props;

  return (
    <div className={style.modalWrapper} onClick={() => close()}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        {repos.length ? repos.map((repo) => (
          <RepoCard
            key={repo.name}
            name={repo.name}
            author={repo.owner.login}
            repoLink={repo.clone_url}
          />
        )) : "No Repositories"}
      </div>
    </div>
  );
}

export default UserRepoModal;
