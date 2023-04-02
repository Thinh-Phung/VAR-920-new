import React from "react"
import AdditionalNotes from "./request-input/AdditionalNotes"
import CurrentChallenges from "./request-input/CurrentChallenges"
import Product from "./request-input/Product"
import ReasonForRequest from "./request-input/ReasonForRequest"
import SupplierName from "./request-input/SupplierName"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestResearch = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="type-of-research"
              className="text-[#5C667A] text-base text-start"
            >
              Type of Research
            </label>
            <input
              id="type-of-research"
              type="text"
              className="mt-2 rounded-md border-slate-200"
            />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <SupplierName />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <Product />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <CurrentChallenges />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <ReasonForRequest />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <UploadDocuments />
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <AdditionalNotes />
        </div>
      </div>
    </>
  )
}

export default RequestResearch
