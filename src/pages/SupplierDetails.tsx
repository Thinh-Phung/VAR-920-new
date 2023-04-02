import React, { version } from "react"
import Navbar from "../component/Navbar"
import welcome from "../assets/home-page/welcome.png"
import Vector from "../assets/home-page/Vector.png"
import ATT from "../assets/supplier-details/AT&T.png"
import laptop from "../assets/supplier-details/laptop.png"
import mobile from "../assets/supplier-details/mobile.png"
import infinity from "../assets/supplier-details/infinity.png"
import cloud from "../assets/supplier-details/cloud.png"
import v from "../assets/supplier-details/V.png"
import global from "../assets/supplier-details/global.png"
import glotel from "../assets/supplier-details/glotel.png"
import customer from "../assets/supplier-details/customer.png"
import attbackground from "../assets/supplier-details/Attbackground.png"
import youtubeIcon from "../assets/supplier-details/youtube-icon.png"
import start from "../assets/supplier-details/4start.png"
import hireArt from "../assets/supplier-details/hire-art.png"
import datarails from "../assets/supplier-details/datarails.png"
import boomi from "../assets/supplier-details/boomi.png"
import digital from "../assets/supplier-details/digital.png"

const SupplierDetails = () => {
  return (
    <>
      <div className="bg-blue-50">
        <Navbar />
        <div
          id="breadcrumb"
          className="py-6 mx-4 lg:mx-32 text-base font-light text-[#2C3A5B]"
        >
          <p>
            Marketplace {">"} AT&T {">"} Supplier Details
          </p>
          <hr className="w-[15%] border-b-[0.1rem]  border-[#2C87BF] lg:w-[10%] 2xl:border-b-[0.2rem]" />
        </div>
        <div id="supplier-info" className="mx-4 lg:mx-32 border rounded">
          <div
            id="image"
            className="bg-center bg-cover h-auto w-full py-8 2xl:py-16 rounded-t"
            style={{ backgroundImage: `url(${digital})` }}
          >
            <div className="bg-white relative flex items-center justify-center top-[5.5rem] left-3 lg:left-8 lg:top-[5rem] rounded-full border h-20 w-20 lg:h-24 lg:w-24 p-0">
              <img src={ATT} alt="icon company" className="w-ful p-1" />
            </div>
          </div>
          <div className="bg-white static">
            <div className="flex justify-between pr-2 lg:pr-6 pt-2">
              <div className="ml-24 lg:ml-36 pr-10">
                <p className="font-light lg:font-normal lg:text-lg">AT&T</p>
                <p className="text-xs font-extralight lg:text-base text-[#828282]">
                  We create connection – with each other, with what people need
                  to thrive in their everyday lives and with the stories and
                  experiences that matter.
                </p>
              </div>
              <button className="flex text-xs h-6 px-[0.6rem] lg:h-7 lg:px-3 justify-center items-center font-extralight text-white py-1 bg-[#2C87BF] rounded">
                <p>Request</p>
                <img
                  src={Vector}
                  alt="vector icon"
                  className="h-1 pl-[0.15rem] my-auto"
                />
              </button>
            </div>
            <div className="flex mx-4 text-xs lg:text-sm font-light text-[#A5A5A5]">
              <p className="p-4">Supplier Info</p>
              <p className="p-4">Attachments</p>
              <p className="p-4">Announcements</p>
              <p className="p-4">Current Inventory</p>
              <p className="p-4">Reviews</p>
              <p className="p-4">Pricing </p>
            </div>
          </div>
          <div
            id="content&videos"
            className="bg-[#DEE2E6] p-2 lg:py-4 lg:px-6 grid grid-cols-3 gap-4"
          >
            <div
              id="content"
              className="col-span-2 w-full bg-white rounded-md px-4"
            >
              <div id="who-they-are">
                <p className="py-4 text-[#5C667A] font-bold lg:text-lg">
                  WHO THEY ARE
                </p>
                <p className="text-xs pb-4 text-[#5C667A] font-light lg:text-base">
                  As the first truly modern media company, AT&T has been
                  changing the way people live, work and play for more than 140
                  years. It started with Alexander Graham Bell’s telephone.
                  Since then, our legacy of innovation has included the
                  invention of the transistor – the building block of today’s
                  digital world – as well as the solar cell, the communications
                  satellite and machine learning.
                </p>
                <p className="text-xs text-[#5C667A] font-light lg:text-base">
                  {" "}
                  Throughout its history, AT&T has reinvented itself time and
                  time again – most recently adding WarnerMedia to reshape the
                  world of technology, media and telecommunications. Our two
                  companies are no strangers to making history together. In the
                  1920s, AT&T built the technology to add sound to motion
                  pictures, which Warner Bros. then used to create the first
                  talking picture.
                </p>
              </div>
              <div id="services-offered">
                <p className="py-4 text-[#5C667A] font-bold lg:text-lg">
                  SERVICES OFFERED
                </p>
                <p className="text-xs pb-4 text-[#5C667A] font-light lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <div className="my-4 grid grid-cols-4 gap-2">
                  <div className="border-solid border border-[#EEEEEE] shadow-md shadow-cyan-400/10">
                    <img
                      src={laptop}
                      alt="image for laptop"
                      className="w-full"
                    />
                    <p className="text-xs p-1 ml-2 font-light lg:text-sm">
                      Heading
                    </p>
                    <hr className="m-2" />
                    <p className="text-end text-xs p-1 mr-1 font-bold text-cyan-400 lg:text-sm">
                      25%
                    </p>
                  </div>
                  <div className="border-solid border border-[#EEEEEE] shadow-md shadow-cyan-400/10">
                    <img
                      src={mobile}
                      alt="image for mobile"
                      className="w-full"
                    />
                    <p className="text-xs p-1 ml-2 font-light lg:text-sm">
                      Heading
                    </p>
                    <hr className="m-2" />
                    <p className="text-end text-xs p-1 mr-1 font-bold text-cyan-400 lg:text-sm">
                      25%
                    </p>
                  </div>
                  <div className="border-solid border border-[#EEEEEE] shadow-md shadow-cyan-400/10">
                    <img
                      src={infinity}
                      alt="image for infinity"
                      className="w-full"
                    />
                    <p className="text-xs p-1 ml-2 font-light lg:text-sm">
                      Heading
                    </p>
                    <hr className="m-2" />
                    <p className="text-end text-xs p-1 mr-1 font-bold text-cyan-400 lg:text-sm">
                      25%
                    </p>
                  </div>
                  <div className="border-solid border border-[#EEEEEE] shadow-md shadow-cyan-400/10">
                    <img src={cloud} alt="image for cloud" className="w-full" />
                    <p className="text-xs p-1 ml-2 font-light lg:text-sm">
                      Heading
                    </p>
                    <hr className="m-2" />
                    <p className="text-end text-xs p-1 mr-1 font-bold text-cyan-400 lg:text-sm">
                      25%
                    </p>
                  </div>
                </div>
              </div>
              <div id="unique-value-proposition">
                <p className="pb-4 text-[#5C667A] font-bold lg:text-lg">
                  UNIQUE VALUE PROPOSITION
                </p>
                <p className="text-xs pb-4 text-[#5C667A] font-light lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <div className="text-xs pb-4 text-[#5C667A] font-light lg:text-base">
                  <div className="flex gap-4 pb-2">
                    <img src={v} alt="image for icon" className="h-4 my-auto" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore{" "}
                    </p>
                  </div>
                  <div className="flex gap-4 pb-2">
                    <img src={v} alt="image for icon" className="h-4 my-auto" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img src={v} alt="image for icon" className="h-4 my-auto" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div id="roi">
                <p className="pb-4 text-[#5C667A] font-bold lg:text-lg">ROI</p>
                <div className="text-xs pb-4 text-[#5C667A] font-light lg:text-base">
                  <p className="pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                  <p className="pb-4">
                    As the first truly modern media company, AT&T has been
                    changing the way people live, work and play for more than
                    140 years. It started with Alexander Graham Bell’s
                    telephone. Since then, our legacy of innovation has included
                    the invention of the transistor – the building block of
                    today’s digital world – as well as the solar cell, the
                    communications satellite and machine learning.
                  </p>
                  <p>
                    Throughout its history, AT&T has reinvented itself time and
                    time again – most recently adding WarnerMedia to reshape the
                    world of technology, media and telecommunications. Our two
                    companies are no strangers to making history together. In
                    the 1920s, AT&T built the technology to add sound to motion
                    pictures, which Warner Bros. then used to create the first
                    talking picture.
                  </p>
                </div>
              </div>
              <div id="supplier-performance">
                <p className="pb-4 text-[#5C667A] font-bold lg:text-lg">
                  SUPPLIER PERFORMANCE
                </p>
                <p className="text-xs pb-4 text-[#5C667A] font-light lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <div className="px-4 py-2 justify-center">
                  <p className="bg-[#569FCC] w-full p-2 h-full text-white font-light text-sm text-center lg:text-base">
                    Supplier Performance
                  </p>
                  <div className=" bg-blue-50">
                    <table className="table-fixed w-[95%] mx-auto mb-8">
                      <tr className="text-sm h-11 lg:text-base">
                        <th className="font-light">Supplier</th>
                        <th className="font-light">Site</th>
                        <th className="font-light">Service</th>
                      </tr>
                      <tr className="text-sm h-10 border-b border-[#C4C4C4] text-[#5C667A] lg:text-base">
                        <th className="font-light">AT&T</th>
                        <th className="font-light">5</th>
                        <th className="font-light">13</th>
                      </tr>
                      <tr className="text-sm h-10 border-b border-[#C4C4C4] text-[#5C667A] lg:text-base">
                        <th className="font-light">Verizon</th>
                        <th className="font-light">14</th>
                        <th className="font-light">13</th>
                      </tr>
                      <tr className="text-sm h-10 border-b border-[#C4C4C4] text-[#5C667A]">
                        <th className="font-light">Zoya</th>
                        <th className="font-light">3</th>
                        <th className="font-light">13</th>
                      </tr>
                      <tr className="text-sm h-10 border-b border-[#C4C4C4] text-[#5C667A] lg:text-base">
                        <th className="font-light">Zoya</th>
                        <th className="font-light">4</th>
                        <th className="font-light">13</th>
                      </tr>
                      <tr className="text-sm h-10 text-[#5C667A] lg:text-base">
                        <th className="font-light">Zoya</th>
                        <th className="font-light">5</th>
                        <th className="font-light">13</th>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div id="awards-video-alternatives" className="col-span-1">
              <div className="w-full bg-white rounded-md py-4 text-center">
                <p className="text-sm text-[#828282] lg:text-base">
                  Avalable in
                </p>
                <img src={global} alt="global icon" className="mx-auto my-2" />
                <p className="mb-2 text-[#5C667A] lg:text-lg">All countries</p>
              </div>
              <div className="my-4">
                <p className=" bg-[#2C87BF] rounded-t w-[100%] h-10 my-auto py-2 text-white text-sm text-center font-light lg:text-base">
                  Awards
                </p>
                <div className="flex flex-none rounded-b justify-around bg-white py-2">
                  <img
                    src={glotel}
                    alt="image for glotel"
                    className="w-2/5 h-2/5 my-auto"
                  />
                  <img
                    src={customer}
                    alt="image for customer"
                    className="w-2/5 h-2/5 my-auto"
                  />
                </div>
              </div>
              <div className="mb-4">
                <p className=" bg-[#2C87BF] rounded-t w-[100%] h-10 my-auto py-2 text-white text-sm text-center font-light lg:text-base">
                  Videos
                </p>
                <div className="bg-white py-4 px-2 rounded-b">
                  <div
                    className="p-11 bg-cover"
                    style={{ backgroundImage: `url(${attbackground})` }}
                  >
                    <img
                      src={youtubeIcon}
                      alt=""
                      className="relative top-[30%] left-[30%]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className=" bg-[#2C87BF] rounded-t w-[100%] h-10 my-auto py-2 text-white text-sm text-center font-light lg:text-base">
                  Alternatives
                </p>
                <div className="bg-white py-4 px-4 xl:px-12 2xl:px-20 rounded-b">
                  <div className="flex flex-none justify-between mb-4">
                    <div className="rounded-full border h-20 w-20 p-0 flex">
                      <img
                        src={hireArt}
                        alt="image for hire art"
                        className="w-auto h-1/5 m-auto"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[#2C3A5B lg:text-base]">
                        Hireart
                      </p>
                      <img src={start} alt="" className="w-4/5" />
                      <p className="text-sm font-light lg:text-base">
                        4 <span className="text-[#A5A5A5]">out of</span> 5
                      </p>
                      <p className="text-sm text-[#2C87BF] lg:text-base">
                        (4,000)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none justify-between mb-4">
                    <div className="rounded-full border h-20 w-20 p-0 flex">
                      <img
                        src={datarails}
                        alt="image for hire art"
                        className="w-auto h-1/5 m-auto"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[#2C3A5B] lg:text-base">
                        Datarails
                      </p>
                      <img src={start} alt="" className="w-4/5" />
                      <p className="text-sm font-light">
                        4 <span className="text-[#A5A5A5]">out of</span> 5
                      </p>
                      <p className="text-sm text-[#2C87BF] lg:text-base">
                        (4,000)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none justify-between mb-4">
                    <div className="rounded-full border h-20 w-20 p-0 flex">
                      <img
                        src={boomi}
                        alt="image for hire art"
                        className="w-auto h-1/5 m-auto"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[#2C3A5B] lg:text-base">
                        Boomie
                      </p>
                      <img src={start} alt="" className="w-4/5" />
                      <p className="text-sm font-light">
                        4 <span className="text-[#A5A5A5]">out of</span> 5
                      </p>
                      <p className="text-sm text-[#2C87BF] lg:text-base">
                        (4,000)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="bg-[#2C87BF] rounded-t w-[100%] h-10 my-auto py-2 text-white text-sm text-center font-light lg:text-base">
                  Alternatives
                </p>
                <div className="bg-white py-4 px-2 xl:px-8 rounded-b">
                  <p className="text-sm text-[#5C667A] mb-2 lg:text-base xl:text-lg 2xl:text-center">
                    Highest-Rated Features
                  </p>
                  <div className="flex gap-2 pb-2 2xl:justify-center">
                    <img src={v} alt="" className="h-4 my-auto" />
                    <div className="text-xs font-light xl:text-base">
                      <p className="text-[#5C667A]">
                        Due Dates - Project management
                      </p>
                      <p className="text-[#A5A5A5]">2% above average</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pb-2 2xl:justify-center">
                    <img src={v} alt="" className="h-4 my-auto" />
                    <div className="text-xs font-light xl:text-base">
                      <p className="text-[#5C667A]">
                        Due Dates - Project management
                      </p>
                      <p className="text-[#A5A5A5]">2% above average</p>
                    </div>
                  </div>
                  <div className="flex gap-2 2xl:justify-center">
                    <img src={v} alt="" className="h-4 my-auto" />
                    <div className="text-xs font-light xl:text-base">
                      <p className="text-[#5C667A]">
                        Due Dates - Project management
                      </p>
                      <p className="text-[#A5A5A5]">2% above average</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white py-4 px-2 xl:px-8 rounded-b">
                  <p className="text-sm text-[#5C667A] mb-2 lg:text-base xl:text-lg 2xl:text-center">
                    Lowest-Rated Features
                  </p>
                  <div className="flex gap-2 pb-2 2xl:justify-center">
                    <img src={v} alt="" className="h-4 my-auto" />
                    <div className="text-xs font-light xl:text-base">
                      <p className="text-[#5C667A]">
                        Due Dates - Project management
                      </p>
                      <p className="text-[#A5A5A5]">2% above average</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pb-2 2xl:justify-center">
                    <img src={v} alt="" className="h-4 my-auto" />
                    <div className="text-xs font-light xl:text-base">
                      <p className="text-[#5C667A]">
                        Due Dates - Project management
                      </p>
                      <p className="text-[#A5A5A5]">2% above average</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pb-2 2xl:justify-center">
                    <img src={v} alt="" className="h-4 my-auto" />
                    <div className="text-xs font-light xl:text-base">
                      <p className="text-[#5C667A]">
                        Due Dates - Project management
                      </p>
                      <p className="text-[#A5A5A5]">2% above average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupplierDetails
