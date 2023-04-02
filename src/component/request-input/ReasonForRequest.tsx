import React from "react"

const ReasonForRequest = () => {
  return (
    <>
      <label htmlFor="reason-for-request">Reason for Request</label>
      <textarea
        id="reason-for-request"
        className="mt-2 h-20 rounded-md border-slate-200"
      ></textarea>
    </>
  )
}

export default ReasonForRequest
