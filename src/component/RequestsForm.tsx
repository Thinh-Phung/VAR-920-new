import React from "react"
import RequestAssessment from "../component/RequestAssessment"
import RequestBenchmark from "../component/RequestBenchmark"

const RequestsForm = ({ requestType, handleSubmit }) => {
  const typeName = {
    assessment: RequestAssessment,
    benchmark: RequestBenchmark
  }

  let RequestTypeComponent = typeName[requestType]
  return (
    <>
      <div className="mx-auto w-full md:w-3/5 py-2 px-3">
        <p className="bg-[#2C87BF] mt-8 text-white py-2 text-base font-bold text-center rounded-t-lg">
          Request Details
        </p>
        <div className="bg-white text-center pb-8 rounded-b-md text-base text-[#5C667A]">
          <RequestTypeComponent />
          <button
            className="mt-6 rounded-md bg-[#2C87BF] text-white
              px-4 py-2 hover:bg-cyan-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default RequestsForm
