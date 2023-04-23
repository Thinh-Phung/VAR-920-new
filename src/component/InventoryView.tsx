import React from "react"
import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

const InventoryView = () => {
  const [activeTab, setActiveTab] = useState("inventory")
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <div
          className="mx-auto w-[95%] px-2 mt-4 text-white
      rounded-md bg-[#5c667a] text-sm font-thin"
        >
          <div className="w-full lg:w-5/6 mx-auto flex flex-wrap items-center justify-around">
            <button
              onClick={() => {
                setActiveTab("inventory")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "inventory" ? "underline" : ""
              }`}
            >
              Inventory
            </button>
            <button
              onClick={() => {
                setActiveTab("sites")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "sites" ? "underline" : ""
              }`}
            >
              Sites
            </button>
            <button
              onClick={() => {
                setActiveTab("orders")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "orders" ? "underline" : ""
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => {
                setActiveTab("contracts")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "contracts" ? "underline" : ""
              }`}
            >
              Contracts
            </button>

            <button
              onClick={() => {
                setActiveTab("spend")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "spend" ? "underline" : ""
              }`}
            >
              Spend
            </button>
            <button
              onClick={() => {
                setActiveTab("actions")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "actions" ? "underline" : ""
              }`}
            >
              Actions
            </button>
            <button
              onClick={() => {
                setActiveTab("tickets")
              }}
              className={`px-4 py-2 hover:underline ${
                activeTab === "tickets" ? "underline" : ""
              }`}
            >
              Tickets
            </button>
            <button
              onClick={() => {
                setActiveTab("files")
              }}
              className={`px-1 py-2 hover:underline ${
                activeTab === "files" ? "underline" : ""
              }`}
            >
              Files
            </button>
          </div>
        </div>
        <div className="mx-auto w-[95%] mt-9">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 xl:gap-6">
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-sky-100">
              <p className="h-2/5 border-slate-300 text-[#343a40] text-center py-1 md:py-2 text-sm">
                Annual Spend
              </p>
              <div className="border mx-auto border-[#77A8DC] w-3/5"></div>
              <p className="h-3/5 text-[#5d5d5d] text-center py-4 text-base md:text-xl">
                $25.61 M
              </p>
            </div>
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-sky-100">
              <p className="h-2/5 border-slate-300 text-[#343a40] text-center py-1 md:py-2 text-sm">
                Total MRC
              </p>
              <div className="border mx-auto border-[#77A8DC] w-3/5"></div>
              <p className="h-3/5 text-[#5d5d5d] text-center py-4 text-base md:text-xl">
                $2.13 M
              </p>
            </div>
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-sky-100">
              <p className="h-2/5 border-slate-300 text-[#343a40] text-center py-1 md:py-2 text-sm">
                Total Sites
              </p>
              <div className="border mx-auto border-[#77A8DC] w-3/5"></div>
              <p className="h-3/5 text-[#5d5d5d] text-center py-4 text-base md:text-xl">
                18
              </p>
            </div>
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-sky-100">
              <p className="h-2/5 border-slate-300 text-[#343a40] text-center py-1 md:py-2 text-sm">
                Total Suppliers
              </p>
              <div className="border mx-auto border-[#77A8DC] w-3/5"></div>
              <p className="h-3/5 text-[#5d5d5d] text-center py-4 text-base md:text-xl">
                13
              </p>
            </div>
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-sky-100">
              <p className="h-2/5 border-slate-300 text-[#343a40] text-center py-1 md:py-2 text-sm">
                Total Services
              </p>
              <div className="border mx-auto border-[#77A8DC] w-3/5"></div>
              <p className="h-3/5 text-[#5d5d5d] text-center py-4 text-base md:text-xl">
                46
              </p>
            </div>
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-sky-100">
              <p className="h-2/5 border-slate-300 text-[#343a40] text-center py-1 md:py-2 text-sm">
                Expiring 90 Days
              </p>
              <div className="border mx-auto border-[#77A8DC] w-3/5"></div>
              <p className="h-3/5 text-[#5d5d5d] text-center py-4 text-base md:text-xl">
                0
              </p>
            </div>
          </div>
        </div>
        <div className="w-[95%] mx-auto mt-4 md:flex md:justify-end">
          <div className="relative mt-2 flex items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex py-1.5 pl-1.5">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-[95%] mx-auto mt-4">component table</div>
      </div>
    </>
  )
}

export default InventoryView
