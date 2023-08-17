import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

type FormValues = {
  newPasswordOne: string;
  newPasswordTwo: string;
  currentPassword: string;
};

export const useRecordsForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      newPasswordOne: "",
      newPasswordTwo: "",
      currentPassword: "",
    },
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
