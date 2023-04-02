import React from "react"
import UploadDocuments from "./request-input/UploadDocuments"
import RequestNote from "./request-input/RequestNote"
import CurrentSpend from "./request-input/CurrentSpend"
import SupplierName from "./request-input/SupplierName"
const RequestContractstatus = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <p>Request Type</p>
        <div className="md:flex md:gap-8 mt-4">
          <div className="flex items-center gap-2">
            <input type="radio" id="inventory-new-contract" />
            <label htmlFor="inventory-new-contract">
              Inventory New Contract
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="existing-contract-info" />
            <label
              htmlFor="existing-contract-info"
              className="text-base text-start"
            >
              Existing Contract Info
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <SupplierName />
        </div>
        <div className="flex flex-col mt-6">
          <p>inventory new contract radio</p>
          <CurrentSpend />
        </div>
        <p>Check for (existing contract info radio)</p>
        <div className="md:flex md:gap-10 mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="rounded-sm mr-2"
              id="cancellation-penalties"
            />
            <label htmlFor="cancellation-penalties">
              Cancellation Penalties
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="negotiate-renewal-options"
              className="rounded-sm mr-2"
            />
            <label htmlFor="negotiate-renewal-options">
              Negotiate Renewal Options
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="alternative-suppliers"
              className="rounded-sm mr-2"
            />
            <label htmlFor="alternative-suppliers">Alternative Suppliers</label>
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <RequestNote />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <UploadDocuments />
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestContractstatus
