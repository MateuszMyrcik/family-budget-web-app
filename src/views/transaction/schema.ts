import yup from "@/shared/ui-kit/schema";

export const transactionSchema = yup.object().shape({
  type: yup.string().required(),
  name: yup.string().required(),
  date: yup.date().required("a"),
  classificationRecordId: yup.string().required(),
  comments: yup.string(),
  amount: yup.object().shape({
    value: yup.number().required(),
    currency: yup.string().optional(),
  }),
  isCyclic: yup.boolean(),
  occurrences: yup.number().when("isCyclic", {
    is: true,
    then: (schema) => schema.required().min(1).max(30),
  }),
  frequency: yup.string().when("isCyclic", {
    is: true,
    then: (schema) => schema.required(),
  }),
});
