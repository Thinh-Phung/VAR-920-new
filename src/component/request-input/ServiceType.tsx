import React from "react"

const ServiceType = () => {
  return (
    <>
      <label htmlFor="service-type">Service Type</label>
      <select id="service-type" className="rounded-md border-slate-200 mt-2">
        <option value="new">New</option>
        <option value="existing">Existing</option>
      </select>
    </>
  )
}

export default ServiceType
