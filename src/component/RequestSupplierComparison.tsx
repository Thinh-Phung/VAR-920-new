import React from "react"
import AdditionalNotes from "./request-input/AdditionalNotes"
import CurrentSupplier from "./request-input/CurrentSupplier"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestSupplierComparison = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <CurrentSupplier />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <p>Compare Type</p>
            <div className="mt-2 flex items-center">
              <input type="checkbox" className="rounded-sm mr-2" id="cost" />
              <label htmlFor="cost">Cost</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="capabilities"
                className="rounded-sm mr-2"
              />
              <label htmlFor="capabilities">Capabilities</label>
            </div>
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <AdditionalNotes />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <UploadDocuments />
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestSupplierComparison
