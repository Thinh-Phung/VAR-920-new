import React from "react"
import { useState } from "react"
import companyLogo from "../assets/react.svg"
import logo from "../assets/login-right-side-image.jpeg"

const signUpData = {
  email: "",
  fistName: "",
  lastName: "",
  companyName: "",
  companyWebsite: "",
  phoneNumber: "",
  jobTitle: "",
  department: ""
}

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [fistName, setFistName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [department, setDepartment] = useState("")

  const handleSubmit = () => {
    signUpData["email"] = email
    signUpData["fistName"] = fistName
    signUpData["lastName"] = lastName
    signUpData["companyName"] = companyName
    signUpData["companyWebsite"] = companyWebsite
    signUpData["phoneNumber"] = phoneNumber
    signUpData["jobTitle"] = jobTitle
    signUpData["department"] = department
  }
  return (
    <div className="grid lg:grid-cols-3 h-screen">
      <div className="col-span-1 my-auto  w-10/12 mx-auto">
        <img
          src={companyLogo}
          alt="varisource logo"
          id="company-logo"
          className="my-6"
        />
        <p className=" my-6 font-bold text-4xl">Sign Up</p>
        <div id="form-sign-up">
          <div id="name" className="grid grid-cols-2 gap-4 my-12 w-full">
            <input
              id="first-name"
              type="text"
              placeholder="Fist Name"
              className="rounded "
            />

            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              className="rounded  "
            />
          </div>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full mb-12 rounded"
          />

          <input
            id="company-name"
            type="text"
            placeholder="Company Name"
            className="w-full mb-12 rounded"
          />

          <input
            id="company-website"
            type="text"
            placeholder="Company Website"
            className="w-full mb-12 rounded"
          />

          <input
            id="phone-number"
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-12 rounded"
          />

          <input
            id="job-title"
            type="text"
            placeholder="Job Title"
            className="w-full mb-12 rounded"
          />

          <input
            id="department"
            type="text"
            placeholder="Department"
            className="w-full mb-12 rounded"
          />
          <button className="rounded bg-indigo-600 text-center py-2 text-white text-base w-full">
            Submit
          </button>
        </div>
      </div>
      <div id="image" className="hidden lg:block lg:col-span-2">
        <img src={logo} alt="image for login page" className="w-full h-full" />
      </div>
    </div>
  )
}

export default SignUp
