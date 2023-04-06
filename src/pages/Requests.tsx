import React from "react"
import { useState } from "react"
import Navbar from "../component/Navbar"
import RequestForm from "./RequestPage"
import RequestDetailPopUp from "../component/RequestDetailPopUp"
import { useNavigate } from "react-router-dom"
const titles = [
  "Request ID",
  "Request Date",
  "Requestor",
  "Type of Request",
  "Status",
  "Action"
]
const requests = [
  {
    id: 1,
    "Request ID": "CR-1104",
    "Request Date": "8/23/2021",
    Requestor: "Elon Must",
    "Type of Request": "Supplier Demo",
    Status: "Pending",
    Action: "View"
  },
  {
    id: 2,
    "Request ID": "CR-1105",
    "Request Date": "8/23/2021",
    Requestor: "Elon Must",
    "Type of Request": "Supplier Demo",
    Status: "Pending",
    Action: "View"
  }
]
let requestID = ""
const Requests = () => {
  const navigate = useNavigate()
  const [activeModalId, setActiveModalId] = useState(0)
  return (
    <>
      <Navbar currentPage={"requests"} />
      <div className="mt-12 px-0 lg:mx-auto lg:w-4/5 rounded-md border">
        <div className="py-4 border-b-4">
          <h1 className="text-base text-center font-bold leading-6 text-[#2C3A5B]">
            Requests
          </h1>
        </div>
        <div className="mt-2 sm:mt-0 flex justify-center">
          <button
            type="button"
            className="md:absolute md:right-6 md:top-[7.5rem] lg:absolute lg:right-[8.5rem] lg:top-[7.6rem]
            xl:absolute xl:right-[10.5rem] xl:top-[7.6rem] 2xl:absolute 2xl:right-[17.8rem] 2xl:top-[7.6rem]
            rounded-md bg-[#47BABF] py-2 px-6 text-center text-base font-normal text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            onClick={() => {
              navigate("/requests-form")
            }}
          >
            New Request
          </button>
        </div>

        <div className="lg:mx-6 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-8 align-middle sm:px-6 lg:px-8">
              <p className="bg-[#569FCC] w-full p-3 h-full text-white font-bold text-base text-center rounded-t-lg">
                All
              </p>
              <div className="overflow-auto shadow ring-1 ring-black ring-opacity-5 rounded-b-lg">
                <table className="min-w-full text-[#5C667A]">
                  <thead className="bg-[#F3F7FA]">
                    <tr>
                      {titles.map((title) => (
                        <th className="px-3 py-4 text-center text-sm font-semibold">
                          {title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white text-center">
                    {requests.map((request) => (
                      <tr key={request["Request ID"]}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {request["Request ID"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {request["Request Date"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {request.Requestor}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {request["Type of Request"]}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {request.Status}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <button
                            className="text-[#2C87BF] underline decoration-solid hover:text-black focus:outline-none focus:p-1 focus:rounded-md focus:ring focus:ring-cyan-100"
                            onClick={() => {
                              setActiveModalId(request["id"])
                              requestID = request["Request ID"]
                            }}
                          >
                            {request.Action}
                          </button>
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
      {activeModalId > 0 && (
        <RequestDetailPopUp
          requestID={requestID}
          id={activeModalId}
          onClose={() => {
            setActiveModalId(0)
          }}
        />
      )}
    </>
  )
}

export default Requests
