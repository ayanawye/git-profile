import React, { Suspense } from "react";
import { Loader, LogoItem, Navigation, getToken } from "../../shared";
import "../styles/global.scss";
import { useGetTokenQuery } from "../../entities/userProfile/api/getToken";
import { Outlet } from "react-router";
import { useGetUserDataQuery } from "../../entities/userProfile/api/userApi";

function BaseLayout() {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  useGetTokenQuery(code, { skip: !code?.length });

  useGetUserDataQuery(undefined, { skip: !getToken() });

  return (
    <>
      <LogoItem />
      {window.location.href === "http://localhost:3000/" ? "" : <Navigation />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default BaseLayout;
