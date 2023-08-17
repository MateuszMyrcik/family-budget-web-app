import { RootState } from "@/app/store";
import { User } from "@/shared/domain";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { schema } from "./schema";

type FormValues = Omit<User, "id" | "role">;

export const useRecordsForm = () => {
  const { user } = useSelector((state: RootState) => state.userSlice);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: user,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data); // TODO: handle submit with api
  };

  return {
    control,
    onSubmit,
    handleSubmit,
  };
};
