import { Box, Skeleton } from "@mui/material";

export const FormSkeleton = () => {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
      <Skeleton animation="wave" variant="text" width="100%" height={60} />
    </Box>
  );
};
