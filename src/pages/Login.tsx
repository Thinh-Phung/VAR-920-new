import React from "react"
import SignUp from "./SignUp"
import logo from "../assets/login-right-side-image.jpeg"
import companyLogo from "../assets/react.svg"

const Login = () => {
  return (
    <div id="login" className="grid lg:grid-cols-3 h-screen">
      <div id="login-form" className="lg:col-span-1 px-3 my-auto">
        <div id="social-media">
          <img
            src={companyLogo}
            alt="varisource logo"
            id="company-logo"
            className="mb-6"
          />
          <div className="mb-6">
            <p className="text-6xl lg:text-2xl font-bold mb-2">
              Sign in to your account
            </p>
            <p>
              <span className="text-slate-500 text-sm">Or </span>
              <span
                id="title-free-trial"
                className="text-indigo-500 font-medium text-sm"
              >
                start your 14-day free trial
              </span>
            </p>
          </div>
          <div id="login-with-social-media">
            <p className="text-slate-600 text-sm">Sign in with</p>
            <div className="container grid grid-cols-3 gap-1 mb-6">
              <div
                id="facebook-sign-in"
                className=" text-center border  py-1 rounded-lg"
              >
                f
              </div>
              <div
                id="tweeter-sign-in"
                className="text-center  border  py-1 rounded-lg"
              >
                t
              </div>
              <div
                id="github-sign-in"
                className=" text-center  border py-1 rounded-lg"
              >
                g
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="border-t w-5/12 lg:w-4/12"></div>
            <p className="text-slate-500 text-sm lg:text-xs flex justify-center">
              Or continue with
            </p>
            <div className="border-t w-5/12 lg:w-4/12"></div>
          </div>
        </div>
        <form
          action="#"
          id="login-with-email"
          className="flex flex-col  w-22 my-4 "
        >
          <label
            htmlFor="email"
            className="text-slate-600 text-base lg:text-sm"
          >
            Email address
          </label>
          <input
            type="email"
            id="emailInput"
            className="rounded-lg border-slate-200"
          />
          <label
            htmlFor="password"
            className="text-slate-600 mt-4 text-base lg:text-sm"
          >
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="rounded-lg border-slate-200"
          />
          <div className="flex justify-between my-4">
            <div className="flex items-center my-2">
              <input
                type="checkbox"
                id="remember-me"
                className="rounded-sm mr-2"
              />
              <p className="text-slate-600 text-sm lg:text-xs">Remember Me</p>
            </div>

            <a
              href="#"
              className="text-indigo-500 text-sm font-medium lg:text-xs"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="rounded bg-indigo-600 text-center py-2 text-white text-base lg:text-sm"
          >
            Sign in
          </button>
          <a
            href="/sign-up"
            className="mt-3 flex w-full justify-center text-indigo-600 hover:text-indigo-500 text-sm"
          >
            Or Sign up
          </a>
        </form>
      </div>
      <div id="logo" className="hidden lg:block lg:col-span-2">
        <img src={logo} alt="image for login page" className="w-full h-full" />
      </div>
    </div>
  )
}

export default Login
