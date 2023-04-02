import React from "react"
import Navbar from "../component/Navbar"
import bgImg from "../assets/buy/bg-img.png"
import verizoneLogo from "../assets/home-page/verizon.png"
import ATT from "../assets/supplier-details/AT&T.png"
import silverpeak from "../assets/buy/silverpeak.png"
import cisco from "../assets/buy/cisco.png"
import vector from "../assets/buy/Vector.png"
const Buy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blue-50">
        <div
          id="breadcrumb"
          className="pt-4 mx-4 w-2/5 lg:mx-32 text-base font-light text-[#828282] flex justify-between mr-80"
        >
          <p>Savings</p>
          <p>Benchmark</p>
          <p className="text-[#2C87BF] font-bold border-b-2 border-[#2C87BF]">
            Marketplace Savings
          </p>
        </div>
        <hr className="mx-4" />
        <div className="mx-4">
          <div>
            <div
              id="welcome"
              className="mt-4 bg-center bg-cover w-full pb-16 pt-4 pl-6 text-white"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <p className="text-2xl font-bold">
                Welcome to Varisource Marketplace
              </p>
              <p className="text-xl">
                #1 Global Technology Sourcing Marketplace
              </p>
              <p className="rounded-t bg-white text-[#2C3A5B] px-2 py-1 inline-block relative top-[4.1rem]">
                Marketplace
              </p>
            </div>
            <div
              id="search"
              className="bg-white flex items-center justify-center py-8 gap-8 rounded-b shadow-md shadow-slate-200"
            >
              <input
                type="search"
                placeholder="Search..."
                name="search"
                className="rounded h-8 w-2/5 ml-5 border-[#DEE2E6] text-sm pl-10"
              />

              <button className="bg-[#33D69F] rounded px-4 h-8 text-white text-sm">
                Search
              </button>
            </div>
          </div>
          <div id="current-vendors" className="pt-12 pb-8 text-center">
            <p className="text-xl text-[#2C3A5B]">Current Vendors</p>
            <p className="text-sm text-[#5C667A]">
              PBX migration to UCaaS calculator to see how much savings can be
              achieved to replace PBX (SIP, PRI, POTs)
            </p>
          </div>
          <div id="main-content" className="flex gap-4">
            <div id="filter-by" className="w-2/5">
              <p className="my-auto pl-2 py-2 bg-[#143549] rounded-t text-white text-xs">
                Filter By
              </p>
              <div className="bg-white">
                <p className="ml-2 pt-4 text-[#2C3A5B] text-xs font-bold">
                  Features
                </p>
                <div>
                  <input
                    type="checkbox"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                    id="microsoft1"
                  />
                  <label
                    htmlFor="microsoft1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Microsoft Teams Direct Routing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="voice1"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="voice1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Voice
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="cloud1"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="cloud1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Cloud Services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="colo1"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="colo1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Colo
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                    id="contract1"
                  />
                  <label
                    htmlFor="contract1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Contract Center
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="connectivity1"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="connectivity1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Connectivity
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="managed1"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="managed1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Managed Services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                    id="sd-wan1"
                  />
                  <label
                    htmlFor="sd-wan1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    SD-WAN
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="security1"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="security1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Security
                  </label>
                </div>
                <div>
                  <input
                    id="unified1"
                    type="checkbox"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="unified1"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Unified Communications
                  </label>
                </div>
                <p className="ml-2 pt-4 text-[#2C3A5B] text-xs font-bold">
                  Market Segment
                </p>
                <div>
                  <input
                    type="checkbox"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                    id="microsoft2"
                  />
                  <label
                    htmlFor="microsoft2"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Microsoft Teams Direct Routing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="voice2"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="voice2"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Voice
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="cloud2"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="cloud2"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Cloud Services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="colo2"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="colo2"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Colo
                  </label>
                </div>
                <p className="ml-2 pt-4 text-[#2C3A5B] text-xs font-bold">
                  Star Rating
                </p>
                <div>
                  <input
                    type="checkbox"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                    id="microsoft3"
                  />
                  <label
                    htmlFor="microsoft3"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Microsoft Teams Direct Routing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="voice3"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="voice3"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Voice
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="cloud3"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="cloud3"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Cloud Services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="colo3"
                    className="ml-1 rounded checked:bg-[#21CB00]"
                  />
                  <label
                    htmlFor="colo3"
                    className="ml-1 text-xs text-[#5C667A]"
                  >
                    Colo
                  </label>
                </div>
              </div>
            </div>
            <div id="company-info" className="grid grid-cols-4 w-full gap-2">
              <div id="AT&T-1">
                <div>
                  <div className="h-12 lg:h-14 bg-[#2C87BF] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={ATT}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">AT&T</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>

                <div className="mt-2">
                  <div className="h-12 lg:h-14 bg-[#2C87BF] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={ATT}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">AT&T</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>

                <div className="mt-2">
                  <div className="h-12 lg:h-14 bg-[#2C87BF] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={ATT}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">AT&T</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>
              </div>

              <div id="verizone">
                <div>
                  <div className="h-12 lg:h-14 bg-[#B80101] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={verizoneLogo}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">VERIZONE</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>

                <div className="mt-2">
                  <div className="h-12 lg:h-14 bg-[#B80101] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={verizoneLogo}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">VERIZONE</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>

                <div id="verizone" className="mt-2">
                  <div className="h-12 lg:h-14 bg-[#B80101] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={verizoneLogo}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">Verizone</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>
              </div>
              <div id="silverpeak">
                <div>
                  <div className="h-12 lg:h-14 bg-[#3F6074] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={silverpeak}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">SILVERPEAK</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>

                <div className="mt-2">
                  <div className="h-12 lg:h-14 bg-[#3F6074] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={silverpeak}
                        alt="icon company"
                        className="w-ful p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">SILVERPEAK</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>

                <div id="verizone" className="mt-2">
                  <div className="h-12 lg:h-14 bg-[#3F6074] rounded-t">
                    <input
                      type="checkbox"
                      className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                    />
                  </div>
                  <div className="bg-white border border-b-0">
                    <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                      <img
                        src={silverpeak}
                        alt="icon company"
                        className="w-full p-1 m-auto"
                      />
                    </div>
                    <div className="relative top-[-1rem] text-center text-xs">
                      <p className="text-[#2C3A5B] font-bold">SILVERPEAK</p>
                      <div className="flex justify-around px-2 my-2">
                        <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                          US only
                        </p>
                        <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                          Global
                        </p>
                      </div>
                      <p className="text-xs text-[#5C667A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                  <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                    SEE MORE
                  </button>
                </div>
              </div>
              <div id="AT&T-2">
                <div id="AT&T-1">
                  <div>
                    <div className="h-12 lg:h-14 bg-[#2C87BF] rounded-t">
                      <input
                        type="checkbox"
                        className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                      />
                    </div>
                    <div className="bg-white border border-b-0">
                      <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                        <img
                          src={ATT}
                          alt="icon company"
                          className="w-ful p-1 m-auto"
                        />
                      </div>
                      <div className="relative top-[-1rem] text-center text-xs">
                        <p className="text-[#2C3A5B] font-bold">AT&T</p>
                        <div className="flex justify-around px-2 my-2">
                          <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                            US only
                          </p>
                          <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                            Global
                          </p>
                        </div>
                        <p className="text-xs text-[#5C667A]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                    <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                      SEE MORE
                    </button>
                  </div>

                  <div className="mt-2">
                    <div className="h-12 lg:h-14 bg-[#2C87BF] rounded-t">
                      <input
                        type="checkbox"
                        className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                      />
                    </div>
                    <div className="bg-white border border-b-0">
                      <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                        <img
                          src={ATT}
                          alt="icon company"
                          className="w-ful p-1 m-auto"
                        />
                      </div>
                      <div className="relative top-[-1rem] text-center text-xs">
                        <p className="text-[#2C3A5B] font-bold">AT&T</p>
                        <div className="flex justify-around px-2 my-2">
                          <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                            US only
                          </p>
                          <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                            Global
                          </p>
                        </div>
                        <p className="text-xs text-[#5C667A]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                    <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                      SEE MORE
                    </button>
                  </div>

                  <div className="mt-2">
                    <div className="h-12 lg:h-14 bg-[#2C87BF] rounded-t">
                      <input
                        type="checkbox"
                        className="rounded checked:bg-[#21CB00] ml-1 mt-1"
                      />
                    </div>
                    <div className="bg-white border border-b-0">
                      <div className="bg-white relative top-[-2rem] flex mx-auto rounded-full border h-16 w-16 lg:h-20 lg:w-20 p-0">
                        <img
                          src={ATT}
                          alt="icon company"
                          className="w-ful p-1 m-auto"
                        />
                      </div>
                      <div className="relative top-[-1rem] text-center text-xs">
                        <p className="text-[#2C3A5B] font-bold">AT&T</p>
                        <div className="flex justify-around px-2 my-2">
                          <p className="text-[#47BABF] bg-[#EDF9F9] rounded-full px-1">
                            US only
                          </p>
                          <p className="text-[#2C87BF] bg-[#EAF3F9] rounded-full px-1">
                            Global
                          </p>
                        </div>
                        <p className="text-xs text-[#5C667A]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor{" "}
                        </p>
                      </div>
                    </div>
                    <button className="border w-full h-8 rounded-b bg-white text-xs font-bold text-[#2C87BF]">
                      SEE MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="fotter"
          className="mt-14 flex justify-between px-4 bg-white border"
        >
          <div className="flex py-2">
            <p className="text-xs font-bold text-[#5C667A] my-auto">
              Vendors Selected:
            </p>
            <div className="flex">
              <img src={ATT} alt="" className="h-3 my-2 pl-2" />
              <img src={vector} alt="" className="h-1 pr-1 " />
            </div>
            <div className="flex">
              <img src={verizoneLogo} alt="" className="h-3 my-2 pl-2" />
              <img src={vector} alt="" className="h-1 pr-1" />
            </div>
            <div className="flex">
              <img src={cisco} alt="" className="h-3 my-2 pl-2" />
              <img src={vector} alt="" className="h-1 pr-1 " />
            </div>
          </div>
          <div className="flex items-center text-xs">
            <p className="text-[#5C667A] font-bold">Looking for:</p>
            <button className="font-thin text-white bg-[#47BABF] border rounded p-1 ml-1">
              Savings
            </button>
            <button className="font-thin text-white bg-[#FF6B00] border rounded p-1 ml-1">
              Benchmark
            </button>{" "}
            <button className="font-thin text-white bg-[#FF0000] border rounded p-1 ml-1">
              Cancellation
            </button>{" "}
            <button className="font-thin text-white bg-[#2C87BF] border rounded p-1 ml-1">
              Questions
            </button>{" "}
            <button className="font-thin text-white bg-[#42C0FB] border rounded p-1 ml-1">
              Renewal
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy
