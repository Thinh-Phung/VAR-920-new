import React from "react"
import CurrentSupplier from "./request-input/CurrentSupplier"
import AdditionalNotes from "./request-input/AdditionalNotes"
import UploadDocuments from "./request-input/UploadDocuments"
import CurrentSpend from "./request-input/CurrentSpend"
import ContractEndDate from "./request-input/ContractEndDate"
import NoticePeriod from "./request-input/NoticePeriod"
const RequestCancellation = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:gap-1 pt-6 px-2 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <CurrentSupplier />
        </div>
        <div className="flex flex-col md:w-[48%]">
          <CurrentSpend />
        </div>
      </div>
      <div className="md:flex md:justify-between md:gap-1 pt-6 px-2 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <label
            htmlFor="service-to-cancel"
            className="text-[#5C667A] text-base text-start"
          >
            Service to Cancel
          </label>
          <input
            id="service-to-cancel"
            type="text"
            className="mt-2 rounded-md border-slate-200"
          />
        </div>
        <div className="flex flex-col md:w-[48%]">
          <ContractEndDate />
        </div>
      </div>
      <div className="md:flex md:justify-between md:gap-1 pt-6 px-2 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <NoticePeriod />
        </div>
        <div className="flex flex-col md:w-[48%]">
          <label
            htmlFor="cancellation-request-date"
            className="text-[#5C667A] text-base text-start"
          >
            Cancellation Request Date
          </label>
          <input
            id="cancellation-request-date"
            type="date"
            className="mt-2 rounded-md border-slate-200"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col pt-4 px-2 md:px-6">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="reason-for-cancellation"
              className="text-[#5C667A] text-base text-start"
            >
              Reason for Cancellation
            </label>
            <textarea
              id="reason-for-cancellation"
              className="mt-2 h-20 rounded-md border-slate-200"
            ></textarea>
          </div>
          <div className="flex flex-col md:w-[48%]">
            <UploadDocuments />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 md:px-6">
        <AdditionalNotes />
      </div>
    </>
  )
}

export default RequestCancellation
