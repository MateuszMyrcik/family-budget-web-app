import { Grid, Skeleton as MuiSkeleton } from "@mui/material";

export const Skeleton = () => {
  return (
    <Grid
      container
      direction={"row"}
      sx={{
        padding: "20px",
        gap: "24px",
      }}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <MuiSkeleton
          key={index}
          animation="wave"
          variant="rectangular"
          sx={{ minWidth: "328px", height: "228px" }}
        ></MuiSkeleton>
      ))}
    </Grid>
  );
};
