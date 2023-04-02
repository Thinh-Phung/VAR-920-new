import React from "react"

const SpecificRequirements = () => {
  return (
    <>
      <div className="mt-6 flex flex-col pt-4">
        <label
          htmlFor="specific-requirements-of-suppliers"
          className="text-[#5C667A] text-base text-start"
        >
          Specific Requirements Of Suppliers
        </label>
        <textarea
          id="specific-requirements-of-suppliers"
          className="mt-2 h-20 rounded-md border-slate-200"
        ></textarea>
      </div>
    </>
  )
}

export default SpecificRequirements
