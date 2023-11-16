import { store } from "@/app/store";
import { useUserIsInvitePending } from "@/entities/user";

import { Box } from "@mui/material";

import { Provider } from "react-redux";
import { HouseholdManager } from "./HouseholdManager";

export const WelcomeView = () => {
  const isInvitePending = useUserIsInvitePending();

  return (
    <Provider store={store}>
      <Box sx={{ background: `#E3F2FD`, width: "100vw", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {isInvitePending ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <span>📧</span>
                  <span>
                    Zaproszenie do grupy domowej oczekuje na akceptacje
                  </span>
                </Box>
              </Box>
            </Box>
          ) : (
            <HouseholdManager />
          )}
        </Box>
      </Box>
    </Provider>
  );
};
