import React from "react"
import { CloudArrowUpIcon } from "@heroicons/react/24/outline"
import UploadDocuments from "./request-input/UploadDocuments"
import AdditionalNotes from "./request-input/AdditionalNotes"
const RequestFindSupplierForm = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:gap-1 pt-6 px-2 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <label className="text-[#5C667A] text-base text-start">
            Find Suppliers For
          </label>
          <textarea className="mt-2 h-20 rounded-md border-slate-200"></textarea>
        </div>
        <div className="flex flex-col md:w-[48%]">
          <label className="text-[#5C667A] text-base text-start">
            Reason for looking
          </label>
          <textarea className="mt-2 h-20 rounded-md border-slate-200"></textarea>
        </div>
      </div>
      <div className="mt-6 md:flex md:justify-between md:gap-1 pt-6 px-2 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <AdditionalNotes />
        </div>
        <div className="flex flex-col md:w-[48%]">
          <UploadDocuments />
        </div>
      </div>
    </>
  )
}
export default RequestFindSupplierForm
