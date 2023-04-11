import React from "react"
import Table from "./Table"
const tableTitles = [
  "Rank #",
  "Supplier",
  "Service",
  "Sites",
  "Products",
  "Tickets",
  "Escalations",
  "Competitiveness",
  "MRC",
  "Annual Spend",
  "Overall Scroce"
]
const tableInfos = [
  {
    id: 1,
    "Rank #": "1",
    Supplier: "Cato Networks",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000",
    "Overall Score": "99"
  },
  {
    id: 2,
    "Rank #": "2",
    Supplier: "Cato Networks",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000",
    "Overall Score": "99"
  },
  {
    id: 3,
    "Rank #": "3",
    Supplier: "Cato Networks",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000",
    "Overall Score": "99"
  },
  {
    id: 4,
    "Rank #": "4",
    Supplier: "Cato Networks",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000",
    "Overall Score": "99"
  },
  {
    id: 5,
    "Rank #": "5",
    Supplier: "Cato Networks",
    Service: "1",
    Sites: "1",
    Products: "1",
    Tickets: "0",
    Escalations: "0",
    Competitiveness: "10",
    MRC: "$2,000",
    "Annual Spend": "$24,000",
    "Overall Score": "99"
  }
]
const PerformanceView = () => {
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <div className="flow-root mx-auto py-4 rounded-xl bg-white px-4">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-auto">
                <table className="min-w-full text-[#5C667A] border-0">
                  <thead className="bg-[#f3f7fa]">
                    <tr>
                      {tableTitles.map((title) => (
                        <th className="px-2 py-4 text-center text-sm font-thin">
                          <div className="group inline-flex gap-0 items-center text-black">
                            {title}
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
                            {info["Rank #"]}
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Supplier"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Service"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Sites"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Products"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Tickets"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Escalations"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Competitiveness"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["MRC"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {info["Annual Spend"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#21ba86]">
                          {info["Overall Score"]}
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
    </>
  )
}

export default PerformanceView
