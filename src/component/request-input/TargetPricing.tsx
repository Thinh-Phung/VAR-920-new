import React from "react"

const TargetPricing = () => {
  return (
    <>
      <label
        htmlFor="target-pricing"
        className="text-[#5C667A] text-base text-start"
      >
        Target Pricing
      </label>
      <input
        id="target-pricing"
        type="text"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default TargetPricing
