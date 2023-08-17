import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Imię jest wymagane"),
  surname: yup.string().required("Nazwisko jest wymagane"),
  email: yup
    .string()
    .email("Niepoprawny adres email")
    .required("Email jest wymagany"),
  avatar: yup.mixed().optional(),
});
