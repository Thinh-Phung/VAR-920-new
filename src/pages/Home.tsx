import React from "react"
import verizoneLogo from "../assets/home-page/verizon.png"
import welcome from "../assets/home-page/welcome.png"
import buy from "../assets/home-page/buy.png"
import save from "../assets/home-page/save.png"
import manager from "../assets/home-page/manager.png"
import saas from "../assets/home-page/saas.png"
import Vector from "../assets/home-page/Vector.png"
import contractIcon from "..//assets/home-page/contract.svg"
import completeIcon from "..//assets/home-page/complete.svg"
import onHoldIcon from "..//assets/home-page/on_hold.svg"
import Navbar from "../component/Navbar"

const Home = () => {
  return (
    <>
      <div id="header">
        <Navbar />
        <div
          id="welcome-image"
          className="text-center bg-center text-sm bg-cover min-h-[fit] text-white p-[6%]"
          style={{ backgroundImage: `url(${welcome})` }}
          // bg-[url('../assets/home-page/welcome.png')]
        >
          <p className="font-bold text-lg text-white lg:text-xl 2xl:text-4xl">
            Welcome, John!
          </p>
          <p className="text-sm lg:text-base 2xl:text-3xl">
            PBX migration to UCaaS calculator to see how much savings can be
            achieved to replace PBX (SIP, PRI, POTs)
          </p>
        </div>
        <div id="data-point" className="border-b-[0.1rem]">
          <ul className="flex flex-1 justify-around text-center text-[#2C3A5B] py-2 lg:px-[30%] 2xl:text-2xl 2xl:px-[20%]">
            <li>
              <p>
                35<span className="text-[#33D69F]">M</span>
              </p>
              <p className="text-xs text-[#5C667A] 2xl:text-2xl">Data Point</p>
            </li>
            <div className="border-r-[1px] p-0"></div>
            <li className="my-auto">
              <p>
                35<span className="text-[#33D69F]">M</span>
              </p>
              <p className="text-xs text-[#5C667A] 2xl:text-2xl">Data Point</p>
            </li>
            <div className="border-r-[1px] p-0"></div>
            <li>
              <p>
                35<span className="text-[#33D69F]">M</span>
              </p>
              <p className="text-xs text-[#5C667A] 2xl:text-2xl">Data Point</p>
            </li>
            <div className="border-r-[1px] p-0"></div>
            <li>
              <p>
                35<span className="text-[#33D69F]">M</span>
              </p>
              <p className="text-xs text-[#5C667A] 2xl:text-2xl">Data Point</p>
            </li>
            <div className="border-r-[1px] p-0"></div>
            <li>
              <p>
                35<span className="text-[#33D69F]">M</span>
              </p>
              <p className="text-xs text-[#5C667A] 2xl:text-2xl">Data Point</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#edf3f7] h-[100%] py-8 px-[2%] lg:px-[10%]">
        <div id="can-do">
          <p className="font-light text-base text-[#2C3A5B] w-[50%] 2xl:text-2xl">
            What You Can Do With Varisource
          </p>
        </div>
        <hr className="w-[15%] border-b-[0.1rem]  border-[#2C87BF] lg:w-[10%] 2xl:border-b-[0.2rem]" />
        <div className="grid py-4 gap-6 grid-cols-3">
          <div>
            <div className="bg-[white] pt-4 px-4 pb-0 rounded-t lg:pt-6 lg:px-6">
              <img
                src={save}
                alt="save image"
                className="w-[100%] h-24 lg:h-34 xl:h-48 2xl:h-72"
              />
              <p className="text-center text-sm font-normal 2xl:text-2xl">
                Save
              </p>
              <p className="text-xs text-[#2C87BF] pb-6 font-light lg:pb-8 2xl:text-xl">
                First internet search engine to help you find internet
              </p>
            </div>
            <button className=" bg-[#2C87BF] rounded-b w-[100%] h-7 text-white text-sm text-center lg:py-1 2xl:h-10 2xl:text-lg">
              Use
            </button>
          </div>
          <div>
            <div className="bg-[white] pt-4 px-4 pb-0 rounded-t lg:pt-6 lg:px-6">
              <img
                src={buy}
                alt="buy image"
                className="flex w-[100%] h-24 lg:h-34 xl:h-48 2xl:h-72"
              />
              <p className="text-center text-sm font-normal 2xl:text-2xl">
                Buy
              </p>
              <p className="text-xs text-[#2C87BF] pb-6 font-light lg:pb-8 2xl:text-xl">
                First internet search engine to help you find internet
              </p>
            </div>
            <button className=" bg-[#2C87BF] rounded-b w-[100%] h-7 text-white text-sm text-center lg:py-1 2xl:h-10 2xl:text-lg">
              Use
            </button>
          </div>
          <div>
            <div className="bg-[white] pt-4 px-4 pb-0 rounded-t lg:pt-6 lg:px-6">
              <img
                src={manager}
                alt="manager image"
                className="flex w-[100%] h-24 lg:h-34 xl:h-48 2xl:h-72"
              />
              <p className="text-center text-sm font-normal 2xl:text-2xl">
                Manager
              </p>
              <p className="text-xs text-[#2C87BF] pb-6 font-light lg:pb-8 2xl:text-xl">
                First internet search engine to help you find internet
              </p>
            </div>
            <button className=" bg-[#2C87BF] rounded-b w-[100%] h-7 text-white text-sm text-center lg:py-1 2xl:h-10 2xl:text-lg">
              Use
            </button>
          </div>
        </div>
        <div
          id="submit-request "
          className="bg-[white] p-2 rounded grid grid-cols-7"
        >
          <img
            src={saas}
            alt=" sass image"
            className=" h-[100%] w-[100%] col-span-2 pr-2"
          />

          <p className="text-sm font-light pr-10 my-auto col-span-4 text-[10px] xl:text-base 2xl:text-xl">
            As the first truly modern media company, AT&T has been changing the
            way people live, work and play for more than 140 years. It started
            with Alexander Graham Bell’s telephone.{" "}
          </p>
          <button
            className="bg-[#33D69F] col-span-1 rounded w-[80%] h-[50%] text-white text-[0.5rem] my-auto 
          2xl:text-xl"
          >
            Submit Request
          </button>
        </div>

        <p className="font-light text-base text-[#2C3A5B] pt-8 2xl:text-2xl">
          Daily Reminders
        </p>
        <hr className="w-[15%] border-b-[0.1rem]  border-[#2C87BF] lg:w-[10%] 2xl:border-b-[0.2rem]" />
        <div className="grid py-4 gap-3 grid-cols-3">
          <div className="bg-[white] h-[15rem] 2xl:h-[20rem] rounded overflow-scroll py-2 border-[0.1rem]">
            <div className="py-2 border-b-[0.1rem] my-auto">
              <p className="text-xs 2xl:text-base text-center font-bold text-[#5C667A]">
                Notifications
              </p>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={contractIcon}
                  alt="contract icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Contracts</p>
                <p className="font-light text-[#828282]">
                  CID – 123 or ORD – 123 with AT&T is expiring in 60 days with
                  30 days notice period
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={completeIcon}
                  alt="orders complete icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Orders – Completed</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was installed on June 20th, 2022
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={onHoldIcon}
                  alt="order hold on icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Orders – On Hold</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was put On Hold on September, 21, 2022
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-2 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={onHoldIcon}
                  alt="order hold on icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Order – Cancelled</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was cancelled on September, 21, 2022
                  without penalty
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[white] h-[15rem] 2xl:h-[20rem] rounded overflow-scroll py-2 border-[0.1rem]">
            <div className="py-2 border-b-[0.1rem] my-auto">
              <p className="text-xs 2xl:text-base text-center font-bold text-[#5C667A]">
                Customer Actions
              </p>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={contractIcon}
                  alt="contract icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Contracts</p>
                <p className="font-light text-[#828282]">
                  CID – 123 or ORD – 123 with AT&T is expiring in 60 days with
                  30 days notice period
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={completeIcon}
                  alt="orders complete icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Orders – Completed</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was installed on June 20th, 2022
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={onHoldIcon}
                  alt="order hold on icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Orders – On Hold</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was put On Hold on September, 21, 2022
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-2 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={onHoldIcon}
                  alt="order hold on icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Order – Cancelled</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was cancelled on September, 21, 2022
                  without penalty
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[white] h-[15rem] 2xl:h-[20rem] rounded overflow-scroll py-2 border-[0.1rem]">
            <div className="py-2 border-b-[0.1rem] my-auto">
              <p className="text-xs 2xl:text-base text-center font-bold text-[#5C667A]">
                Notifications
              </p>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={contractIcon}
                  alt="contract icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Contracts</p>
                <p className="font-light text-[#828282]">
                  CID – 123 or ORD – 123 with AT&T is expiring in 60 days with
                  30 days notice period
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={completeIcon}
                  alt="orders complete icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Orders – Completed</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was installed on June 20th, 2022
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-4 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={onHoldIcon}
                  alt="order hold on icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Orders – On Hold</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was put On Hold on September, 21, 2022
                </p>
              </div>
            </div>
            <div className="flex my-4 mr-6 ml-2 rounded-lg border-[0.12rem] py-2 pr-2 pl-1">
              <div className="flex-none mx-2 mt-[0.3rem]">
                <img
                  src={onHoldIcon}
                  alt="order hold on icon image"
                  className="w-8 2xl:w-10 mt-[0.3rem]"
                />
              </div>
              <div className="my-auto text-xs 2xl:text-base">
                <p className="">Order – Cancelled</p>
                <p className="font-light text-[#828282]">
                  ORD – 123 with AT&T was cancelled on September, 21, 2022
                  without penalty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
