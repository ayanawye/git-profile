import React, { Suspense, useEffect } from "react";
import { LogoItem, Navigation } from "../../shared";
import "../styles/global.scss";
import { useGetTokenQuery } from "../../entities/userProfile/api/getToken";
import { Outlet } from "react-router";
import { useGetUserDataQuery } from "../../entities/userProfile/api/userApi";

function BaseLayout() {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  const { data } = useGetTokenQuery(code, { skip: !code?.length });

  useGetUserDataQuery(data?.access_token, { skip: !data?.access_token });

  return (
    <>
      <LogoItem />
      {window.location.href === "http://localhost:3000/" ? "" : <Navigation />}
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default BaseLayout;
