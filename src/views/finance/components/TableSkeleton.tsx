import { Box, Skeleton as MuiSkeleton } from "@mui/material";

export const TableSkeleton = () => {
  return (
    <Box>
      <MuiSkeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
      <MuiSkeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
      <MuiSkeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
      <MuiSkeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
      <MuiSkeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
    </Box>
  );
};
