import React from "react"

const ProductType = () => {
  return (
    <>
      <label
        htmlFor="product-type"
        className="text-[#5C667A] text-base text-start"
      >
        Product Type
      </label>
      <input
        id="product-type"
        type="text"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default ProductType
