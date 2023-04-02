import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/outline"

// interface RequestDetailPopUpProps {
//   id: string
//   isActive: boolean
// }

export default function RequestDetailPopUp({ id, onClose, requestID }) {
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-4xl">
                <p className="bg-[#569FCC] w-full py-2 px-3 h-full text-white text-lg text-center rounded-t-lg">
                  View
                </p>
                <div className="absolute top-0 right-0 pt-2 pr-2">
                  <button
                    type="button"
                    className="bg-[#569FCC] text-slate-200 hover:text-black"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <div className="text-center">
                    <div className="grid grid-cols-12">
                      <div className="col-span-7">
                        <h3 className="text-base py-4 text-[#5C667A] border-b border-r bg-slate-50">
                          Request ID:{" "}
                          <span className="text-[#2C87BF]">{requestID}</span>
                        </h3>
                      </div>
                      <div className="col-span-5 text-base py-4 text-[#5C667A] border-b border-l bg-slate-50">
                        Results
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-t">
                      <div className="col-span-7 pt-4 border-r">
                        <div className="ml-4 text-base space-y-4">
                          <div>
                            <ul className="flex flex-wrap list-disc list-outside px-8 mx-0 text-[#5c667a] text-xl">
                              <li className="mr-10">
                                <p className="text-[#5c667a] text-base text-start">
                                  Type of Request
                                </p>
                                <p className="text-[#828282] text-base text-start">
                                  Supplier Demo
                                </p>
                              </li>
                              <li className="mr-10">
                                <p className="text-[#5c667a] text-base text-start">
                                  Type of Request
                                </p>
                                <p className="text-[#828282] text-base text-start">
                                  Supplier Demo
                                </p>
                              </li>
                              <li className="mr-10">
                                <p className="text-[#5c667a] text-base text-start">
                                  Current Spend
                                </p>
                                <p className="text-[#828282] text-base text-start">
                                  $10,000
                                </p>
                              </li>
                              <li className="mr-10">
                                <p className="text-[#5c667a] text-base text-start">
                                  Current Spend
                                </p>
                                <p className="text-[#828282] text-base text-start">
                                  $10,000
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="list-disc list-outside space-y-4 px-8 mx-0 text-[#5c667a] text-xl">
                              <li>
                                <p className="text-[#5c667a] text-base text-start">
                                  Reason for Benchmark
                                </p>
                                <p className="text-[#828282] text-base text-start">
                                  Aenean sit amet sagittis enim. Etiam in
                                  facilisis purus,
                                </p>
                              </li>
                              <li>
                                <p className="text-[#5c667a] text-base text-start">
                                  Specific Requirement of Suppliers
                                </p>
                                <p className="text-[#828282] text-base text-start">
                                  Suspendisse vehicula luctus ipsum, nec
                                  vehicula dolor porttior at. Donec lacus lacus
                                </p>
                              </li>
                              <li>
                                <p className="text-[#5c667a] text-base text-start">
                                  Customer Files
                                </p>
                                <p className="text-[#2C87BF] py-2 text-base text-start hover:text-black">
                                  .pdf
                                </p>
                                <p className="text-[#2C87BF] pb-2 text-base text-start hover:text-black">
                                  .xlms
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ml-4 py-6"></div>
                      </div>
                      <div className="col-span-5 border-l text-base space-y-4 text-[#828282] text-start p-4">
                        <p className="pb-4">
                          Varisource benchmarked 3+ suppliers for this request
                          and have found 20-35% saving between the suppliers,
                          please see below for savings analysis and quotes
                        </p>
                        <p className="text-[#5c667a] underline decoration-solid">
                          Varisource Files
                        </p>
                        <p className="text-[#2C87BF] hover:text-black">
                          Saving_Analysis.pdf
                        </p>
                        <p className="text-[#2C87BF] hover:text-black">
                          SupplierQuote.xlms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
{
  /* <div>
<p>{id}</p>
<button onClick={onClose}>Close</button>
</div> */
}
