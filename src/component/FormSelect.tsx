import React from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"

import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const FormSelect = ({ onSelect }) => {
  return (
    <>
      <div className="mx-auto w-full md:w-3/5 py-2 px-3">
        <p className="bg-[#2C87BF] mt-8 text-white py-2 text-base font-bold text-center rounded-t-lg">
          New Request
        </p>
        <div className="bg-white text-center pb-8 rounded-b-md text-base text-[#5C667A]">
          <p className="py-2">Type of Request</p>
          <div className="border rounded-md mx-auto mb-2 text-start w-3/5">
            <select
              name="request-type"
              id="request-type"
              onChange={(e) => onSelect(e.target.value)}
            >
              <option value="none"></option>
              <option value="assessment">Assessments</option>
              <option value="benchmark">Benchmark</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSelect
