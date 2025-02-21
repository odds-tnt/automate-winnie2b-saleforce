import { LoginPageSaleForce } from "../../page-object/LoginPage";
import {
  urlSaleForcecEnvDev,
  urlSaleForcecEnvUAT,
} from "../../test-data/url-saleforce/url-saleforce";
import { test } from "@playwright/test";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AddNewAssignment } from "../../page-object/AddAssignment";
import { dataTestAssignmentForm } from "../../test-data/Data-AssignmentForm/Data-AssignmentForm";

test.beforeEach(async ({ page }) => {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test("ทดสอบการเพิ่ม Visit Plan แบบ Manual(All Assignment)", async ({
  page,
}) => {
  const loginpagesaleforce = new LoginPageSaleForce(page);
  const addNewAssignment = new AddNewAssignment(page);
  await loginpagesaleforce.loginWinnie2bSaleForce(
    testData_allAssignment.email,
    testData_allAssignment.password
  );
  await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
  await addNewAssignment.clickButtonAddAssignmentInHomePage();
  await addNewAssignment.selectAddNewForCreateVisitPlanManual();
  await addNewAssignment.selectStoreTypeInVisitPlanForm(
    dataTestAssignmentForm.StoreType
  );
  await addNewAssignment.fillStoreNameInVisitPlanForm(
    dataTestAssignmentForm.StoreName
  );
  await addNewAssignment.fillCustomerNameInVisitPlanForm(
    dataTestAssignmentForm.CustomerName
  );
  await addNewAssignment.fillKnownStoreNameInVisitPlanForm(
    dataTestAssignmentForm.KnowStroeName
  );
  await addNewAssignment.fillCustomerIDInVisitPlanForm(
    dataTestAssignmentForm.CustomerID
  );
  await addNewAssignment.fillFirstNameInVisitPlanForm(
    dataTestAssignmentForm.FirstName
  );
  await addNewAssignment.fillLastNameInVisitPlanForm(
    dataTestAssignmentForm.LastName
  );
  await addNewAssignment.fillPhoneNumberInVisitPlanForm(
    dataTestAssignmentForm.PhoneNumber
  );
  await addNewAssignment.fillSecondaryPhoneNumberInVisitPlanForm(
    dataTestAssignmentForm.SecondaryPhoneNumber
  );
  await addNewAssignment.fillAddressInVisitPlanForm(
    dataTestAssignmentForm.Address
  );
  await addNewAssignment.fillDistrictInVisitPlanForm(
    dataTestAssignmentForm.District
  );
  await addNewAssignment.fillProvinceInVisitPlanForm(
    dataTestAssignmentForm.Province
  );
  await addNewAssignment.fillPostCodeInVisitPlanForm(
    dataTestAssignmentForm.PostCode
  );
  await addNewAssignment.fillLatitudeInVisitPlanForm(
    dataTestAssignmentForm.Latitude
  );
  await addNewAssignment.fillLongitudeInVisitPlanForm(
    dataTestAssignmentForm.Longitude
  );
  await addNewAssignment.SelectedWorkingDayInVisitPlanForm();
  await addNewAssignment.SelectStartTimeInVisitPlan();
  await addNewAssignment.SelectEndTimeInVisitPlan();
  await addNewAssignment.FillCustomerStatusInVisitPlan(
    dataTestAssignmentForm.CustomerStatus
  );
  await addNewAssignment.SelectRegisteredDateInVisitPlan();
  await addNewAssignment.FillRegisteredByInVisitPlan(
    dataTestAssignmentForm.RegisteredBy
  );
  await addNewAssignment.FillOutletMasterInVisitPlan(
    dataTestAssignmentForm.OutletMaster
  );
  await addNewAssignment.FillSalesOfficeInVisitPlan(
    dataTestAssignmentForm.SalesOffice
  );
  await addNewAssignment.FillClassInVisitPlan(dataTestAssignmentForm.Class);
  await addNewAssignment.FillAutonomousInVisitPlan(
    dataTestAssignmentForm.Autonomous
  );
  await addNewAssignment.FillSubtradeChannelIDInVisitPlan(
    dataTestAssignmentForm.SubtradeChannelID
  );
  await addNewAssignment.FillFrequencyGroupOfRepeatsPurchasedInVisitPlan(
    dataTestAssignmentForm.FrequencyGroupOfRepeatsPurchased
  );
  await addNewAssignment.FillVisitWeekInVisitPlan(
    dataTestAssignmentForm.VisitWeek
  );
  await addNewAssignment.FillVisitFrequencyInVisitPlan(
    dataTestAssignmentForm.VisitFrequency
  );
  await addNewAssignment.FillVisitEveryInVisitPlan(
    dataTestAssignmentForm.VisitEvery
  );
  await addNewAssignment.FillCustomerTypeInVisitPlan(
    dataTestAssignmentForm.CustomerType
  );
  await addNewAssignment.FillOwnerRoleInVisitPlan(
    dataTestAssignmentForm.OwnerRole
  );
  await addNewAssignment.FillOwnerNameInVisitPlan(
    dataTestAssignmentForm.OwnerName
  );
  await addNewAssignment.FillOwnerEmailInVisitPlan(
    dataTestAssignmentForm.OwnerEmail
  );
  await addNewAssignment.FillVisitByInVisitPlan(dataTestAssignmentForm.VisitBy);
  await addNewAssignment.FillSalesRouteInVisitPlan(
    dataTestAssignmentForm.SalesRoute
  );
  await addNewAssignment.FillRDWeeksInVisitPlan(
    dataTestAssignmentForm.RD_Weeks
  );
  await addNewAssignment.FillRDFrequencyInVisitPlan(
    dataTestAssignmentForm.RD_Frequency
  );
  await addNewAssignment.FillRDEveryInVisitPlan(
    dataTestAssignmentForm.RD_Every
  );
  await addNewAssignment.FillVisitMonthInVisitPlan(
    dataTestAssignmentForm.VisitMonth
  );
  await addNewAssignment.ClickStartVisitPlan();
});
