import React from "react"
import CurrentChallenges from "./request-input/CurrentChallenges"
import CurrentSupplier from "./request-input/CurrentSupplier"
import ProductType from "./request-input/ProductType"
import Questions from "./request-input/Questions"
import UploadDocuments from "./request-input/UploadDocuments"

const RequestQuestion = () => {
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
      </div>
    </>
  )
}

export default RequestQuestion
