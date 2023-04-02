import React from "react"
import CurrentProduct from "./request-input/CurrentProduct"
import CurrentSupplier from "./request-input/CurrentSupplier"
import SpecificRequirements from "./request-input/SpecificRequirements"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestBenchmark = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:gap-1 pt-6 px-2 md:px-6">
        <div className="flex flex-col md:w-[48%]">
          <CurrentProduct />
        </div>
        <div className="flex flex-col md:w-[48%]">
          <CurrentSupplier />
        </div>
      </div>
      <div className="mt-6 flex flex-col pt-4 px-2 md:px-6">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <label
              htmlFor="reason-for-benchmark"
              className="text-[#5C667A] text-base text-start"
            >
              Reason for Benchmark
            </label>
            <textarea
              id="reason-for-benchmark"
              className="mt-2 h-20 rounded-md border-slate-200"
            ></textarea>
          </div>
          <div className="flex flex-col md:w-[48%]">
            <UploadDocuments />
          </div>
        </div>

        <SpecificRequirements />
        <p className="mt-6 pt-4 text-[#5C667A] text-base text-start">
          Decision Time Frame
        </p>
        <div className="mt-4 md:flex md:w-4/5 md:justify-between xl:w-3/5">
          <div className="flex items-center">
            <input type="radio" id="day" className="mr-1" />
            <label htmlFor="day">90 Days</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="month" className="mr-1" />
            <label htmlFor="month">6 Months</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="year" className="mr-1" />
            <label htmlFor="year">1 Year</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestBenchmark
