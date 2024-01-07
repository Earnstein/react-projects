import { Formik } from "formik";
import { cn } from "../utils";
import * as yup from "yup";
import Input from "./Input";

const loginSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message : yup.string().required("Don't forget your message")
});

const initialValuesLogin = {
  name: "",
  email: "",
  message: "",
  
};
const ContactForm = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    // FORM SUBMISSION LOGIC HERE
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className={cn("grid grid-cols-6 gap-4")}>
          <Input
            label="Name"
            name="name"
            type="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />

          <textarea 
          className="col-span-6 bg-blue font-semibold placeholder-white-400 p-3 rounded-md outline-none"
          name="message"
          placeholder="MESSAGE"
          rows="5"
          cols="10"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
         />
          {touched.message && <div className="col-span-6 text-red text-sm font-palanquin">{errors.message}</div>}
        </form>
        
      )}
    </Formik>
  );
};

export default ContactForm;
