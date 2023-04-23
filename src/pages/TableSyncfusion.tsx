import {
  ColumnDirective,
  ColumnsDirective,
  PageSettingsModel,
  TreeGridComponent,
  Filter,
  Inject,
  Page,
  Sort
} from "@syncfusion/ej2-react-treegrid"
import { TextWrapSettingsModel } from "@syncfusion/ej2-grids"
import * as React from "react"
import { totalContractsData, expiredContractsData } from "../Data"

const TableSyncfusion = ({ inTab }) => {
  // let sortData = [...tableData]
  // console.log(sortData)
  const pageOptions: PageSettingsModel = { pageSize: 1 }
  const settings: TextWrapSettingsModel = { wrapMode: "Both" }
  const customAttributes: any = { class: "customcssHeader" }
  const customizeCell = (args: any) => {
    if (args.column.field == "orderID") {
      args.cell.style.color = "#2c87bf"
    }
    if (args.column.field != "orderID") {
      args.cell.style.color = "#5c667a"
    }
  }
  function orderIDTemplate(props): any {
    return (
      <div>
        <a target="_blank" href="http://www.google.com">
          {props.orderID}
        </a>
      </div>
    )
  }
  return (
    <div>
      {inTab === "total contracts" && (
        <TreeGridComponent
          dataSource={totalContractsData}
          treeColumnIndex={1}
          allowPaging={false}
          allowSorting={true}
          allowTextWrap={true}
          textWrapSettings={settings}
          // height="500"
          queryCellInfo={customizeCell}
        >
          <Inject services={[Page, Sort, Filter]} />
          <ColumnsDirective>
            <ColumnDirective
              field="orderID"
              headerText="Order ID"
              width="80"
              textAlign="Center"
              template={orderIDTemplate}
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="product"
              headerText="Product"
              width="100"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="serviceName"
              headerText="Service Name"
              width="100"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="supplier"
              headerText="Supplier"
              width="100"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="term"
              headerText="Term"
              width="80"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="contractDate"
              headerText="Contract Date"
              width="100"
              format="yMd"
              textAlign="Center"
              customAttributes={customAttributes}
              type="date"
            />
            <ColumnDirective
              field="endDate"
              headerText="End Date"
              width="100"
              format="yMd"
              textAlign="Center"
              customAttributes={customAttributes}
              type="date"
            />
            <ColumnDirective
              field="noticePeriod"
              headerText="Notice Period"
              width="90"
              textAlign="Center"
              customAttributes={customAttributes}
              type="number"
            />
            <ColumnDirective
              field="MRC"
              headerText="MRC"
              width="70"
              textAlign="Center"
              customAttributes={customAttributes}
              type="number"
              format="C0"
            />
            <ColumnDirective
              field="annualSpend"
              headerText="Annual Spend"
              width="90"
              textAlign="Center"
              customAttributes={customAttributes}
              type="number"
              format="C0"
            />
          </ColumnsDirective>
        </TreeGridComponent>
      )}
      {inTab === "expired contracts" && (
        <TreeGridComponent
          dataSource={expiredContractsData}
          treeColumnIndex={1}
          allowPaging={false}
          allowSorting={true}
          allowTextWrap={true}
          textWrapSettings={settings}
          height="500"
          queryCellInfo={customizeCell}
        >
          <Inject services={[Page, Sort, Filter]} />
          <ColumnsDirective>
            <ColumnDirective
              field="orderID"
              headerText="Order ID"
              width="80"
              textAlign="Center"
              template={orderIDTemplate}
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="product"
              headerText="Product"
              width="100"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="serviceName"
              headerText="Service Name"
              width="100"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="supplier"
              headerText="Supplier"
              width="100"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="term"
              headerText="Term"
              width="80"
              textAlign="Center"
              customAttributes={customAttributes}
            />
            <ColumnDirective
              field="contractDate"
              headerText="Contract Date"
              width="100"
              format="yMd"
              textAlign="Center"
              customAttributes={customAttributes}
              type="date"
            />
            <ColumnDirective
              field="endDate"
              headerText="End Date"
              width="100"
              format="yMd"
              textAlign="Center"
              customAttributes={customAttributes}
              type="date"
            />
            <ColumnDirective
              field="noticePeriod"
              headerText="Notice Period"
              width="90"
              textAlign="Center"
              customAttributes={customAttributes}
              type="number"
            />
            <ColumnDirective
              field="MRC"
              headerText="MRC"
              width="70"
              textAlign="Center"
              customAttributes={customAttributes}
              type="number"
              format="C0"
            />
            <ColumnDirective
              field="annualSpend"
              headerText="Annual Spend"
              width="90"
              textAlign="Center"
              customAttributes={customAttributes}
              type="number"
              format="C0"
            />
          </ColumnsDirective>
        </TreeGridComponent>
      )}
    </div>
  )
}

export default TableSyncfusion
