import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userAuthSchema } from "./schema";

type UserAuth = {
  email: string;
  password: string;
};

type FormValues = UserAuth;

export const useRecordsForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(userAuthSchema),
  });

  const onSubmit = (data: FormValues) => {
    // TODO: add call to backend
    console.log(data);
  };

  return {
    handleSubmit,
    onSubmit,
    control,
  };
};
