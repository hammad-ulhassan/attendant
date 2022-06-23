import * as yup from "yup";
import {
  REQUIRED,
  USERIDKEY,
  USERPINERR,
  USERPINKEY,
  USERPINREGEX,
} from "./constants";

const validationSchema = yup.object({
  [USERIDKEY]: yup.string().required(REQUIRED),
  [USERPINKEY]: yup
    .string()
    .required(REQUIRED)
    .matches(USERPINREGEX, USERPINERR),
});

export default validationSchema;
