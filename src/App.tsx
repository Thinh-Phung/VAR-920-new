import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import SupplierDetails from "./pages/SupplierDetails"
import Buy from "./pages/Buy"
import Chart from "./pages/Chart"
import TabTest from "./pages/TabTest"
import Requests from "./pages/Requests"
import RequestForm from "./pages/RequestPage"
import Manage from "./pages/Manage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/supplier-details" element={<SupplierDetails />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/tab" element={<TabTest />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/requests-form" element={<RequestForm />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </>
  )
}

export default App
