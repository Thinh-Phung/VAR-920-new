import React from "react"
import AdditionalNotes from "./request-input/AdditionalNotes"
import ContractEndDate from "./request-input/ContractEndDate"
import CurrentSpend from "./request-input/CurrentSpend"
import CurrentSupplier from "./request-input/CurrentSupplier"
import NoticePeriod from "./request-input/NoticePeriod"
import ReasonForRequest from "./request-input/ReasonForRequest"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestRenewals = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <CurrentSupplier />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <CurrentSpend />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <ContractEndDate />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <NoticePeriod />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="service-to-renew"
              className="text-[#5C667A] text-base text-start"
            >
              Service to Renew
            </label>
            <input
              id="service-to-renew"
              type="text"
              className="mt-2 rounded-md border-slate-200"
            />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <p>Renewal Term</p>
            <div className="md:flex md:gap-4 lg:gap-10 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded-sm mr-2"
                  id="1-year-renewal"
                />
                <label htmlFor="1-year-renewal">1 Year</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="2-year-renewal"
                  className="rounded-sm mr-2"
                />
                <label htmlFor="2-year-renewal">2 Year</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="3-year-renewal"
                  className="rounded-sm mr-2"
                />
                <label htmlFor="3-year-renewal">3 Year</label>
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
        <div className="mt-6 flex flex-col">
          <AdditionalNotes />
        </div>
      </div>
    </>
  )
}

export default RequestRenewals
