import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

type UserDetails = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

type FormValues = UserDetails;

export const useRecordsForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
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
