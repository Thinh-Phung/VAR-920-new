import React from "react"
import AdditionalNotes from "./request-input/AdditionalNotes"
import CurrentProduct from "./request-input/CurrentProduct"
import CurrentSupplier from "./request-input/CurrentSupplier"
import ReasonForRequest from "./request-input/ReasonForRequest"
import TargetPricing from "./request-input/TargetPricing"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestQuotes = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <CurrentProduct />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <CurrentSupplier />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="interested-suppliers-to-quote"
              className="text-[#5C667A] text-base text-start"
            >
              Interested Suppliers To Quote
            </label>
            <textarea
              id="interested-suppliers-to-quote"
              className="mt-2 h-20 rounded-md border-slate-200"
            ></textarea>
          </div>
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="interested-services-to-quote"
              className="text-[#5C667A] text-base text-start"
            >
              Interested Services To Quote
            </label>
            <textarea
              id="interested-services-to-quote"
              className="mt-2 h-20 rounded-md border-slate-200"
            ></textarea>
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="number-of-users"
              className="text-[#5C667A] text-base text-start"
            >
              Number of Users
            </label>
            <input
              id="number-of-users"
              type="text"
              className="mt-2 rounded-md border-slate-200"
            />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <TargetPricing />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="decision-time-frame"
              className="text-[#5C667A] text-base text-start"
            >
              Decision Time Frame
            </label>
            <input
              id="decision-time-frame"
              type="text"
              className="mt-2 rounded-md border-slate-200"
            />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <p>Term</p>
            <div className="md:flex md:gap-4 lg:gap-10 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded-sm mr-2"
                  id="1-year"
                />
                <label htmlFor="1-year">1 Year</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="2-year"
                  className="rounded-sm mr-2"
                />
                <label htmlFor="2-year">2 Year</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="3-year"
                  className="rounded-sm mr-2"
                />
                <label htmlFor="3-year">3 Year</label>
              </div>
            </div>
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
        <div className="flex flex-col mt-8">
          <AdditionalNotes />
        </div>
      </div>
    </>
  )
}

export default RequestQuotes
