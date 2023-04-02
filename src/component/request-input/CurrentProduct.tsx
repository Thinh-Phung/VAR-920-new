import React from "react"

const CurrentProduct = () => {
  return (
    <>
      <label
        htmlFor="current-product"
        className="text-[#5C667A] text-base text-start"
      >
        Current Product
      </label>
      <input
        id="current-product"
        type="text"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default CurrentProduct
