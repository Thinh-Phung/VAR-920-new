import React from "react"
import CurrentChallenges from "./request-input/CurrentChallenges"
import CurrentSupplier from "./request-input/CurrentSupplier"
import ProductType from "./request-input/ProductType"
import Questions from "./request-input/Questions"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestSupplierDemo = () => {
  return (
    <>
      <div className="pt-6 px-2 md:px-6 text-start">
        <div className="md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <ProductType />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <CurrentSupplier />
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-between md:gap-1">
          <div className="flex flex-col md:w-[48%]">
            <CurrentChallenges />
          </div>
          <div className="flex flex-col md:w-[48%]">
            <UploadDocuments />
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <Questions />
        </div>
        <hr className="mt-6 h-2 bg-slate-100" />
        <div className="mt-6">
          <p className="text-center">Enter Days and Time Available for Call</p>
          <div className="mt-6 md:flex md:justify-between md:gap-1">
            <div className="flex flex-col md:w-[48%]">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="mt-2 rounded-md mr-2 border-slate-200"
                id="date"
              />
            </div>
            <div className="flex flex-col md:w-[48%]">
              <label htmlFor="time-slot">Time Slot</label>
              <input
                type="time"
                className="mt-2 rounded-md mr-2 border-slate-200"
                id="time-slot"
              />
            </div>
          </div>
          <div className="mt-6">
            <p>Select Timezone</p>
            <div className="md:flex md:gap-8 mt-4">
              <div className="flex items-center gap-2">
                <input type="radio" id="Eastern" />
                <label htmlFor="Eastern">Eastern</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Central" />
                <label htmlFor="Central" className="text-base text-start">
                  Central
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Mountain" />
                <label htmlFor="Mountain">Mountain</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Pacific" />
                <label htmlFor="Pacific" className="text-base text-start">
                  Pacific
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestSupplierDemo
