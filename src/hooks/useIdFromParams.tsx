import { useRouter } from "next/router";

export const useIdFromParams = () => {
  const { query } = useRouter();
  const id =
    typeof query.id === "string"
      ? query.id
      : Array.isArray(query.id)
      ? query.id[0]
      : "";
  return {
    id,
  };
};
