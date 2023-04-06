import React from "react"

const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="flex flex-1 justify-between mx-auto w-full md:w-2/5 px-12 mt-8">
        <p
          className={`flex-shrink-0 rounded-full border h-8 w-8 text-center leading-8 ${
            progress === 1 ? "bg-[#2C87BF]" : "bg-[#A5A5A5]"
          } text-white text-base`}
        >
          1
        </p>
        <hr className="w-full text-[#5C667A] my-auto" />
        <p
          className={`flex-shrink-0 rounded-full border h-8 w-8 text-center leading-8 ${
            progress === 2 ? "bg-[#2C87BF]" : "bg-[#A5A5A5]"
          } text-white text-base`}
        >
          2
        </p>
        <hr className="w-full text-[#5C667A] my-auto" />
        <p
          className={`flex-shrink-0 rounded-full border h-8 w-8 text-center leading-8 ${
            progress === 3 ? "bg-[#2C87BF]" : "bg-[#A5A5A5]"
          } text-white text-base`}
        >
          3
        </p>
      </div>
      <div className="flex flex-1 justify-between mx-auto w-full md:w-2/5 px-4 mt-2">
        <p className="text-[#5C667A]">New Request</p>
        <p className="text-[#5C667A]">Request Details</p>
        <p className="text-[#5C667A]">Thank You!</p>
      </div>
    </>
  )
}

export default ProgressBar
