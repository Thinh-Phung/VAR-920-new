import React from "react"
import { Disclosure, Listbox, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react"
const FormSelect = ({ onSelect }) => {
  useEffect(() => {
    const use = async () => {
      ;(await import("tw-elements")).default
    }
    use()
  }, [])

  return (
    <>
      <div className="mx-auto w-full md:w-4/5 py-2 px-3">
        <p className="bg-[#2C87BF] mt-8 text-white py-2 text-base font-bold text-center rounded-t-lg">
          New Request
        </p>
        <div className="bg-white text-center pb-8 rounded-b-md text-base text-[#5C667A]">
          <p className="py-2">Type of Request</p>
          <div className="pt-6 px-2 md:px-6 text-start">
            <select
              data-te-select-init
              name="request-type"
              id="request-type"
              defaultValue="Choose Below"
              onChange={(e) => onSelect(e.target.value)}
              className="border-slate-200 rounded-md mx-auto mb-2 text-start w-full"
            >
              <option value="none">Choose Below</option>
              <option value="assessment">Assessments</option>
              <option value="benchmark">Benchmark</option>
              <option value="cancellation">Cancellation</option>
              <option value="contract-status">Contract Status</option>
              <option value="generate-reports">Generate Reports</option>
              <option value="negotiate">Negotiate</option>
              <option value="quotes">Quotes</option>
              <option value="renewals">Renewals</option>
              <option value="research">Research</option>
              <option value="savings-analysis">Savings Analysis</option>
              <option value="supplier-comparisons">Supplier Comparisons</option>
              <option value="supplier-demos">Supplier Demos</option>
              <option value="supplier-questions">Supplier Questions</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSelect
