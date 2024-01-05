import { Skeleton } from "@mui/material";

export const RecordsSkeleton = () => {
  return (
    <>
      {Array.from(Array(10).keys()).map((i) => (
        <Skeleton key={i} sx={{ height: 70 }} />
      ))}
    </>
  );
};
