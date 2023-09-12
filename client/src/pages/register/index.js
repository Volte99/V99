import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Link  from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const regsitrationSchema = yup.object().shape({
  phoneNumber: yup.string().min(10, { message: "Invalid Number"}).required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Register = () => {
  const [responseMsg, setResponseMsg] = useState({ msgLabel: "", msgType: "" });
  const router = useRouter();
  const registerUser = async (values) => {
    try {
      const response = await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.status) {
        setResponseMsg({
          msgLabel: result.msg,
          msgType: response.status == 409 ? "error" : "success",
        });
        console.log("Success posting data:", response.status )
        if(response.status == 201){
          router.push('/login')
        }
      }
    } catch (error) {
      setResponseMsg({ msgLabel: "Something went wrong", msgType: "error" });
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
    <div className="m-9 gap-4 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Register</h1>
          <Formik
      initialValues={{
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={regsitrationSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        registerUser(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-gray-500 p-4 rounded-lg mt-4 w-96 flex flex-col items-center">
          <div className="flex flex-col" >
          <label htmlFor="phoneNumber" className="font-bold text-white">Phone Number</label>
          <Field name="phoneNumber" placeholder="Enter phone number" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div className="text-red-600">{errors.phoneNumber}</div>
          ) : null}
         </div>
          
          <div className="flex flex-col">
          <label htmlFor="password" className="font-bold text-white mt-2">Password</label>
          <Field name="password"  type="password" placeholder="Enter password" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          {errors.password && touched.password ? (
            <div className="text-red-600">{errors.password}</div>
          ) : null}
          </div> 

          <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="font-bold text-white mt-2">Confirm Password</label>
          <Field name="confirmPassword" type="password" placeholder="Confirm password" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-600">{errors.confirmPassword}</div> : null}
          </div>

          <div className="flex flex-col">
          <p className="font-bold text-white mt-2">Already have an account? <Link href="/login" className="underline text-blue-300 ">Login!</Link></p>
          </div>


          <button type="submit" className="rounded-md bg-slate-600 mt-4 text-white p-2">Register</button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  )
}

export default Register

