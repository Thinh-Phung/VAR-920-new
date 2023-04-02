import React from "react"
import RequestNote from "./request-input/RequestNote"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestGenerateReport = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label htmlFor="type-of-report">Type of Report</label>
            <input
              id="type-of-report"
              type="text"
              className="border-slate-200 rounded-md mt-2"
            />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <label htmlFor="report-time-frame">Report Time Frame</label>
            <input
              id="report-time-frame"
              type="text"
              className="border-slate-200 rounded-md mt-2"
            />
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

export default RequestGenerateReport
