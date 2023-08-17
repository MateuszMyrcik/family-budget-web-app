import * as yup from "yup";

export const schema = yup.object().shape({
  newPasswordOne: yup.string().required(),
  newPasswordTwo: yup
    .string()
    .required()
    .test(
      "passwords-match",
      "Hasło musi pasować do poprzedniego",
      function (value) {
        return this.parent.newPasswordOne === value;
      }
    ),
  currentPassword: yup.string().required(),
});
