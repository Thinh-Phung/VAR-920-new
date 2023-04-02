import React from "react"

const AdditionalNotes = () => {
  return (
    <>
      <label
        htmlFor="additional-notes"
        className="text-[#5C667A] text-base text-start"
      >
        Additional Notes
      </label>
      <textarea
        id="additional-notes"
        className="mt-2 h-20 rounded-md border-slate-200"
      ></textarea>
    </>
  )
}

export default AdditionalNotes
