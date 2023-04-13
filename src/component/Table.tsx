import React from "react"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"

const handleClick = () => {
  //sap xe thu tu
}

const Table = ({ tableInfos, tableTitles, isArrange }) => {
  return (
    <>
      <div className="flow-root mx-auto py-2">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="min-w-full py-0 align-middle sm:px-6 lg:px-8">
            <div className="overflow-auto">
              <table className="min-w-full text-[#5C667A] border-0">
                <thead className="bg-[#569FCC]">
                  <tr>
                    {tableTitles.map((title) => (
                      <th className="px-2 py-2 text-center text-sm font-normal">
                        <div className="group inline-flex gap-0 items-center text-white">
                          {title}
                          <span className="ml-2 flex-none rounded text-gray-100">
                            {isArrange && (
                              <ChevronUpDownIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                                onClick={() => {
                                  handleClick
                                }}
                              />
                            )}
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
                          {info[tableTitles[0]]}
                        </button>
                      </td>

                      {/* Loop tableTitles[1]=>tableTitles.length */}
                      {/* {renderTableInfo(tableInfos, tableTitles)} */}
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[1]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[2]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[3]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[4]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[5]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[6]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[7]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[8]]}
                      </td>
                      <td className="whitespace-nowrap px-0 py-0 text-sm">
                        {info[tableTitles[9]]}
                      </td>

                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm">
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
                      </td> */}
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
