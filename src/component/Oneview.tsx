import React from "react"
import { useState } from "react"
import onHoldIcon from "..//assets/home-page/on_hold.svg"
import contractIcon from "..//assets/home-page/contract.svg"
import completeIcon from "..//assets/home-page/complete.svg"
import Card from "./Card"
import Table from "./Table"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import TableSyncfusion from "../pages/TableSyncfusion"

//data from back end
const totalContractTableInfo: Object[] = [
  {
    orderID: "T05",
    product: "PRI",
    serviceName: "PRI tester",
    supplier: "Zayo",
    term: 11,
    contractDate: new Date("02/03/2017"),
    endDate: new Date("06/09/2017"),
    noticePeriod: 60,
    MRC: 500,
    annualSpend: 6100
  },
  {
    orderID: "NT01",
    product: "PSTN",
    serviceName: "PN Local Line",
    supplier: "Nitel",
    term: 10,
    contractDate: new Date("02/07/2017"),
    endDate: new Date("02/11/2017"),
    noticePeriod: 30,
    MRC: 500,
    annualSpend: 6050
  },
  {
    orderID: "T03",
    product: "Software",
    serviceName: "PRI tester",
    supplier: "Zayo",
    term: 12,
    contractDate: new Date("02/03/2017"),
    endDate: new Date("02/09/2019"),
    noticePeriod: 60,
    MRC: 500,
    annualSpend: 6100
  },
  {
    orderID: "T06",
    product: "Order 1",
    serviceName: "PRI tester",
    supplier: "Zayo",
    term: 12,
    contractDate: new Date("02/03/2017"),
    endDate: new Date("02/09/2020"),
    noticePeriod: 60,
    MRC: 500,
    annualSpend: 6100
  }
]

const expiredContractsTableInfo = [
  {
    orderID: "T06",
    product: "PRITA",
    serviceName: "PRI tester",
    supplier: "Zayo",
    term: 11,
    contractDate: new Date("02/03/2017"),
    endDate: new Date("06/09/2017"),
    noticePeriod: 60,
    MRC: 500,
    annualSpend: 6100
  },
  {
    orderID: "NT0111",
    product: "ABC",
    serviceName: "PN Local Line",
    supplier: "Nitel",
    term: 20,
    contractDate: new Date("02/07/2017"),
    endDate: new Date("02/11/2017"),
    noticePeriod: 30,
    MRC: 500,
    annualSpend: 6050
  },
  {
    orderID: "T033",
    product: "Software",
    serviceName: "PRI tester",
    supplier: "Zayo",
    term: 12,
    contractDate: new Date("02/03/2017"),
    endDate: new Date("02/09/2019"),
    noticePeriod: 60,
    MRC: 500,
    annualSpend: 6100
  }
]
let tableData: Object[] = [{}]
const Oneview = () => {
  const [customerAction, setCustomerAction] = useState("notifications")
  const [activeTab, setActiveTab] = useState("total contracts")
  if (activeTab === "total contracts") {
    tableData = [...totalContractTableInfo]
  } else if (activeTab === "expired contracts") {
    tableData = [...expiredContractsTableInfo]
  } else {
    tableData = []
  }

  return (
    <>
      <div className="space-y-4 lg:space-y-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 xl:gap-6">
          <Card
            title="Spend Managed"
            data={25610000}
            isCurrency
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total MRC"
            data={2130000}
            isCurrency
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total Sites"
            data={18}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total Suppliers"
            data={13}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total Products"
            data={16}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total Services"
            data={46}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
        </div>
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-6 md:gap-2 lg:gap-4 xl:gap-6 ">
          <div className="col-span-3 rounded-xl bg-white shadow-md shadow-sky-100 h-80">
            chart
          </div>
          <div className="col-span-3 rounded-xl bg-white shadow-md shadow-sky-100 h-80">
            inventory table
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-md shadow-sky-100">
          <div
            className="pt-4 mx-auto w-[98%] mt-4 flex items-center justify-between space-x-6 text-[#828282]
      border-b border-[#dee2e6] overflow-auto"
          >
            <div className="px-4">
              <p
                className={`text-center ${
                  activeTab === "total contracts" ? "text-[#2c87bf]" : ""
                }`}
              >
                45
              </p>
              <button
                onClick={() => {
                  setActiveTab("total contracts")
                }}
                className={`hover:text-[#5C667A] text-sm ${
                  activeTab === "total contracts"
                    ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                    : ""
                }`}
              >
                Total Contracts
              </button>
            </div>
            <div className="px-4">
              <p
                className={`text-center ${
                  activeTab === "expired contracts" ? "text-[#2c87bf]" : ""
                }`}
              >
                43
              </p>
              <button
                onClick={() => {
                  setActiveTab("expired contracts")
                }}
                className={`hover:text-[#5C667A] text-sm ${
                  activeTab === "expired contracts"
                    ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                    : ""
                }`}
              >
                Expired Contracts
              </button>
            </div>
            <div className="px-4">
              <p
                className={`text-center ${
                  activeTab === "expiring in 30 days" ? "text-[#2c87bf]" : ""
                }`}
              >
                0
              </p>
              <button
                onClick={() => {
                  setActiveTab("expiring in 30 days")
                }}
                className={`hover:text-[#5C667A] text-sm ${
                  activeTab === "expiring in 30 days"
                    ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                    : ""
                }`}
              >
                Expiring in 30 Days
              </button>
            </div>
            <div className="px-4">
              <p
                className={`text-center ${
                  activeTab === "expiring in 60 days" ? "text-[#2c87bf]" : ""
                }`}
              >
                0
              </p>
              <button
                onClick={() => {
                  setActiveTab("expiring in 60 days")
                }}
                className={`hover:text-[#5C667A] text-sm ${
                  activeTab === "expiring in 60 days"
                    ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                    : ""
                }`}
              >
                Expiring in 60 Days
              </button>
            </div>
            <div className="px-4">
              <p
                className={`text-center ${
                  activeTab === "expiring in 90 days" ? "text-[#2c87bf]" : ""
                }`}
              >
                0
              </p>
              <button
                onClick={() => {
                  setActiveTab("expiring in 90 days")
                }}
                className={`hover:text-[#5C667A] text-sm ${
                  activeTab === "expiring in 90 days"
                    ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                    : ""
                }`}
              >
                Expiring in 90 Days
              </button>
            </div>
            <div className="px-4">
              <p
                className={`text-center ${
                  activeTab === "cancelled contracts" ? "text-[#2c87bf]" : ""
                }`}
              >
                2
              </p>
              <button
                onClick={() => {
                  setActiveTab("cancelled contracts")
                }}
                className={`hover:text-[#5C667A] text-sm ${
                  activeTab === "cancelled contracts"
                    ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
                    : ""
                }`}
              >
                Cancelled Contracts
              </button>
            </div>
          </div>
          <div className="w-[98%] m-auto">
            {activeTab === "total contracts" && (
              <TableSyncfusion inTab="total contracts" />
            )}
            {activeTab === "expired contracts" && (
              <TableSyncfusion inTab="expired contracts" />
            )}
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-2 lg:gap-4 xl:gap-6">
          <div className="col-span-2 rounded-xl bg-white shadow-md shadow-sky-100 h-80">
            savings chart
          </div>
          <div className="col-span-1 rounded-xl bg-white shadow-md shadow-sky-100 md:h-80 overflow-scroll">
            <div className="mt-4 px-0 lg:px-4 pb-2 flex items-center justify-center">
              <button
                className={`text-sm border-r pr-1 lg:pr-3 lg:text-base lg:text-center ${
                  customerAction === "notifications"
                    ? "text-black"
                    : "text-[#a5a5a5]"
                }`}
                onClick={() => setCustomerAction("notifications")}
              >
                Notifications
              </button>
              <button
                className={`text-sm pl-1 lg:pl-3 lg:text-base ${
                  customerAction === "pending actions"
                    ? "text-black"
                    : "text-[#a5a5a5]"
                }`}
                onClick={() => setCustomerAction("pending actions")}
              >
                Pending Actions
              </button>
            </div>
            <hr className="w-full lg:w-5/6 mx-auto mt-2" />
            {customerAction === "notifications" && (
              <div className="w-full lg:w-5/6 mx-auto">
                <div className="flex my-4 mr-6 ml-2 rounded-lg border py-2 pr-4 pl-1">
                  <div className="flex-none mx-2 mt-[0.3rem]">
                    <img
                      src={completeIcon}
                      alt="orders complete icon image"
                      className="w-8 2xl:w-10 mt-[0.3rem]"
                    />
                  </div>
                  <div className="my-auto text-xs 2xl:text-base">
                    <p className="">Orders – Completed</p>
                    <p className="font-light text-[#828282]">
                      ORD – 123 with AT&T was installed on June 20th, 2022
                    </p>
                  </div>
                </div>
                <div className="flex my-4 mr-6 ml-2 rounded-lg border py-2 pr-4 pl-1">
                  <div className="flex-none mx-2 mt-[0.3rem]">
                    <img
                      src={contractIcon}
                      alt="contract icon image"
                      className="w-8 2xl:w-10 mt-[0.3rem]"
                    />
                  </div>
                  <div className="my-auto text-xs 2xl:text-base">
                    <p className="">Contracts</p>
                    <p className="font-light text-[#828282]">
                      CID – 123 or ORD – 123 with AT&T is expiring in 60 days
                      with 30 days notice period
                    </p>
                  </div>
                </div>
                <div className="flex my-4 mr-6 ml-2 rounded-lg border py-2 pr-4 pl-1">
                  <div className="flex-none mx-2 mt-[0.3rem]">
                    <img
                      src={onHoldIcon}
                      alt="order hold on icon image"
                      className="w-8 2xl:w-10 mt-[0.3rem]"
                    />
                  </div>
                  <div className="my-auto text-xs 2xl:text-base">
                    <p className="">Orders – On Hold</p>
                    <p className="font-light text-[#828282]">
                      ORD – 123 with AT&T was put On Hold on September, 21, 2022
                    </p>
                  </div>
                </div>
                <div className="flex my-4 mr-6 ml-2 rounded-lg border py-2 pr-2 pl-1">
                  <div className="flex-none mx-2 mt-[0.3rem]">
                    <img
                      src={onHoldIcon}
                      alt="order hold on icon image"
                      className="w-8 2xl:w-10 mt-[0.3rem]"
                    />
                  </div>
                  <div className="my-auto text-xs 2xl:text-base">
                    <p className="">Order – Cancelled</p>
                    <p className="font-light text-[#828282]">
                      ORD – 123 with AT&T was cancelled on September, 21, 2022
                      without penalty
                    </p>
                  </div>
                </div>
              </div>
            )}
            {customerAction === "pending actions" && (
              <div className="w-[90%] lg:w-5/6 mx-auto flex flex-col mt-4 space-y-4">
                <div>
                  <input
                    type="checkbox"
                    className="rounded-sm mr-2"
                    id="action-1"
                  />
                  <label htmlFor="action-1">action 1</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="rounded-sm mr-2"
                    id="action-2"
                  />
                  <label htmlFor="action-2">action 2</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="rounded-sm mr-2"
                    id="action-3"
                  />
                  <label htmlFor="action-3">action 3</label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Oneview
