import React from "react"
import { CloudArrowUpIcon } from "@heroicons/react/24/outline"

const UploadDocuments = () => {
  return (
    <>
      <p className="text-[#5C667A] text-base text-start">Upload Documents</p>
      <button className="mt-2 bg-sky-400 rounded-md flex items-center w-fit px-2 py-1 text-white text-sm">
        <CloudArrowUpIcon className="h-7 w-7 mr-1" />
        <p>Upload Documents</p>
      </button>
      <p className="text-xs text-start mt-3">
        Allowed PDF, DOCX, XLSX, DOC files with maximum size for each: 2 MB
      </p>
      <div className="mt-1 flex justify-between items-center px-1 bg-slate-100">
        <p className="text-slate-500">Files Uploaded</p>
        <button className="rounded-md px-3 my-1 bg-slate-400 text-slate-700">
          Remove
        </button>
      </div>
    </>
  )
}

export default UploadDocuments
