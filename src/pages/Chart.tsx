import React from "react"
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
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective
} from "@syncfusion/ej2-react-navigations"
const Chart = () => {
  const data = [
    { Product: "Internet", $: 4000, color: "#47BABF" },
    { Product: "SDWAN", $: 10000, color: "#5061FF" },
    { Product: "Voice", $: 15000, color: "#22C28E" },
    { Product: "Security", $: 17000, color: "#186582" }
  ]

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

  return (
    <div>
      <ChartComponent
        id="charts"
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title="Spend By Product"
        useGroupingSeparator={true}
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

      <TabComponent id="defaultTab">
        <div className="e-tab-header">
          <div> Twitter </div>
          <div> Facebook </div>
          <div> WhatsApp </div>
        </div>
        <div className="e-content">
          <div>
            Twitter is an online social networking service that enables users to
            send and read short 140-character messages called 'tweets'.
            Registered users can read and post tweets, but those who are
            unregistered can only read them. Users access Twitter through the
            website interface, SMS or mobile device app Twitter Inc. is based in
            San Francisco and has more than 25 offices around the world. Twitter
            was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone,
            and Noah Glass and launched in July 2006. The service rapidly gained
            worldwide popularity, with more than 100 million users posting 340
            million tweets a day in 2012.The service also handled 1.6 billion
            search queries per day.
          </div>
          <div>
            Facebook is an online social networking service headquartered in
            Menlo Park, California. Its website was launched on February 4,
            2004, by Mark Zuckerberg with his Harvard College roommates and
            fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz
            and Chris Hughes.The founders had initially limited the website's
            membership to Harvard students, but later expanded it to colleges in
            the Boston area, the Ivy League, and Stanford University. It
            gradually added support for students at various other universities
            and later to high-school students.
          </div>
          <div>
            WhatsApp Messenger is a proprietary cross-platform instant messaging
            client for smartphones that operates under a subscription business
            model. It uses the Internet to send text messages, images, video,
            user location and audio media messages to other users using standard
            cellular mobile numbers. As of February 2016, WhatsApp had a user
            base of up to one billion,[10] making it the most globally popular
            messaging application. WhatsApp Inc., based in Mountain View,
            California, was acquired by Facebook Inc. on February 19, 2014, for
            approximately US$19.3 billion.
          </div>
        </div>
      </TabComponent>
    </div>
  )
}

export default Chart
