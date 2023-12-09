import { Box, Skeleton as MuiSkeleton } from "@mui/material";

export const Skeleton = () => {
  // Sample skeleton to be used as records in a table
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
      <MuiSkeleton variant="rectangular" width="100%" height={50} />
    </Box>
  );
};
