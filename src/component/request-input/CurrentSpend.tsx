import React from "react"

const CurrentSpend = () => {
  return (
    <>
      <label
        htmlFor="current-spend"
        className="text-[#5C667A] text-base text-start"
      >
        Current Spend
      </label>
      <input
        id="current-spend"
        type="text"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default CurrentSpend
