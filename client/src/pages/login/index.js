import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/reducerSlices/userSlice";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const loginSchema = yup.object().shape({
  phoneNumber: yup.string().min(10, { message: "Invalid Number"}).required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Invalid password" })
    .required("Required"),
});

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const phoneInputRef = useRef(null);

  useEffect(() => {
    phoneInputRef.current.focus();
  },[]);

  const [responseMsg, setResponseMsg] = useState({ msgLabel: "", msgType: "" });
   const loginUser = async (values) => {
    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (result.success) {
        dispatch(setUserDetails(result));
        setResponseMsg({
          msgLabel: "Login successful, Welcome!",
          msgType: "success",
        });
        router.push("/home");
      } else {
        setResponseMsg({ msgLabel: result.msg, msgType: "error" });
      }
    } catch (error) {
      setResponseMsg({ msgLabel: error.msg, msgType: "error" });
      console.error("Error posting data:", error);
    }
  };
  return (
  <>
    <div className="m-9 gap-4 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Login</h1>
          <Formik
      initialValues={{
        phoneNumber: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        loginUser(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-gray-500 p-4 rounded-lg mt-4 w-96 flex flex-col items-center">
          <div className="flex flex-col" >
          <label htmlFor="phoneNumber" className="font-bold text-white">Phone Number</label>
          <Field innerRef={phoneInputRef} name="phoneNumber" placeholder="Enter phone number" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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

          <p className="font-bold text-white mt-2">Don't have an account yet? <Link href="/register" className="underline text-blue-300 ">Register now!</Link></p>

          <button type="submit" className="rounded-md bg-slate-600 mt-4 text-white p-2">Login</button>
        </Form>
      )}
    </Formik>
    </div>
    </>
  )
}

export default Login

