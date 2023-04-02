import React from "react"
import SpecificRequirements from "./request-input/SpecificRequirements"
import UploadDocuments from "./request-input/UploadDocuments"
const RequestAssessment = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <p>Type of Assessment</p>
        <div className="md:grid md:grid-cols-3 md:gap-1 mt-4">
          <div className="col-span-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="compliance"
                className="rounded-sm mr-2"
              />
              <label htmlFor="compliance">Compliance</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="SDWAN" className="rounded-sm mr-2" />
              <label htmlFor="SDWAN">SDWAN</label>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="security"
                className="rounded-sm mr-2"
              />
              <label htmlFor="security">Security</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cloud" className="rounded-sm mr-2" />
              <label htmlFor="cloud">Cloud</label>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center">
              <input type="checkbox" id="telecom" className="rounded-sm mr-2" />
              <label htmlFor="compliance">Telecom</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="mobility"
                className="rounded-sm mr-2"
              />
              <label htmlFor="mobility">Mobility</label>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 px-2 md:flex md:justify-between md:gap-1 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <label
            htmlFor="assessment-goals"
            className="text-[#5C667A] text-base text-start"
          >
            Assessment Goals
          </label>
          <textarea
            id="assessment-goals"
            className="mt-2 h-20 rounded-md border-slate-200"
          ></textarea>
        </div>
        <div className="flex flex-col md:w-[48%]">
          <UploadDocuments />
        </div>
      </div>
      <div className="px-2 md:px-6">
        <SpecificRequirements />
      </div>
    </>
  )
}

export default RequestAssessment
