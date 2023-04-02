import React from "react"
import Navbar from "../component/Navbar"
import Vector from "../assets/home-page/Vector.png"
import ATT from "../assets/supplier-details/AT&T.png"
import digital from "../assets/supplier-details/digital.png"
import { TabComponent } from "@syncfusion/ej2-react-navigations"
import {
  AxisModel,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  DataLabel,
  BarSeries
} from "@syncfusion/ej2-react-charts"
const Chart = () => {
  const data = [
    { Product: "Internet", $: 4000, color: "#47BABF" },
    { Product: "SDWAN", $: 10000, color: "#5061FF" },
    { Product: "Voice", $: 15000, color: "#22C28E" },
    { Product: "Security", $: 17000, color: "#186582" }
  ]
}
const primaryxAxis: AxisModel = {
  valueType: "Category",
  labelStyle: { color: "#828282" },
  majorGridLines: { width: 0 }
}

const primaryyAxis: AxisModel = {
  interval: 5000,
  labelFormat: "c0",
  labelStyle: { color: "#828282" },
  plotOffsetRight: 10
}
const TabTest = () => {
  const data = [
    { Product: "Internet", $: 4000, color: "#47BABF" },
    { Product: "SDWAN", $: 10000, color: "#5061FF" },
    { Product: "Voice", $: 15000, color: "#22C28E" },
    { Product: "Security", $: 17000, color: "#186582" }
  ]
  return (
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
      <div
        id="supplier-info"
        className="mx-4 lg:mx-32 border border-[#c4c4c4] border-b-0 rounded-t"
      >
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
                We create connection – with each other, with what people need to
                thrive in their everyday lives and with the stories and
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
        </div>
      </div>
      <div className="mx-4 lg:mx-32">
        <TabComponent id="defaultTab">
          <div className="e-tab-header">
            <div>Supplier Info</div>
            <div>Attachments</div>
            <div>Announcements</div>
            <div>Current Inventory</div>
            <div>Reviews</div>
            <div>Pricing</div>
          </div>
          <div className="e-content">
            <div id="supplier-info" className="p-4">
              <div className="p-4 justify-center bg-white">
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
            <div id="attachments" className="p-4">
              <ChartComponent
                id="charts"
                primaryXAxis={primaryxAxis}
                primaryYAxis={primaryyAxis}
                title="Spend By Product"
                useGroupingSeparator={true}
                className="bg-white"
              >
                <Inject services={[BarSeries, Legend, DataLabel, Category]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={data}
                    xName="Product"
                    yName="$"
                    name="Spend By Product"
                    type="Bar"
                    columnWidth={0.8}
                    columnSpacing={0.4}
                    pointColorMapping="color"
                  ></SeriesDirective>
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
            <div>
              <p className="text-center">Announcements</p>
            </div>
            <div>
              <p className="text-center">Current Inventory</p>
            </div>
            <div>
              <p className="text-center">Reviews</p>
            </div>
            <div>
              <p className="text-center">Pricing</p>
            </div>
          </div>
        </TabComponent>
      </div>
    </div>
  )
}

export default TabTest
