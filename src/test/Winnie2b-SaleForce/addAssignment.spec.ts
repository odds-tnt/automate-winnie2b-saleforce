import { LoginPageSaleForce } from "../../page-object/LoginPage";
import {
  urlSaleForcecEnvDev,
  urlSaleForcecEnvUAT,
} from "../../test-data/url-saleforce/url-saleforce";
import { test } from "@playwright/test";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AddNewAssignment } from "../../page-object/AddAssignment";
import { dataTestAssignmentFormDarkSpace } from "../../test-data/Data-Form/AssignmentFormDarkSpace";
import { dataTestAssignmentFormCustomer } from "../../test-data/Data-Form/AssignmentFormCustomer";

test.beforeEach(async ({ page }) => {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test("ทดสอบการเพิ่ม Visit Plan แบบ Manual(All Assignment Darkspace)", async ({
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
  await addNewAssignment.selectedAddNewForCreateVisitPlanManual();
  await addNewAssignment.selectedStoreTypeInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.StoreType
  );
  await addNewAssignment.selectedCustomerTypeInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.CustomerType
  );
  await addNewAssignment.fillStoreNameInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.StoreName
  );

  await addNewAssignment.fillKnownStoreNameInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.KnowStroeName
  );

  await addNewAssignment.fillCustomerNameInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.CustomerName
  );

  await addNewAssignment.fillCustomerIDInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.CustomerID
  );

  await addNewAssignment.fillFirstNameInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.FirstName
  );

  await addNewAssignment.fillLastNameInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.LastName
  );

  await addNewAssignment.fillPhoneNumberInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.PhoneNumber
  );

  await addNewAssignment.fillSecondaryPhoneNumberInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.SecondaryPhoneNumber
  );

  await addNewAssignment.fillAddressInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.Address
  );

  await addNewAssignment.fillDistrictInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.District
  );

  await addNewAssignment.fillProvinceInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.Province
  );

  await addNewAssignment.fillPostCodeInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.PostCode
  );

  await addNewAssignment.fillLatitudeInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.Latitude
  );

  await addNewAssignment.fillLongitudeInVisitPlanForm(
    dataTestAssignmentFormDarkSpace.Longitude
  );

  await addNewAssignment.SelectededWorkingDayInVisitPlanForm();

  await addNewAssignment.SelectedStartTimeInVisitPlan(
    dataTestAssignmentFormDarkSpace.StartTime
  );

  await addNewAssignment.SelectedEndTimeInVisitPlan(
    dataTestAssignmentFormDarkSpace.EndTime
  );

  await addNewAssignment.SelectedVisitEveryInVisitPlan();

  await addNewAssignment.FillVisitWeekInVisitPlan(
    dataTestAssignmentFormDarkSpace.VisitWeek
  );

  await addNewAssignment.FillVisitFrequencyInVisitPlan(
    dataTestAssignmentFormDarkSpace.VisitFrequency
  );

  await addNewAssignment.SelectedVisitMonthInVisitPlan(
    dataTestAssignmentFormDarkSpace.VisitMonth
  );

  await addNewAssignment.FillOwnerEmailInVisitPlan(
    dataTestAssignmentFormDarkSpace.OwnerEmail
  );

  await addNewAssignment.FillOutletMasterInVisitPlan(
    dataTestAssignmentFormDarkSpace.OutletMaster
  );

  await addNewAssignment.FillSalesOfficeInVisitPlan(
    dataTestAssignmentFormDarkSpace.SalesOffice
  );

  await addNewAssignment.FillSubtradeChannelIDInVisitPlan(
    dataTestAssignmentFormDarkSpace.SubtradeChannelID
  );

  await addNewAssignment.FillClassInVisitPlan(
    dataTestAssignmentFormDarkSpace.Class
  );

  await addNewAssignment.FillAutonomousInVisitPlan(
    dataTestAssignmentFormDarkSpace.Autonomous
  );

  await addNewAssignment.FillFrequencyGroupOfRepeatsPurchasedInVisitPlan(
    dataTestAssignmentFormDarkSpace.FrequencyGroupOfRepeatsPurchased
  );

  await addNewAssignment.FillSalesRouteInVisitPlan(
    dataTestAssignmentFormDarkSpace.SalesRoute
  );

  await addNewAssignment.SelectedRDEveryInVisitPlan();

  await addNewAssignment.FillRDWeeksInVisitPlan(
    dataTestAssignmentFormDarkSpace.RD_Weeks
  );

  await addNewAssignment.FillRDFrequencyInVisitPlan(
    dataTestAssignmentFormDarkSpace.RD_Frequency
  );

  await addNewAssignment.ClickSavetVisitPlan();
});

test("ทดสอบการเพิ่ม Visit Plan แบบ Manual(All Assignment Customer)", async ({
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
  await addNewAssignment.selectedAddNewForCreateVisitPlanManual();
  await addNewAssignment.selectedStoreTypeInVisitPlanForm(
    dataTestAssignmentFormCustomer.StoreType
  );
  await addNewAssignment.selectedCustomerTypeInVisitPlanForm(
    dataTestAssignmentFormCustomer.CustomerType
  );
  await addNewAssignment.fillStoreNameInVisitPlanForm(
    dataTestAssignmentFormCustomer.StoreName
  );

  await addNewAssignment.fillKnownStoreNameInVisitPlanForm(
    dataTestAssignmentFormCustomer.KnowStroeName
  );

  await addNewAssignment.fillCustomerNameInVisitPlanForm(
    dataTestAssignmentFormCustomer.CustomerName
  );

  await addNewAssignment.fillCustomerIDInVisitPlanForm(
    dataTestAssignmentFormCustomer.CustomerID
  );

  await addNewAssignment.fillFirstNameInVisitPlanForm(
    dataTestAssignmentFormCustomer.FirstName
  );

  await addNewAssignment.fillLastNameInVisitPlanForm(
    dataTestAssignmentFormCustomer.LastName
  );

  await addNewAssignment.fillPhoneNumberInVisitPlanForm(
    dataTestAssignmentFormCustomer.PhoneNumber
  );

  await addNewAssignment.fillSecondaryPhoneNumberInVisitPlanForm(
    dataTestAssignmentFormCustomer.SecondaryPhoneNumber
  );

  await addNewAssignment.fillAddressInVisitPlanForm(
    dataTestAssignmentFormCustomer.Address
  );

  await addNewAssignment.fillDistrictInVisitPlanForm(
    dataTestAssignmentFormCustomer.District
  );

  await addNewAssignment.fillProvinceInVisitPlanForm(
    dataTestAssignmentFormCustomer.Province
  );

  await addNewAssignment.fillPostCodeInVisitPlanForm(
    dataTestAssignmentFormCustomer.PostCode
  );

  await addNewAssignment.fillLatitudeInVisitPlanForm(
    dataTestAssignmentFormCustomer.Latitude
  );

  await addNewAssignment.fillLongitudeInVisitPlanForm(
    dataTestAssignmentFormCustomer.Longitude
  );

  await addNewAssignment.SelectededWorkingDayInVisitPlanForm();

  await addNewAssignment.SelectedStartTimeInVisitPlan(
    dataTestAssignmentFormCustomer.StartTime
  );

  await addNewAssignment.SelectedEndTimeInVisitPlan(
    dataTestAssignmentFormCustomer.EndTime
  );

  await addNewAssignment.SelectedVisitEveryInVisitPlan();

  await addNewAssignment.FillVisitWeekInVisitPlan(
    dataTestAssignmentFormCustomer.VisitWeek
  );

  await addNewAssignment.FillVisitFrequencyInVisitPlan(
    dataTestAssignmentFormCustomer.VisitFrequency
  );

  await addNewAssignment.SelectedVisitMonthInVisitPlan(
    dataTestAssignmentFormCustomer.VisitMonth
  );

  await addNewAssignment.FillOwnerEmailInVisitPlan(
    dataTestAssignmentFormCustomer.OwnerEmail
  );

  await addNewAssignment.FillOutletMasterInVisitPlan(
    dataTestAssignmentFormCustomer.OutletMaster
  );

  await addNewAssignment.FillSalesOfficeInVisitPlan(
    dataTestAssignmentFormCustomer.SalesOffice
  );

  await addNewAssignment.FillSubtradeChannelIDInVisitPlan(
    dataTestAssignmentFormCustomer.SubtradeChannelID
  );

  await addNewAssignment.FillClassInVisitPlan(
    dataTestAssignmentFormCustomer.Class
  );

  await addNewAssignment.FillAutonomousInVisitPlan(
    dataTestAssignmentFormCustomer.Autonomous
  );

  await addNewAssignment.FillFrequencyGroupOfRepeatsPurchasedInVisitPlan(
    dataTestAssignmentFormCustomer.FrequencyGroupOfRepeatsPurchased
  );

  await addNewAssignment.FillSalesRouteInVisitPlan(
    dataTestAssignmentFormCustomer.SalesRoute
  );

  await addNewAssignment.SelectedRDEveryInVisitPlan();

  await addNewAssignment.FillRDWeeksInVisitPlan(
    dataTestAssignmentFormCustomer.RD_Weeks
  );

  await addNewAssignment.FillRDFrequencyInVisitPlan(
    dataTestAssignmentFormCustomer.RD_Frequency
  );

  await addNewAssignment.ClickSavetVisitPlan();
});
