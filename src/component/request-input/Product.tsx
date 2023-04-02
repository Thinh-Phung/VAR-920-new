import React from "react"

const Product = () => {
  return (
    <>
      <label htmlFor="product">Product</label>
      <input
        type="text"
        className="rounded-md mt-2 border-slate-200"
        id="product"
      />
    </>
  )
}

export default Product
