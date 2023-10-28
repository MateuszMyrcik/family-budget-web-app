import * as yup from "yup";

export const expenseSchema = yup.object().shape({
  type: yup.string().required(), // TODO: extend with oneOf enum
  name: yup.string().required(),
  date: yup.date().required(),
  category: yup.string().required(),
  comments: yup.string(),
  amount: yup.object().shape({
    value: yup.number().required(),
    currency: yup.string().optional(),
  }),
});