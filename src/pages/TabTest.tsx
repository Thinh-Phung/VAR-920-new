import React from "react"

import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective
} from "@syncfusion/ej2-react-navigations"
import * as ReactDOM from "react-dom"

import TableSyncfusion from "./TableSyncfusion"

const TabTest = () => {
  let headertext: any = [
    {
      text: '<div><div class="e-image e-andrew"></div><div class="e-title fade-in">Supplier Info</div></div>'
    },
    {
      text: '<div><div class="e-image e-margaret"></div><div class="e-title fade-in">Margaret</div></div>'
    },
    {
      text: '<div><div class="e-image e-janet"></div><div class="e-title fade-in">Janet</div></div>'
    }
  ]
  return (
    <div className="bg-blue-50 mt-80">
      <TabComponent
        heightAdjustMode="Auto"
        // class=".e-tab .e-tab-header .e-toolbar-items.customcssTab"
      >
        <div className="e-tab-header">
          <div>Supplier Info</div>
          <div>Attachments</div>
          <div>Announcements</div>
          <div>Current Inventory</div>
          <div>Reviews</div>
          <div>Pricing</div>
        </div>

        <div className="e-content">
          <div></div>
          <div>
            <p className="text-center">Attachments</p>
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
  )
}

export default TabTest
