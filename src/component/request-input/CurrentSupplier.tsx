import React from "react"

const CurrentSupplier = () => {
  return (
    <>
      <label
        htmlFor="current-supplier"
        className="text-[#5C667A] text-base text-start"
      >
        Current Supplier
      </label>
      <input
        id="current-supplier"
        type="text"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default CurrentSupplier
