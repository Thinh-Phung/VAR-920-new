import React from "react"

const RequestStep3 = () => {
  return (
    <>
      <div className="mx-auto w-full md:w-3/5 py-2 px-3">
        <p className="bg-[#2C87BF] mt-8 text-white py-2 text-base font-bold text-center rounded-t-lg">
          Thank You
        </p>
        <div className="bg-white text-center pb-8 rounded-b-md text-base text-[#5C667A]">
          <p className="py-4 text-[#5C667A] text-lg font bold border-b">
            THANK YOU!
          </p>
          <p className="text-[#828282] w-3/4 mx-auto mt-4">
            Thank you for your request. Varisource team will review and get back
            to you within 24-48 hours with any additional questions or info
            needed.
          </p>
          <button
            className="mt-4 rounded-md bg-[#2C87BF] text-white
           px-4 py-2 hover:bg-cyan-500"
          >
            Done
          </button>
        </div>
      </div>
    </>
  )
}

export default RequestStep3
