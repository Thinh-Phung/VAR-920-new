import React from "react"
import Navbar from "../component/Navbar"
import { useState } from "react"
import Oneview from "../component/Oneview"
import Mapview from "../component/Mapview"
import VendorView from "../component/VendorView"
import PerformanceView from "../component/PerformanceView"
import InventoryView from "../component/InventoryView"
import OderView from "../component/OderView"

const Manage = () => {
  const [activeTab, setActiveTab] = useState("oneview")
  return (
    <div className="bg-slate-50">
      <Navbar currentPage="manage" />
      <div
        className="mx-auto w-[95%] mt-4 lg:w-5/6 flex items-center justify-start lg:space-x-4 text-[#828282]
      border-b border-[#dee2e6] overflow-auto"
      >
        <button
          onClick={() => {
            setActiveTab("oneview")
          }}
          className={`px-4 py-4 hover:text-[#5C667A] ${
            activeTab === "oneview"
              ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
              : ""
          }`}
        >
          Oneview
        </button>
        <button
          onClick={() => {
            setActiveTab("mapview")
          }}
          className={`px-4 py-4 hover:text-[#5C667A] ${
            activeTab === "mapview"
              ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
              : ""
          }`}
        >
          Mapview
        </button>
        <button
          onClick={() => {
            setActiveTab("vendor view")
          }}
          className={`px-4 py-4 hover:text-[#5C667A] ${
            activeTab === "vendor view"
              ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
              : ""
          }`}
        >
          Vendor View
        </button>
        <button
          onClick={() => {
            setActiveTab("performance view")
          }}
          className={`px-4 py-4 hover:text-[#5C667A] ${
            activeTab === "performance view"
              ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
              : ""
          }`}
        >
          Performance View
        </button>
        <button
          onClick={() => {
            setActiveTab("inventory view")
          }}
          className={`px-4 py-4 hover:text-[#5C667A] ${
            activeTab === "inventory view"
              ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
              : ""
          }`}
        >
          Inventory View
        </button>
        <button
          onClick={() => {
            setActiveTab("order view")
          }}
          className={`px-4 py-4 hover:text-[#5C667A] ${
            activeTab === "order view"
              ? "border-b-4 border-[#2c87bf] text-[#5C667A]"
              : ""
          }`}
        >
          Order View
        </button>
      </div>
      <div className="mx-auto w-[90%] mt-8 pb-12">
        {activeTab === "oneview" && <Oneview />}
        {activeTab === "mapview" && <Mapview />}
        {activeTab === "vendor view" && <VendorView />}
        {activeTab === "performance view" && <PerformanceView />}
        {activeTab === "inventory view" && <InventoryView />}
        {activeTab === "order view" && <OderView />}
      </div>
    </div>
  )
}

export default Manage
