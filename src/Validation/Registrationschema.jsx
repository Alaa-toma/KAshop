import * as yup from "yup"
import { object } from 'yup';

 export const RegisterrSchema = object({
    userName: yup.string().required("User Name is required").min(3, "username at least 3 characters "),
    fullName: yup.string().required("full Name is required"),
    email: yup.string().email("must have a valid email").required("email is required"),
    password: yup.string().required().min(6, "at least 6 characters")
      .matches(/[A-Z]/, "must contains at least one Upper case letter")
      .matches(/[a-z]/, "must contains at least one lower case letter")
      .matches(/[0-9]/, "must contains at least one number")
      .matches(/[@#$!&%*?]/, "must contains at least one special character")

  });
