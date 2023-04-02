import React from "react"

const SupplierName = () => {
  return (
    <>
      <label htmlFor="supplier-name">Supplier Name</label>
      <input
        type="text"
        id="supplier-name"
        className="mt-2 rounded-md border-slate-200"
      />
    </>
  )
}

export default SupplierName
