import React, { memo } from "react";
import { ProfileCard } from "../../../entities/userProfile";

function Profile() {
  return <ProfileCard />;
}

export default memo(Profile);
