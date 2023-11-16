import {
  useUserServiceStatus,
  useIsActiveUser,
  useUserAction,
} from "@/entities/user";
import { WelcomeView } from "@/views/welcome";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, CircularProgress } from "@mui/material";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export const WithScreenInterceptorProvider = ({ children }: Props) => {
  const { user } = useUser();
  const isActiveUser = useIsActiveUser();
  const isSessionActive = !!user;
  const status = useUserServiceStatus();
  const { fetchUserInfo } = useUserAction();

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  useEffect(() => {
    if (status.isIdle) {
      fetchUserInfo();
    }
  }, [status.isIdle, fetchUserInfo]);

  useEffect(() => {
    if (!isSessionActive && status.isError) {
      handleLogout();
    }
  }, [isSessionActive, status.isError]);
  

  if (status.isPending || status.isIdle) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={80} color="primary"></CircularProgress>
      </Box>
    );
  }

  if (!isActiveUser && isSessionActive) {
    return <WelcomeView />;
  }

  return <>{children}</>;
};
