import React from "react"
import AdditionalNotes from "./request-input/AdditionalNotes"
import CurrentSpend from "./request-input/CurrentSpend"
import DecisionTimeFrame from "./request-input/DecisionTimeFrame"
import Product from "./request-input/Product"
import ReasonForRequest from "./request-input/ReasonForRequest"
import ServiceType from "./request-input/ServiceType"
import SupplierName from "./request-input/SupplierName"
import TargetPricing from "./request-input/TargetPricing"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestNegotiate = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <ServiceType />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <SupplierName />
          </div>
        </div>
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%] mt-6">
            <CurrentSpend />
          </div>
          <div className="flex flex-col md:w-[48%] mt-6">
            <TargetPricing />
          </div>
        </div>
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%] mt-6">
            <Product />
          </div>
          <div className="flex flex-col md:w-[48%] mt-6">
            <DecisionTimeFrame />
          </div>
        </div>
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%] mt-6">
            <ReasonForRequest />
          </div>
          <div className="flex flex-col md:w-[48%] mt-6">
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

export default RequestNegotiate
