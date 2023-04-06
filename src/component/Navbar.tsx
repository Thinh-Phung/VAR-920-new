import React from "react"
import verizoneLogo from "../assets/home-page/verizon.png"
import Vector from "../assets/home-page/Vector.png"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Navbar = ({ currentPage }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [chosePage, setChosePage] = useState("Home")
  const handleClick = () => {
    setIsOpenMenu(isOpenMenu === false ? true : false)
  }
  console.log(currentPage)
  return (
    <Disclosure as="nav" className="bg-white sm:bg-[#186582]">
      {({ open }) => (
        <>
          <div className="mx-auto pr-4 ">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2C87BF]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center h-full bg-white">
                  <img
                    className="block h-auto w-auto px-4 lg:hidden"
                    src={verizoneLogo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-auto w-auto px-4 lg:block"
                    src={verizoneLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 text-white">
                  <a
                    href="/home"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline underline-offset-1 ${
                      currentPage === "home" ? "underline" : ""
                    }`}
                  >
                    Home
                  </a>
                  <a
                    href="/requests"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline underline-offset-1 ${
                      currentPage === "requests" ? "underline" : ""
                    }`}
                  >
                    Request
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline underline-offset-1 ${
                      currentPage === "save" ? "underline" : ""
                    }`}
                  >
                    Save
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline underline-offset-1 ${
                      currentPage === "buy" ? "underline" : ""
                    }`}
                  >
                    Buy
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline underline-offset-1 ${
                      currentPage === "manager" ? "underline" : ""
                    }`}
                  >
                    Manager
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline underline-offset-1 ${
                      currentPage === "report" ? "underline" : ""
                    }`}
                  >
                    Report
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2C87BF] focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100" : "bg-white"
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 " */}
              <Disclosure.Button
                as="a"
                href="/home"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500
                ${
                  currentPage === "home"
                    ? "border-[#186582] text-[#2C87BF] bg-indigo-50"
                    : ""
                }`}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/requests"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500
                ${
                  currentPage === "requests"
                    ? "border-[#186582] text-[#2C87BF] bg-indigo-50"
                    : ""
                }`}
              >
                Request
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500
                ${
                  currentPage === "save"
                    ? "border-[#186582] text-[#2C87BF] bg-indigo-50"
                    : ""
                }`}
              >
                Save
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500
                ${
                  currentPage === "buy"
                    ? "border-[#186582] text-[#2C87BF] bg-indigo-50"
                    : ""
                }`}
              >
                Buy
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500
                ${
                  currentPage === "manager"
                    ? "border-[#186582] text-[#2C87BF] bg-indigo-50"
                    : ""
                }`}
              >
                Manager
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500
                ${
                  currentPage === "report"
                    ? "border-[#186582] text-[#2C87BF] bg-indigo-50"
                    : ""
                }`}
              >
                Report
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
