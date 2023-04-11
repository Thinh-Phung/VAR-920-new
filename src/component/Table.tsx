import React from "react"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"

const handleClick = () => {
  //sap xe thu tu
}
const Table = ({ tableInfos, tableTitles }) => {
  return (
    <>
      <div className="flow-root mx-auto py-2">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-auto">
              <table className="min-w-full text-[#5C667A] border-0">
                <thead className="bg-[#569FCC]">
                  <tr>
                    {tableTitles.map((title) => (
                      <th className="px-2 py-4 text-center text-sm font-normal">
                        <div className="group inline-flex gap-0 items-center text-white">
                          {title}
                          <span className="ml-2 flex-none rounded text-gray-100">
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
                          {info["Order ID"]}
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["Product"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["Service Name"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["Supplier"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["Term"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["Contract Date"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["End Date"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["Notice Period"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {info["MRC"]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
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
    </>
  )
}

export default Table
