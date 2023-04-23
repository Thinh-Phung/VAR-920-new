import React from "react"
import Card from "./Card"
import { useState } from "react"
import Table from "./Table"

const tableTitles = [
  "Order ID",
  "Service",
  "Supplier",
  "Install Date",
  "MRC",
  "Annual Spend"
]
const thirtyDaysDeliveryInfo = [
  {
    id: 1,
    "Order ID": "ZY-0098",
    Service: "Dedicated Internet",
    Supplier: "Zayo",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  },
  {
    id: 2,
    "Order ID": "ZY-0098",
    Service: "Dedicated Internet",
    Supplier: "Zayo",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  },
  {
    id: 3,
    "Order ID": "ZY-0098",
    Service: "Dedicated Internet",
    Supplier: "Zayo",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  },
  {
    id: 4,
    "Order ID": "ZY-0098",
    Service: "Dedicated Internet",
    Supplier: "Zayo",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  },
  {
    id: 5,
    "Order ID": "ZY-0098",
    Service: "Dedicated Internet",
    Supplier: "Zayo",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  }
]
const sixtyDaysDeliveryInfo = [
  {
    id: 1,
    "Order ID": "ZY-0098123123",
    Service: "Dedicated Internet",
    Supplier: "John",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  }
]
const ninetyDaysDeliveryInfo = [
  {
    id: 1,
    "Order ID": "ZY-0098123123",
    Service: "Dedicated Internet",
    Supplier: "John-Wick",
    "Install Date": "09/20/2022",
    MRC: "$500",
    "Annual Spend": "$6000"
  }
]
let tableInfo = [{}]
const OderView = () => {
  const [activeTab, setActiveTab] = useState("30 days delivery")
  if (activeTab === "30 days delivery") {
    tableInfo = [...thirtyDaysDeliveryInfo]
  } else if (activeTab === "60 days delivery") {
    tableInfo = [...sixtyDaysDeliveryInfo]
  } else if (activeTab === "90 days delivery") {
    tableInfo = [...ninetyDaysDeliveryInfo]
  }
  return (
    <>
      <div className="space-y-4 lg:space-y-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 xl:gap-6">
          <Card title="Total Sites" data="18" bgTitle="bg-[#4ed534]" />
          <Card title="Total Orders" data="37" bgTitle="bg-[#4ed534]" />
          <Card title="Orders In Progress" data="3" bgTitle="bg-[#ffc633]" />
          <Card title="Orders On-Hold" data="1" bgTitle="bg-[#ff5151]" />
          <Card title="Orders Installed" data="33" bgTitle="bg-[#4ed534]" />
          <Card title="Open Tickets" data="2" bgTitle="bg-[#ff5151]" />
        </div>
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-6 md:gap-2 lg:gap-4 xl:gap-6 ">
          <div className="col-span-3 rounded-xl bg-white shadow-md shadow-sky-100 h-96">
            chart
          </div>
          <div className="col-span-3 rounded-xl bg-white shadow-md shadow-sky-100 h-96 overflow-auto">
            <div
              className="pt-2 mx-auto w-[95%] mt-4 flex items-center justify-between space-x-6 text-[#828282]
      border-b border-[#dee2e6] overflow-auto"
            >
              <div className="px-2">
                <p
                  className={`text-center ${
                    activeTab === "30 days delivery" ? "text-[#2c87bf]" : ""
                  }`}
                >
                  30
                </p>
                <button
                  onClick={() => {
                    setActiveTab("30 days delivery")
                  }}
                  className={`hover:text-[#5C667A] text-sm ${
                    activeTab === "30 days delivery"
                      ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                      : ""
                  }`}
                >
                  Days Delivery(3)
                </button>
              </div>
              <div className="px-2">
                <p
                  className={`text-center ${
                    activeTab === "60 days delivery" ? "text-[#2c87bf]" : ""
                  }`}
                >
                  60
                </p>
                <button
                  onClick={() => {
                    setActiveTab("60 days delivery")
                  }}
                  className={`hover:text-[#5C667A] text-sm ${
                    activeTab === "60 days delivery"
                      ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                      : ""
                  }`}
                >
                  Days Delivery(0)
                </button>
              </div>
              <div className="px-2">
                <p
                  className={`text-center ${
                    activeTab === "90 days delivery" ? "text-[#2c87bf]" : ""
                  }`}
                >
                  90
                </p>
                <button
                  onClick={() => {
                    setActiveTab("90 days delivery")
                  }}
                  className={`hover:text-[#5C667A] text-sm ${
                    activeTab === "90 days delivery"
                      ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                      : ""
                  }`}
                >
                  Days Delivery(0)
                </button>
              </div>
            </div>
            <div className="w-[95%] m-auto">
              {/* <Table
                tableInfos={tableInfo}
                tableTitles={tableTitles}
                isArrange={false}
              /> */}
              <div className="flow-root mx-auto py-2">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="min-w-full py-0 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-auto">
                      <table className="min-w-full text-[#5C667A] border-0">
                        <thead className="bg-[#569FCC]">
                          <tr>
                            {tableTitles.map((title) => (
                              <th className="px-1 py-2 text-center text-sm font-normal">
                                <div className="group inline-flex gap-0 items-center text-white">
                                  {title}
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white text-center">
                          {tableInfo.map((info) => (
                            <tr key={info["id"]}>
                              <td className="whitespace-nowrap px-1 py-4 text-sm">
                                <button
                                  className="text-[#2C87BF] hover:text-black focus:outline-none focus:p-1 focus:rounded-md focus:ring focus:ring-cyan-100"
                                  onClick={() => {}}
                                >
                                  {info[tableTitles[0]]}
                                </button>
                              </td>
                              <td className="whitespace-nowrap px-1 py-0 text-sm">
                                {info[tableTitles[1]]}
                              </td>
                              <td className="whitespace-nowrap px-1 py-0 text-sm">
                                {info[tableTitles[2]]}
                              </td>
                              <td className="whitespace-nowrap px-1 py-0 text-sm">
                                {info[tableTitles[3]]}
                              </td>
                              <td className="whitespace-nowrap px-1 py-0 text-sm">
                                {info[tableTitles[4]]}
                              </td>
                              <td className="whitespace-nowrap px-0s py-0 text-sm">
                                {info[tableTitles[5]]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-white bg-[#2c87bf] rounded-t-md text-center h-10 leading-10 text-sm">
            Project Updates
          </p>
          <div className="overflow-auto">
            <table className="bg-white rounded-b-md shadow-md shadow-sky-100 h-10 leading-10 w-full">
              <tr className="h-10 leading-10 text-sm">
                <th className="font-thin px-4">Order ID</th>
                <th className="font-thin pr-4">Site ID</th>
                <th className="font-thin pr-4">Date</th>
                <th className="font-thin pr-4">Project Updates</th>
                <th className="font-thin pr-4">Orders Submitted</th>
                <th className="font-thin pr-4">Site Survey</th>
                <th className="font-thin pr-4">Estimated Delivery</th>
                <th className="font-thin pr-4">Firm Delivery</th>
                <th className="font-thin pr-4">Completion</th>
              </tr>
            </table>
          </div>
        </div>
        <div className="w-full">
          <p className="text-white bg-[#2c87bf] rounded-t-md text-center h-10 leading-10 text-sm">
            Customer Actions
          </p>
          <div className="overflow-auto">
            <table className="bg-white rounded-b-md shadow-md shadow-sky-100 w-full overflow-auto">
              <tr className="text-sm h-10 leading-10">
                <th className="font-thin">Oder ID</th>
                <th className="font-thin">Site ID</th>
                <th className="font-thin">Supplier</th>
                <th className="font-thin">Order Date</th>
                <th className="font-thin">Pending Action</th>
                <th className="font-thin">Last Update</th>
                <th className="font-thin">Action Complete</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default OderView
