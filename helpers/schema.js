import * as yup from "yup";

export const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "❌ Name must only contain letters")
      .test("name-words", "❌ Name must have 1 to 3 words", (value) => {
        const words = value.trim().split(/\s+/);
        return words.length >= 1 && words.length <= 3;
      })
      .required("❌ Name is required"),
    email: yup
      .string()
      .email("❌ Invalid email")
      .required("❌ Email is required"),
    message: yup.string().required("❌ Message is required"),
  })
  .required();
