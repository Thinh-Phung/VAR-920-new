import React from "react"
import Card from "./Card"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import {
  ColumnDirective,
  ColumnsDirective,
  PageSettingsModel,
  TreeGridComponent,
  Filter,
  Inject,
  Page,
  Sort
} from "@syncfusion/ej2-react-treegrid"
import { TextWrapSettingsModel } from "@syncfusion/ej2-grids"

import { totalContractsData, expiredContractsData } from "../Data"
const tableTitles = [
  "Name",
  "Sites",
  "Products",
  "Service",
  "Tickets",
  "Escalations",
  "Contracts",
  "MRC",
  "Annual Spend"
]
const tableInfos = [
  {
    id: 1,
    Name: "Zayo",
    Contracts: "1",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000"
  },
  {
    id: 2,
    Name: "Cisso",
    Contracts: "1",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000"
  },
  {
    id: 3,
    Name: "Equinix",
    Contracts: "1",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000"
  },
  {
    id: 4,
    Name: "Tom",
    Contracts: "1",

    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000"
  },
  {
    id: 5,
    Name: "John",
    Contracts: "1",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000"
  }
]
const VendorView = () => {
  const handleClick = () => {
    //sap xe thu tu
  }
  const pageOptions: PageSettingsModel = { pageSize: 1 }
  const settings: TextWrapSettingsModel = { wrapMode: "Both" }
  const customAttributes: any = { class: "customcssHeaderVendorView" }
  const customizeCell = (args: any) => {
    if (args.column.field == "orderID") {
      args.cell.style.color = "#2c87bf"
    }
    if (args.column.field == "annualSpend") {
      args.cell.style.color = "#21ba86"
    }
    if (args.column.field != "annualSpend" && args.column.field != "orderID") {
      args.cell.style.color = "#5c667a"
    }
  }
  function orderIDTemplate(props): any {
    return (
      <div>
        <a target="_blank" href="http://www.google.com">
          {props.orderID}
        </a>
      </div>
    )
  }
  return (
    <>
      <div className="space-y-4 lg:space-y-6 bg-slate-50 h-screen">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 xl:gap-6">
          <Card
            title="Total Suppliers"
            data={13}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Annual Spend"
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
            title="Total Products"
            data={16}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total Sites"
            data={18}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
          <Card
            title="Total Contracs"
            data={45}
            isCurrency={false}
            bgTitle={"bg-[#569fcc]"}
          />
        </div>
        {/* <div className="rounded-xl bg-white shadow-md shadow-sky-100">
          <div className="flow-root mx-auto py-4 rounded-xl bg-white px-4">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-auto">
                  <table className="min-w-full text-[#5C667A] border-0">
                    <thead className="bg-[#f3f7fa]">
                      <tr>
                        {tableTitles.map((title) => (
                          <th className="px-2 py-2 text-center text-sm font-thin">
                            <div className="group inline-flex gap-0 items-center text-black">
                              {title}
                              <span className="ml-2 flex-none rounded text-slate-500">
                                <ChevronUpDownIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                  onClick={() => {
                                    handleClick
                                  }}
                                />
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white text-center">
                      {tableInfos.map((info) => (
                        <tr key={info["id"]}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <button
                              className="text-[#2C87BF] hover:text-black focus:outline-none focus:p-1 focus:rounded-md focus:ring focus:ring-cyan-100"
                              onClick={() => {}}
                            >
                              {info["Name"]}
                            </button>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["Sites"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["Products"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["Service"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["Tickets"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["Escalations"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["Contracts"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {info["MRC"]}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-[#21ba86]">
                            {info["Annual Spend"]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-xl p-4 bg-white shadow-md shadow-sky-100">
          <TreeGridComponent
            dataSource={totalContractsData}
            treeColumnIndex={1}
            allowPaging={false}
            allowSorting={true}
            allowTextWrap={true}
            textWrapSettings={settings}
            queryCellInfo={customizeCell}
          >
            <Inject services={[Page, Sort, Filter]} />
            <ColumnsDirective>
              <ColumnDirective
                field="orderID"
                headerText="Order ID"
                width="80"
                textAlign="Left"
                template={orderIDTemplate}
                customAttributes={customAttributes}
              />
              <ColumnDirective
                field="product"
                headerText="Product"
                width="100"
                textAlign="Left"
                customAttributes={customAttributes}
              />
              <ColumnDirective
                field="serviceName"
                headerText="Service Name"
                width="100"
                textAlign="Left"
                customAttributes={customAttributes}
              />
              <ColumnDirective
                field="supplier"
                headerText="Supplier"
                width="100"
                textAlign="Left"
                customAttributes={customAttributes}
              />
              <ColumnDirective
                field="term"
                headerText="Term"
                width="80"
                textAlign="Left"
                customAttributes={customAttributes}
              />
              <ColumnDirective
                field="contractDate"
                headerText="Contract Date"
                width="100"
                format="yMd"
                textAlign="Left"
                customAttributes={customAttributes}
                type="date"
              />
              <ColumnDirective
                field="endDate"
                headerText="End Date"
                width="100"
                format="yMd"
                textAlign="Left"
                customAttributes={customAttributes}
                type="date"
              />
              <ColumnDirective
                field="noticePeriod"
                headerText="Notice Period"
                width="90"
                textAlign="Left"
                customAttributes={customAttributes}
                type="number"
              />
              <ColumnDirective
                field="MRC"
                headerText="MRC"
                width="70"
                textAlign="Left"
                customAttributes={customAttributes}
                type="number"
                format="C0"
              />
              <ColumnDirective
                field="annualSpend"
                headerText="Annual Spend"
                width="90"
                textAlign="Left"
                customAttributes={customAttributes}
                type="number"
                format="C0"
              />
            </ColumnsDirective>
          </TreeGridComponent>
        </div>
      </div>
    </>
  )
}

export default VendorView
