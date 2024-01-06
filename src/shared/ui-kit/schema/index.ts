import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "validation.mixed.default",
    required: "validation.mixed.required",
    notType: "validation.mixed.notType",
  },
  date: {
    min: "validation.date.min",
    max: "validation.date.max",
  },
  string: {
    email: "validation.string.email",
  },
});

export default yup;
