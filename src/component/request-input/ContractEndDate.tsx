import React from "react"

const ContractEndDate = () => {
  return (
    <>
      <label
        htmlFor="contract-end-date"
        className="text-[#5C667A] text-base text-start"
      >
        Contract End Date
      </label>
      <input
        id="contract-end-date"
        type="date"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default ContractEndDate
