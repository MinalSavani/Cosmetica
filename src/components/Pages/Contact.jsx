import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      location: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      location: Yup.string().required("Location is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data", values);
      setSubmitted(true);
      toast.success("Form submitted successfully");
      resetForm();
    },
  });

  return (
  
    <div className="min-h-screen bg-zinc-950 py-10 px-4">
     <ToastContainer position="top-center" autoClose={3000} />
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-xl w-full mx-auto flex flex-col items-center"
      >
        <div className="mb-4 w-full flex flex-col">
          <label className="text-white font-bold tracking-wider">NAME</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            onBlur={formik.handleBlur}
            type="text"
            className="w-full sm:w-[600px] mt-3 rounded px-3 py-2 border border-gray-300"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div className="mb-4 w-full flex flex-col">
          <label className="text-white font-bold tracking-wider">EMAIL</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            // ✅ Responsive input width
            className="w-full sm:w-[600px] mt-3 px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400">{formik.errors.email}</p>
          )}
        </div>

        <div className="mb-6 w-full flex flex-col">
          <label
            htmlFor="location"
            className="text-white font-bold tracking-wider"
          >
            LOCATION
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // ✅ Responsive input width
            className="w-full sm:w-[600px] mt-3 px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
          {formik.touched.location && formik.errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.location}
            </p>
          )}
        </div>

        <div className="mb-6 w-full flex flex-col">
          <label
            htmlFor="message"
            className="text-white font-bold tracking-wider"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            className="w-full sm:w-[600px] mt-3 px-3 py-2 border border-gray-300 rounded"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </p>
          )}
        </div>

        
        <button
          type="submit"
          className="w-full  sm:ml-6   sm:w-[600px]  px-5 py-3 font-semibold bg-white dark:text-black"
        >
       
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
