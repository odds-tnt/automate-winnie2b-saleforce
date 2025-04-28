import { CreateCaseForm } from "../../test/Winnie2b-SaleForce/caseList.spec";

export const saleESDCreateCaseToCXM: CreateCaseForm = {
  type: "Customer Service",
  topic: "Customer feedback",
  name: "Case to CXM",
  detail: "Detail test",
}

export const saleESFCreateCaseToERM: CreateCaseForm = {
  type: "Retailer",
  topic: "Inactive",
  name: "Case to ERM",
  customerId: "1234567890",
  outletMaster: "Outlet Master test",
  detail: "Detail test",
}

