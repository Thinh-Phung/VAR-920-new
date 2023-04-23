import React from "react"

const Card = ({ title, data, isCurrency, colorTitle, colorData, bgTitle }) => {
  const formatOption = {
    style: "currency",
    currency: "USD",
    notation: "compact"
  }
  const numberFormat = new Intl.NumberFormat("en-US", formatOption)
  return (
    <>
      <div className="w-full h-full">
        <p
          className={`h-2/5 rounded-t-xl border-b border-slate-300 text-white text-center py-1 md:py-2 text-sm lg:text-base shadow-md shadow-sky-100 
          ${bgTitle} ${colorTitle}`}
        >
          {title}
        </p>
        <p
          className={`h-3/5 rounded-b-xl bg-white text-[#5d5d5d] text-center py-4 text-base md:text-xl shadow-md shadow-sky-100
         ${colorData}`}
        >
          {isCurrency ? numberFormat.format(data) : data}
        </p>
      </div>
    </>
  )
}

export default Card
