import React from "react"

const NoticePeriod = () => {
  return (
    <>
      <label
        htmlFor="notice-period"
        className="text-[#5C667A] text-base text-start"
      >
        Notice Period
      </label>
      <input
        id="notice-period"
        type="text"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default NoticePeriod
