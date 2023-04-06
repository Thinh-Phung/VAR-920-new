import React, { useEffect } from "react"
import Navbar from "../component/Navbar"
import FormSelect from "../component/FormSelect"
import ProgressBar from "../component/ProgressBar"
import RequestStep3 from "../component/RequestStep3"
import RequestFindSupplierForm from "../component/RequestFindSupplierForm"
import RequestBenchmark from "../component/RequestBenchmark"
import RequestAssessment from "../component/RequestAssessment"
import RequestsForm from "../component/RequestsForm"
import RequestCancellation from "../component/RequestCancellation"
import RequestContractstatus from "../component/RequestContractStatus"
import RequestGenerateReport from "../component/RequestGenerateReport"
import RequestNegotiate from "../component/RequestNegotiate"
import RequestQuotes from "../component/RequestQuotes"
import RequestRenewals from "../component/RequestRenewals"
import RequestResearch from "../component/RequestResearch"
import RequestSavingAnalysis from "../component/RequestSavingAnalysis"
import RequestSupplierComparison from "../component/RequestSupplierComparison"
import RequestQuestion from "../component/RequestQuestion"
import RequestSupplierDemo from "../component/RequestSupplierDemo"
import { useState } from "react"
const RequestPage = () => {
  const [progress, setProgress] = useState(1)
  const [requestType, setRequestType] = useState("")
  const handleSelectRequestType = (type) => {
    setProgress(2)
    setRequestType(type)
  }

  function handleSubmit() {
    // Axios: submit to backend

    setProgress(3)
  }
  return (
    <div className="bg-slate-50 h-screen">
      <Navbar currentPage="requests" />
      <ProgressBar progress={progress} />
      {progress === 1 && <FormSelect onSelect={handleSelectRequestType} />}
      {progress === 2 && (
        <RequestsForm requestType={requestType} handleSubmit={handleSubmit} />
      )}
      {progress === 3 && <RequestStep3 />}
    </div>
  )
}

export default RequestPage
