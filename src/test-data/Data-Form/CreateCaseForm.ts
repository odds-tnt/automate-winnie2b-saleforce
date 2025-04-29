export type CaseType = 'Retailer' | 'Wholesaler' | 'Operation Team' | 'Customer Service';
export type CaseTopic =
  | 'Inactive'
  | 'Rejected'
  | 'Fraud'
  | 'Complaint (Retailer, Wholesaler, Operation team, Customer service)'
  | 'Customer feedback'
  | 'อื่น ๆ';

export type CreateCaseForm = {
  type: CaseType;
  topic: CaseTopic;
  name: string;
  customerId?: string;
  outletMaster?: string;
  detail: string;
}

export function makeCaseToCXM(
  name: string
): CreateCaseForm {
  return {
    type: "Customer Service",
    topic: "Customer feedback",
    name,
    detail: "Detail test",
  };
}

export function makeCaseToERM(
  name: string,
): CreateCaseForm {
  return {
    type: "Retailer",
    topic: "Inactive",
    name,
    customerId: "1234567890",
    outletMaster: "Outlet Master test",
    detail: "Detail test",
  };
}