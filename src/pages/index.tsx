import { SummaryView } from "@/views/summary";

import { useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function MainPage(props: any) {
  const { user } = useUser();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user-info");
        const data = await res.json();
        console.log("data", data);
        const tokenRaw = await fetch("/api/token");
        const token = await tokenRaw.json();
        console.log("token", token);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchToken();
  }, []);

  return <SummaryView />;
}

export default withPageAuthRequired(MainPage);
