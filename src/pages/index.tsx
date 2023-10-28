import { SummaryView } from "@/views/summary";

import { useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { WelcomeView } from "@/views/welcome";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "@/entities/user/model/slice";
import { RootState } from "@/app/store";

function MainPage(props: any) {
  const { user } = useUser();

  const dispatch = useDispatch();

  const userInfo = useSelector((state: RootState) => state.userSlice);

  useEffect(() => {
    if (userInfo.loading === "idle") {
      dispatch(fetchUserInfo() as any);
    }
  }, [userInfo.loading, dispatch]);

  if (userInfo.loading === "loading" || userInfo.loading === "idle")
    return <p>Loading...</p>;
  if (userInfo.loading === "error") return <p>Error: {userInfo.error}</p>;

  if (userInfo.loading === "loaded") {
    console.log(userInfo.info);
  }

  if ((user as any).role === "GUEST") {
    return <WelcomeView />;
  }

  return <SummaryView />;
}

export default withPageAuthRequired(MainPage);
