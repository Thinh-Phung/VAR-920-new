import React from "react"

const Questions = () => {
  return (
    <>
      <label
        htmlFor="questions"
        className="text-[#5C667A] text-base text-start"
      >
        Questions
      </label>
      <textarea
        id="questions"
        className="mt-2 h-20 rounded-md border-slate-200"
      ></textarea>
    </>
  )
}

export default Questions
