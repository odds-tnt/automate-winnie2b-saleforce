export type CaseType = 'Retailer' | 'Wholesaler' | 'Operation Team' | 'Customer Service';
export type CaseTopic =
  | 'Inactive'
  | 'Rejected'
  | 'Fraud'
  | 'Retailer Complaint'
  | 'Wholesaler Complaint'
  | 'Operation Team Complaint'
  | 'Customer Service Complaint'
  | 'Customer Feedback'
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
    topic: "Customer Feedback",
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