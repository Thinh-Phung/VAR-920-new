import React from "react"
import Card from "./Card"
const Mapview = () => {
  return (
    <>
      <div className="space-y-4 lg:space-y-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-7 lg:gap-2 xl:gap-6">
          <Card
            bgTitle="bg-white"
            title="Total Sites"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            data={18}
          />
          <Card
            bgTitle="bg-white"
            title="Total Countries"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            data={5}
          />
          <Card
            bgTitle="bg-white"
            title="Total Suppliers"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            data={14}
          />
          <Card
            bgTitle="bg-white"
            title="Total Products"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            data={16}
          />
          <Card
            bgTitle="bg-white"
            title="Total Services"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            data={54}
          />
          <Card
            bgTitle="bg-white"
            title="Contract Exp (60 Days)"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            data={0}
          />
          <Card
            bgTitle="bg-white"
            title="Annual Spend"
            colorTitle="text-black"
            colorData="text-[#33d69f]"
            isCurrency
            data={25610000}
          />
        </div>
        <div className="h-60 bg-white">map</div>
      </div>
    </>
  )
}

export default Mapview
