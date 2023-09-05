import * as yup from "yup";

export const expenseSchema = yup.object().shape({
  date: yup.date().required(),
});
