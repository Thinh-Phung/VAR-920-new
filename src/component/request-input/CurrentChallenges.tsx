import React from "react"

const CurrentChallenges = () => {
  return (
    <>
      <label
        htmlFor="current-challenges"
        className="text-[#5C667A] text-base text-start"
      >
        Current Challenges
      </label>
      <textarea
        id="current-challenges"
        className="mt-2 h-20 rounded-md border-slate-200"
      ></textarea>
    </>
  )
}

export default CurrentChallenges
