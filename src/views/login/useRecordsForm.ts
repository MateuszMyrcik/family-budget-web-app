import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

type UserCredentials = {
  email: string;
  password: string;
};

type FormValues = UserCredentials;

export const useRecordsForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
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
