import { Locator, Page, expect } from "@playwright/test";
import { urlSaleForcecEnvUAT } from "../test-data/url-saleforce/url-saleforce";
import { dataTestAssignmentFormDarkSpace} from "../test-data/Data-Form/AssignmentFormDarkSpace";
import { dataTestAssignmentFormCustomer } from "../test-data/Data-Form/AssignmentFormCustomer";

export class AddNewAssignment {
  readonly page: Page;
  readonly add_assignment_button: Locator;
  readonly add_new: Locator;
  readonly storeType_selected: Locator;
  readonly custermerType_selected: Locator;
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
  readonly outletMaster_box: Locator;
  readonly salesOffice_box: Locator;
  readonly class_box: Locator;
  readonly autonomous_box: Locator;
  readonly subtradeChannelID_box: Locator;
  readonly frequencyGroupOfRepeatsPurchased_box: Locator;
  readonly visitWeek_box: Locator;
  readonly visitFrequency_box: Locator;
  readonly visitEvery_box: Locator;
  readonly ownerEmail_box: Locator;
  readonly visitBy_box: Locator;
  readonly salesRoute_box: Locator;
  readonly RDWeeks_box: Locator;
  readonly RDFrequency_box: Locator;
  readonly RDEvery_box: Locator;
  readonly visitThisMonth_box: Locator;
  readonly visitNextMonth_box: Locator;
  readonly Save_button: Locator;

  constructor(page: Page) {
    const DataDayVisit = dataTestAssignmentFormDarkSpace.VisitEvery;
    const DataRDevery = dataTestAssignmentFormDarkSpace.RD_Every;
    const DayVisit = new RegExp(`^\\s*(${DataDayVisit})\\s*$`);
    const Day_RD_Every = new RegExp(`^\\s*(${DataRDevery})\\s*$`);
    this.page = page;
    this.add_assignment_button = page.getByTestId("add-assignment-button");
    this.add_new = page.getByRole("button", {
      name: /^(เพิ่มงานใหม่|Add New)$/,
    });
    this.storeType_selected = page
      .getByTestId("StoreType")
      .getByRole("combobox");
    this.custermerType_selected = page
      .getByTestId("CustomerType")
      .getByRole("combobox");
    this.storeName_box = page.getByTestId("StoreName");
    this.knownStoreName_box = page.getByTestId("KnownStoreName");
    this.customerName_box = page.getByTestId("CustomerName");
    this.customerId_box = page.getByTestId("CustomerId");
    this.firstName_box = page.getByTestId("FirstName");
    this.lastName_box = page.getByTestId("LastName");
    this.phoneNumber_box = page.getByTestId("PhoneNumber");
    this.secondaryPhoneNumber = page.getByTestId("SecondaryPhoneNumber");
    this.address_box = page.getByTestId("Address");
    this.district_box = page.getByTestId("District");
    this.province_box = page.getByTestId("Province");
    this.postCode_box = page.getByTestId("PostCode");
    this.latitude_box = page.getByTestId("Latitude");
    this.longtitude_box = page.getByTestId("Longitude");
    this.workingDay_sunday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(อา|Sun)\s*$/);
    this.workingDay_monday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(จ|Mon)\s*$/);
    this.workingDay_tuesday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(อ|Tue)\s*$/);
    this.workingDay_wednesday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(พ|Wed)\s*$/);
    this.workingDay_thusday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(พฤ|Thu)\s*$/);
    this.workingDay_friday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(ศ|Fri)\s*$/);
    this.workingDay_saturday = page
      .getByTestId("WorkingDays")
      .getByText(/^\s*(ส|Sat)\s*$/);
    this.startTime_selected = page.getByTestId("StartTime");
    this.endTime_selected = page.getByTestId("EndTime");
    this.visitEvery_box = page.getByTestId("VisitEvery").getByText(DayVisit);
    this.visitWeek_box = page.getByTestId("VisitWeeks");
    this.visitFrequency_box = page
      .getByTestId("VisitFrequency")
      .getByRole("combobox");
    this.visitThisMonth_box = page.getByTestId("VisitMonth-thisMonth");
    this.visitThisMonth_box = page.getByTestId("VisitMonth-nextMonth");
    this.ownerEmail_box = page.getByTestId("OwnerEmail");
    this.outletMaster_box = page.getByTestId("OutletMaster");
    this.salesOffice_box = page.getByTestId("SalesOffice");
    this.subtradeChannelID_box = page.getByTestId("SubtradeChannelId");
    this.class_box = page.getByTestId("Class");
    this.autonomous_box = page.getByTestId("Autonomous");
    this.frequencyGroupOfRepeatsPurchased_box = page.getByTestId("FrequencyGroupOfRepeatsPurchased");
    this.salesRoute_box = page.getByTestId("SalesRoute");
    this.RDEvery_box = page.getByTestId("RDEvery").getByText(Day_RD_Every);
    this.RDFrequency_box = page.getByTestId("RDFrequency");
    this.RDWeeks_box = page.getByTestId("RDWeeks");
    this.Save_button = page.getByTestId("submit");
    
  }

  async clickButtonAddAssignmentInHomePage() {
    await this.add_assignment_button.click();
  }

  async selectedAddNewForCreateVisitPlanManual() {
    await this.add_new.click();
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Addassignment_Page
    );
  }

  async selectedStoreTypeInVisitPlanForm(StoreType:string) {
    await this.storeType_selected.selectOption(StoreType);
  }

  async selectedCustomerTypeInVisitPlanForm(CustomerType:string) {
    await this.custermerType_selected.selectOption(CustomerType);
  }

  async fillStoreNameInVisitPlanForm(StoreName:string) {
    await this.storeName_box.fill(StoreName);
  }

  async fillKnownStoreNameInVisitPlanForm(KnowStroeName:string) {
    await this.knownStoreName_box.fill(KnowStroeName);
  }

  async fillCustomerNameInVisitPlanForm(CustomerName:string) {
    await this.customerName_box.fill(CustomerName);
  }

  async fillCustomerIDInVisitPlanForm(CustomerID:string) {
    await this.customerId_box.fill(CustomerID);
  }

  async fillFirstNameInVisitPlanForm(FirstName:string) {
    await this.firstName_box.fill(FirstName);
  }

  async fillLastNameInVisitPlanForm(LastName:string) {
    await this.lastName_box.fill(LastName);
  }

  async fillPhoneNumberInVisitPlanForm(PhoneNumber:string) {
    await this.phoneNumber_box.fill(PhoneNumber);
  }

  async fillSecondaryPhoneNumberInVisitPlanForm(SecondaryPhoneNumber:string) {
    await this.secondaryPhoneNumber.fill(SecondaryPhoneNumber);
  }

  async fillAddressInVisitPlanForm(Address:string) {
    await this.address_box.fill(Address);
  }

  async fillDistrictInVisitPlanForm(District:string) {
    await this.district_box.fill(District);
  }

  async fillProvinceInVisitPlanForm(Province:string) {
    await this.province_box.fill(Province);
  }

  async fillPostCodeInVisitPlanForm(PostCode:string) {
    await this.postCode_box.fill(PostCode);
  }

  async fillLatitudeInVisitPlanForm(Latitude:string) {
    await this.latitude_box.fill(Latitude);
  }

  async fillLongitudeInVisitPlanForm(Longitude:string) {
    await this.longtitude_box.fill(Longitude);
  }

  async SelectededWorkingDayInVisitPlanForm() {
    await this.workingDay_sunday.click();
    await this.workingDay_monday.click();
    await this.workingDay_tuesday.click();
    await this.workingDay_wednesday.click();
    await this.workingDay_thusday.click();
    await this.workingDay_friday.click();
    await this.workingDay_saturday.click();
  }

  async SelectedStartTimeInVisitPlan(StartTime:string) {
    await this.startTime_selected.click();
    await this.startTime_selected.fill(StartTime);
  }

  async SelectedEndTimeInVisitPlan(EndTime:string) {
    await this.endTime_selected.click();
    await this.endTime_selected.fill(EndTime);
  }

  async SelectedVisitEveryInVisitPlan() {
    await this.visitEvery_box.click();
  }

  async FillVisitWeekInVisitPlan(VisitWeek:string) {
    await this.visitWeek_box.fill(VisitWeek);
  }

  async FillVisitFrequencyInVisitPlan(VisitFrequency:string) {
    await this.visitFrequency_box.click();
    await this.visitFrequency_box.selectOption(VisitFrequency);
  }

  async SelectedVisitMonthInVisitPlan(VisitMonth:string) 
  {
    const selectedVisitMonth = dataTestAssignmentFormDarkSpace.VisitMonth; // Define and initialize selectedVisitMonth
    if (selectedVisitMonth === 'thisMonth')
    {
      await this.page.getByTestId("VisitMonth-thisMonth").click();
    } 
    else if (selectedVisitMonth === 'nextMonth') 
    {
      await this.page.getByTestId("VisitMonth-nextMonth").click();
    }
  }

  async FillOwnerEmailInVisitPlan(OwnerEmail:string) {
    await this.ownerEmail_box.fill(OwnerEmail);
  }

  async FillOutletMasterInVisitPlan(OutletMaster:string) {
    await this.outletMaster_box.fill(OutletMaster);
  }

  async FillSalesOfficeInVisitPlan(SalesOffice:string) {
    await this.salesOffice_box.fill(SalesOffice);
  }

  async FillSubtradeChannelIDInVisitPlan(SubtradeChannelID:string) {
    await this.subtradeChannelID_box.fill(SubtradeChannelID);
  }

  async FillClassInVisitPlan(Class:string) {
    await this.class_box.fill(Class);
  }

  async FillAutonomousInVisitPlan(Autonomous:string) {
    await this.autonomous_box.fill(Autonomous);
  }

  async FillFrequencyGroupOfRepeatsPurchasedInVisitPlan(
    FrequencyGroupOfRepeatsPurchased:string
  ) {
    await this.frequencyGroupOfRepeatsPurchased_box.fill(
      FrequencyGroupOfRepeatsPurchased
    );
  }

  async FillSalesRouteInVisitPlan(SalesRoute:string) {
    await this.salesRoute_box.fill(SalesRoute);
  }

  async SelectedRDEveryInVisitPlan() {
    await this.RDEvery_box.click();
  }

  async FillRDWeeksInVisitPlan(RD_Weeks:string) {
    await this.RDWeeks_box.fill(RD_Weeks);
  }

  async FillRDFrequencyInVisitPlan(RD_Frequency:string) {
    await this.RDFrequency_box.fill(RD_Frequency);
  }

  async ClickSavetVisitPlan() {
    await this.Save_button.click();
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Allassign_HomePage
    );
  }
}
