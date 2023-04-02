import React from "react"

const RequestNote = () => {
  return (
    <>
      <label
        htmlFor="request-note"
        className="text-[#5C667A] text-base text-start"
      >
        Request Note
      </label>
      <textarea
        id="request-note"
        className="mt-2 h-20 rounded-md border-slate-200"
      ></textarea>
    </>
  )
}

export default RequestNote
