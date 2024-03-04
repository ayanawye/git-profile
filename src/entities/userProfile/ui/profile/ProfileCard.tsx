import React from "react";
import style from "./Profile.module.scss";
import { AvatarImage, BoldTitle, Link } from "../../../../shared";
import { useAppSelector } from "../../../../app/providers/store";

function ProfileCard() {
  const { user: data } = useAppSelector(state => state.user);

  return (
    <div className={style.profile}>
      <AvatarImage src={data?.avatar_url} alt="avatar" />
      <div>
        <div className={style.names}>
          <BoldTitle>{data?.name}</BoldTitle>
          <BoldTitle>{data?.login}</BoldTitle>
        </div>
        <Link href={data?.html_url} blank>
          {data?.html_url}
        </Link>
        <p className={style.bio}>{data?.bio}</p>
        <div className={style.contacts}>
          <Link blank href={`mailto:${data?.email}`}>
            {data?.email}
          </Link>
          <p>{data?.company}</p>
          <p>{data?.location}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
