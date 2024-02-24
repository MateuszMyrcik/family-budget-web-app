import { Box, Skeleton } from "@mui/material";

export const StatsCardSkeleton = () => {
  return (
    <Box sx={{ width: "100%", height: 400, p: 0 }}>
      <Skeleton variant="rectangular" height={400} />
    </Box>
  );
};
