import { Locator, Page, expect, selectors } from "@playwright/test";
import { urlSaleForcecEnvUAT } from "../test-data/url-saleforce/url-dev-saleforce";

export class AddNewAssignment {
  readonly page: Page;
  readonly add_assignment_button: Locator;
  readonly add_new: Locator;
  readonly storeType_selected: Locator;
  readonly storeName_box: Locator;
  readonly customerName_box: Locator;
  readonly knownStoreName_box: Locator;
  readonly customerId_box: Locator;
  readonly firstName_box: Locator;
  readonly lastName_box: Locator;
  readonly phoneNumber_box: Locator;
  readonly secondaryPhoneNumber: Locator;
  readonly address_box: Locator;
  readonly district_box: Locator;
  readonly province_box: Locator;
  readonly postCode_box: Locator;
  readonly latitude_box: Locator;
  readonly longtitude_box: Locator;
  readonly workingDay_sunday: Locator;
  readonly workingDay_monday: Locator;
  readonly workingDay_tuesday: Locator;
  readonly workingDay_wednesday: Locator;
  readonly workingDay_thusday: Locator;
  readonly workingDay_friday: Locator;
  readonly workingDay_saturday: Locator;
  readonly startTime_selected: Locator;
  readonly endTime_selected: Locator;
  readonly customerStatus_box: Locator;
  readonly registeredDate_selected: Locator;
  readonly registeredBy_box: Locator;
  readonly outletMaster_box: Locator;
  readonly salesOffice_box: Locator;
  readonly class_box: Locator;
  readonly autonomous_box: Locator;
  readonly subtradeChannelID_box: Locator;
  readonly frequencyGroupOfRepeatsPurchased_box: Locator;
  readonly visitWeek_box: Locator;
  readonly visitFrequency_box: Locator;
  readonly visitEvery_box: Locator;
  readonly customerType_box: Locator;
  readonly ownerRole_box: Locator;
  readonly ownerName_box: Locator;
  readonly ownerEmail_box: Locator;
  readonly visitBy_box: Locator;
  readonly salesRoute_box: Locator;
  readonly RDWeeks_box: Locator;
  readonly RDFrequency_box: Locator;
  readonly RDEvery_box: Locator;
  readonly visitMonth_box: Locator;
  readonly startVisit_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.add_assignment_button = page.getByTestId("add-assignment-button");
    this.add_new = page.getByRole("button", { name: "Add New" });
    this.storeType_selected = page.getByLabel("Store Type");
    this.storeName_box = page.getByRole("textbox", {
      name: "Store Name",
      exact: true,
    });
    this.customerName_box = page.getByRole("textbox", {
      name: "Customer Name",
      exact: true,
    });
    this.knownStoreName_box = page.getByRole("textbox", {
      name: "Known Store Name",
      exact: true,
    });
    this.customerId_box = page.getByRole("textbox", {
      name: "Customer ID",
      exact: true,
    });
    this.firstName_box = page.getByRole("textbox", {
      name: "First Name",
      exact: true,
    });
    this.lastName_box = page.getByRole("textbox", {
      name: "Last Name",
      exact: true,
    });
    this.phoneNumber_box = page.getByRole("textbox", {
      name: "Phone Number",
      exact: true,
    });
    this.secondaryPhoneNumber = page.getByRole("textbox", {
      name: "Secondary Phone Number",
      exact: true,
    });
    this.address_box = page.getByRole("textbox", {
      name: "Address",
      exact: true,
    });
    this.district_box = page.getByRole("textbox", {
      name: "District",
      exact: true,
    });
    this.province_box = page.getByRole("textbox", {
      name: "Province",
      exact: true,
    });
    this.postCode_box = page.getByRole("textbox", {
      name: "Post Code",
      exact: true,
    });
    this.latitude_box = page.getByRole("textbox", {
      name: "Latitude",
      exact: true,
    });
    this.longtitude_box = page.getByRole("textbox", {
      name: "Longitude",
      exact: true,
    });
    this.workingDay_sunday = page.getByText("อา");
    this.workingDay_monday = page.getByText("จ");
    this.workingDay_tuesday = page.getByText("อ", { exact: true });
    this.workingDay_wednesday = page.getByText("พ", { exact: true });
    this.workingDay_thusday = page.getByText("พฤ");
    this.workingDay_friday = page.getByText("ศ");
    this.workingDay_saturday = page.getByText("ส");
    this.startTime_selected = page.locator('//*[@id="startTime"]');
    this.endTime_selected = page.locator('//*[@id="endTime"]');
    this.customerStatus_box = page.getByRole("textbox", {
      name: "Customer Status",
    });
    this.registeredDate_selected = page.locator('//*[@id="RegisteredDate"]');
    this.registeredBy_box = page.getByRole("textbox", {
      name: "Registered By",
    });
    this.outletMaster_box = page.getByRole("textbox", {
      name: "Outlet Master",
    });
    this.salesOffice_box = page.getByRole("textbox", { name: "Sales Office" });
    this.class_box = page.getByRole("textbox", { name: "Class", exact: true });
    this.autonomous_box = page.getByRole("textbox", { name: "Autonomous" });
    this.subtradeChannelID_box = page.getByRole("textbox", {
      name: "Subtrade Channel ID",
    });
    this.frequencyGroupOfRepeatsPurchased_box = page.getByRole("textbox", {
      name: "Frequency Group of Repeats Purchased",
    });
    this.visitWeek_box = page.getByRole("textbox", {
      name: "Visit Weeks",
      exact: true,
    });
    this.visitFrequency_box = page.getByRole("textbox", {
      name: "Visit Frequency",
      exact: true,
    });
    this.visitEvery_box = page.getByRole("textbox", {
      name: "Visit Every",
      exact: true,
    });
    this.customerType_box = page.getByRole("textbox", {
      name: "Customer Type",
      exact: true,
    });
    this.ownerRole_box = page.getByRole("textbox", {
      name: "Owner Role",
      exact: true,
    });
    this.ownerName_box = page.getByRole("textbox", {
      name: "Owner Name",
      exact: true,
    });
    this.ownerEmail_box = page.getByRole("textbox", {
      name: "Owner Email",
      exact: true,
    });
    this.visitBy_box = page.getByRole("textbox", {
      name: "Visit By",
      exact: true,
    });
    this.salesRoute_box = page.getByRole("textbox", {
      name: "Sales Route",
      exact: true,
    });
    this.RDWeeks_box = page.getByRole("textbox", {
      name: "RD Weeks",
      exact: true,
    });
    this.RDFrequency_box = page.getByRole("textbox", {
      name: "RD Frequency",
      exact: true,
    });
    this.RDEvery_box = page.getByRole("textbox", {
      name: "RD Every",
      exact: true,
    });
    this.visitMonth_box = page.getByRole("textbox", {
      name: "Visit Month",
      exact: true,
    });
    this.startVisit_button = page.getByRole("button", {
      name: "Start Visit",
      exact: true,
    });
  }

  async clickButtonAddAssignmentInHomePage() {
    await this.add_assignment_button.click();
  }

  async selectAddNewForCreateVisitPlanManual() {
    await this.add_new.click();
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Addassignment_Page
    );
  }

  async selectStoreTypeInVisitPlanForm(StoreType: string) {
    await this.storeType_selected.selectOption(StoreType);
  }

  async fillStoreNameInVisitPlanForm(StoreName: string) {
    await this.storeName_box.fill(StoreName);
    await expect(this.storeName_box).not.toBeEmpty();
  }

  async fillCustomerNameInVisitPlanForm(CustomerName: string) {
    await this.customerName_box.fill(CustomerName);
    await expect(this.customerName_box).not.toBeEmpty();
  }

  async fillKnownStoreNameInVisitPlanForm(KnowStroeName: string) {
    await this.knownStoreName_box.fill(KnowStroeName);
    await expect(this.knownStoreName_box).not.toBeEmpty();
  }

  async fillCustomerIDInVisitPlanForm(CustomerID: string) {
    await this.customerId_box.fill(CustomerID);
    await expect(this.customerId_box).not.toBeEmpty();
  }

  async fillFirstNameInVisitPlanForm(FirstName: string) {
    await this.firstName_box.fill(FirstName);
    await expect(this.firstName_box).not.toBeEmpty();
  }

  async fillLastNameInVisitPlanForm(LastName: string) {
    await this.lastName_box.fill(LastName);
    await expect(this.lastName_box).not.toBeEmpty();
  }

  async fillPhoneNumberInVisitPlanForm(PhoneNumber: string) {
    await this.phoneNumber_box.fill(PhoneNumber);
    await expect(this.phoneNumber_box).not.toBeEmpty();
  }

  async fillSecondaryPhoneNumberInVisitPlanForm(SecondaryPhoneNumber: string) {
    await this.secondaryPhoneNumber.fill(SecondaryPhoneNumber);
    await expect(this.secondaryPhoneNumber).not.toBeEmpty();
  }

  async fillAddressInVisitPlanForm(Address: string) {
    await this.address_box.fill(Address);
    await expect(this.address_box).not.toBeEmpty();
  }

  async fillDistrictInVisitPlanForm(District: string) {
    await this.district_box.fill(District);
    await expect(this.district_box).not.toBeEmpty();
  }

  async fillProvinceInVisitPlanForm(Province: string) {
    await this.province_box.fill(Province);
    await expect(this.province_box).not.toBeEmpty();
  }

  async fillPostCodeInVisitPlanForm(PostCode: string) {
    await this.postCode_box.fill(PostCode);
    await expect(this.postCode_box).not.toBeEmpty();
  }

  async fillLatitudeInVisitPlanForm(Latitude: string) {
    await this.latitude_box.fill(Latitude);
    await expect(this.latitude_box).not.toBeEmpty();
  }

  async fillLongitudeInVisitPlanForm(Longitude: string) {
    await this.longtitude_box.fill(Longitude);
    await expect(this.longtitude_box).not.toBeEmpty();
  }

  async SelectedWorkingDayInVisitPlanForm() {
    await this.workingDay_sunday.click();
    await this.workingDay_monday.click();
    await this.workingDay_tuesday.click();
    await this.workingDay_wednesday.click();
    await this.workingDay_thusday.click();
    await this.workingDay_friday.click();
    await this.workingDay_saturday.click();
  }

  async SelectStartTimeInVisitPlan() {
    await this.startTime_selected.click();
    await this.page.keyboard.press("Enter");
  }

  async SelectEndTimeInVisitPlan() {
    await this.endTime_selected.click();
    await this.page.keyboard.press("Enter");
  }

  async FillCustomerStatusInVisitPlan(CustomerStatus: string) {
    await this.customerStatus_box.fill(CustomerStatus);
    await expect(this.customerStatus_box).not.toBeEmpty();
  }

  async SelectRegisteredDateInVisitPlan() {
    await this.registeredDate_selected.click();
    await this.page.keyboard.press("Enter");
  }

  async FillRegisteredByInVisitPlan(RegisteredBy: string) {
    await this.registeredBy_box.fill(RegisteredBy);
    await expect(this.registeredBy_box).not.toBeEmpty();
  }

  async FillOutletMasterInVisitPlan(OutletMaster: string) {
    await this.outletMaster_box.fill(OutletMaster);
    await expect(this.outletMaster_box).not.toBeEmpty();
  }

  async FillSalesOfficeInVisitPlan(SalesOffice: string) {
    await this.salesOffice_box.fill(SalesOffice);
    await expect(this.salesOffice_box).not.toBeEmpty();
  }

  async FillClassInVisitPlan(Class: string) {
    await this.class_box.fill(Class);
    await expect(this.class_box).not.toBeEmpty();
  }

  async FillAutonomousInVisitPlan(Autonomous: string) {
    await this.autonomous_box.fill(Autonomous);
    await expect(this.autonomous_box).not.toBeEmpty();
  }

  async FillSubtradeChannelIDInVisitPlan(SubtradeChannelID: string) {
    await this.subtradeChannelID_box.fill(SubtradeChannelID);
    await expect(this.subtradeChannelID_box).not.toBeEmpty();
  }

  async FillFrequencyGroupOfRepeatsPurchasedInVisitPlan(
    FrequencyGroupOfRepeatsPurchased: string
  ) {
    await this.frequencyGroupOfRepeatsPurchased_box.fill(
      FrequencyGroupOfRepeatsPurchased
    );
    await expect(this.frequencyGroupOfRepeatsPurchased_box).not.toBeEmpty();
  }

  async FillVisitWeekInVisitPlan(VisitWeek: string) {
    await this.visitWeek_box.fill(VisitWeek);
    await expect(this.visitWeek_box).not.toBeEmpty();
  }

  async FillVisitFrequencyInVisitPlan(VisitFrequency: string) {
    await this.visitFrequency_box.fill(VisitFrequency);
    await expect(this.visitFrequency_box).not.toBeEmpty();
  }

  async FillVisitEveryInVisitPlan(VisitEvery: string) {
    await this.visitEvery_box.fill(VisitEvery);
    await expect(this.visitEvery_box).not.toBeEmpty();
  }

  async FillCustomerTypeInVisitPlan(CustomerType: string) {
    await this.customerType_box.fill(CustomerType);
    await expect(this.customerType_box).not.toBeEmpty();
  }

  async FillOwnerRoleInVisitPlan(OwnerRole: string) {
    await this.ownerRole_box.fill(OwnerRole);
    await expect(this.ownerRole_box).not.toBeEmpty();
  }

  async FillOwnerNameInVisitPlan(OwnerName: string) {
    await this.ownerName_box.fill(OwnerName);
    await expect(this.ownerName_box).not.toBeEmpty();
  }

  async FillOwnerEmailInVisitPlan(OwnerEmail: string) {
    await this.ownerEmail_box.fill(OwnerEmail);
    await expect(this.ownerEmail_box).not.toBeEmpty();
  }

  async FillVisitByInVisitPlan(VisitBy: string) {
    await this.visitBy_box.fill(VisitBy);
    await expect(this.visitBy_box).not.toBeEmpty();
  }

  async FillSalesRouteInVisitPlan(SalesRoute: string) {
    await this.salesRoute_box.fill(SalesRoute);
    await expect(this.salesRoute_box).not.toBeEmpty();
  }

  async FillRDWeeksInVisitPlan(RD_Weeks: string) {
    await this.RDWeeks_box.fill(RD_Weeks);
    await expect(this.RDWeeks_box).not.toBeEmpty();
  }

  async FillRDFrequencyInVisitPlan(RD_Frequency: string) {
    await this.RDFrequency_box.fill(RD_Frequency);
    await expect(this.RDFrequency_box).not.toBeEmpty();
  }

  async FillRDEveryInVisitPlan(RD_Every: string) {
    await this.RDEvery_box.fill(RD_Every);
    await expect(this.RDEvery_box).not.toBeEmpty();
  }

  async FillVisitMonthInVisitPlan(VisitMonth: string) {
    await this.visitMonth_box.fill(VisitMonth);
    await expect(this.visitMonth_box).not.toBeEmpty();
  }

  async ClickStartVisitPlan() {
    await this.startVisit_button.click();
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Allassign_HomePage
    );
  }
}
