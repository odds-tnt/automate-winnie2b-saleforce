import { Locator, Page, expect } from "@playwright/test";
import { data_test_visit_form } from "../test-data/Data-Form/VisitForm";

export class DarkSpaceVisitForm {
  readonly page: Page;
  readonly allAssignmentButton: Locator;
  readonly darkSpaceSelected: Locator;
  readonly startVisitButton: Locator;
  readonly selectedLevel1_1: Locator;
  readonly selectedLevel1_1_orderCode: Locator;
  readonly selectedLevel1_2: Locator;
  readonly selectedLevel1_3: Locator;
  readonly selectedLevel1_4: Locator;
  readonly selectedLevel1_5: Locator;
  readonly selectedLevel1_6: Locator;
  readonly selectedLevel1_7: Locator;
  readonly next_level1_button: Locator;
  readonly selectedLevel2_1: Locator;
  readonly selectedLevel2_2: Locator;
  readonly selectedLevel2_3: Locator;
  readonly selectedLevel2_4: Locator;
  readonly selectedLevel2_5: Locator;
  readonly selectedLevel2_6: Locator;
  readonly selectedLevel2_7: Locator;
  readonly selectedLevel2_8: Locator;
  readonly selectedLevel2_9: Locator;
  readonly selectedLevel2_9_Reason: Locator;
  readonly next_level2_button: Locator;
  readonly selectedLevel3_1: Locator;
  readonly selectedLevel3_2: Locator;
  readonly selectedLevel3_3: Locator;
  readonly selectedLevel3_4: Locator;
  readonly selectedLevel3_5: Locator;
  readonly selectedLevel3_6: Locator;
  readonly selectedLevel3_6_Reason: Locator;
  readonly selectedLevel3_7: Locator;
  readonly selectedLevel3_8: Locator;
  readonly selectedLevel3_9: Locator;
  readonly next_level3_button: Locator;
  readonly note_description: Locator;
  readonly add_Store_visit_image: Locator;
  readonly record_visit_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allAssignmentButton = page.getByTestId("all-button");
    this.darkSpaceSelected = page
      .locator('[data-testid="customer-label"]')
      .filter({hasText: /^\s*(DARKSPACE)\s*$/})
      .first();
    this.startVisitButton = page.getByTestId("start-visit-button");

    //Choice Level 1
    this.selectedLevel1_1 = page.getByTestId('visit-button-A01');
    this.selectedLevel1_1_orderCode = page.getByTestId('orderId');
    this.selectedLevel1_2 = page.getByTestId('visit-button-A02');
    this.selectedLevel1_3 = page.getByTestId('visit-button-A03');
    this.selectedLevel1_4 = page.getByTestId('visit-button-A04');
    this.selectedLevel1_5 = page.getByTestId('visit-button-A05');
    this.selectedLevel1_6 = page.getByTestId('visit-button-A06');
    this.selectedLevel1_7 = page.getByTestId('visit-button-A07');
    this.next_level1_button = page.getByRole("button", { name: "ถัดไป" });

    //Choice Level 2
    this.selectedLevel2_1 = page.getByTestId('visit-button-B01');
    this.selectedLevel2_2 = page.getByTestId('visit-button-B02');
    this.selectedLevel2_3 = page.getByTestId('visit-button-B03');
    this.selectedLevel2_4 = page.getByTestId('visit-button-B04');
    this.selectedLevel2_5 = page.getByTestId('visit-button-B05');
    this.selectedLevel2_6 = page.getByTestId('visit-button-B06');
    this.selectedLevel2_7 = page.getByTestId('visit-button-B07'); 
    this.selectedLevel2_8 = page.getByTestId('visit-button-B08');
    this.selectedLevel2_9 = page.getByTestId('visit-button-B09');
    this.selectedLevel2_9_Reason = page.getByTestId('reason');
    this.next_level2_button = page.getByRole("button", { name: "ถัดไป" });

    //Choice Level 3
    this.selectedLevel3_1 = page.getByTestId('visit-button-C01');
    this.selectedLevel3_2 = page.getByTestId('visit-button-C02');
    this.selectedLevel3_3 = page.getByTestId('visit-button-C03');
    this.selectedLevel3_4 = page.getByTestId('visit-button-C04');
    this.selectedLevel3_5 = page.getByTestId('visit-button-C05');
    this.selectedLevel3_6 = page.getByTestId('visit-button-C06');
    this.selectedLevel3_6_Reason = page.getByTestId('reason');
    this.selectedLevel3_7 = page.getByTestId('visit-button-C07');
    this.selectedLevel3_8 = page.getByTestId('visit-button-C08');
    this.selectedLevel3_9 = page.getByTestId('visit-button-C09');
    this.next_level3_button = page.getByRole("button", { name: "ถัดไป" });
    this.note_description = page.getByTestId('note');
    this.add_Store_visit_image = page.locator('input[id = "image-input"]');
    this.record_visit_button = page.getByRole("button", { name: "บันทึก" });
  }

  async clickAllAssignmentButton() {
    await this.allAssignmentButton.click();
  }

  async clickDarkSpaceSelected() {
    await this.darkSpaceSelected.click();
  }

  async clickStartVisitButton() {
    await this.startVisitButton.click();
  }

  async clickSelected_PlaceOrderForProduct(orderCode: string) {
    await this.selectedLevel1_1.click();
    await this.selectedLevel1_1_orderCode.fill(orderCode);
    await this.next_level1_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickSelected_NotInterest_BuyOtherPlatForm_Makro() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_1.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_1.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickSelected_NotInterest_BuyOtherPlatForm_Shopee() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_1.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_2.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickSelected_NotInterest_BuyOtherPlatForm_Lazada() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_1.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_3.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickSelected_NotInterest_BuyOtherPlatForm_Tiktok() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_1.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_4.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickSelected_NotInterest_BuyOtherPlatForm_GoWholeSale() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_1.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_5.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickSelected_NotInterest_BuyOtherPlatForm_Other_FillReason() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_1.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_6.click();
    await this.selectedLevel3_6_Reason.fill(
      data_test_visit_form.darkSpace_Reason_Lavel3
    );
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_NotInterest_LikeOldBuy_LocalWholesale() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_2.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_7.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_NotInterest_LikeOldBuy_ByMall() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_2.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_8.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_NotInterest_LikeOldBuy_WholesaleAndDepartmentStores() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_2.click();
    await this.next_level2_button.click();
    await this.selectedLevel3_9.click();
    await this.next_level3_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_OwnerNotHaveSmartPhoneOrNotUse() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_3.click();
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_BuyFromKnownWholesalers() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_4.click();
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_Winnie2bPriceTooHigh() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_5.click();
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_NotConfidentUsingApp() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_6.click();
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_OrderBelowMinimum() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_7.click();
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_IsStockFull() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_8.click();
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_Other_FillReason() {
    await this.selectedLevel1_2.click();
    await this.next_level1_button.click();
    await this.selectedLevel2_9.click();
    await this.selectedLevel2_9_Reason.fill(
      data_test_visit_form.darkSpace_Reason_Lavel2
    );
    await this.next_level2_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_OwnerCurrentlyUnavailableOrNotMeet() {
    await this.selectedLevel1_3.click();
    await this.next_level1_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_StoreCloseTemporarily() {
    await this.selectedLevel1_4.click();
    await this.next_level1_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_IsStoreOutOfBusiness() {
    await this.selectedLevel1_5.click();
    await this.next_level1_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_WaitForDecisionOrConsultOwner() {
    await this.selectedLevel1_6.click();
    await this.next_level1_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }

  async clickselected_NotFoundStoreAtLocation() {
    await this.selectedLevel1_7.click();
    await this.next_level1_button.click();
    await this.note_description.fill(
      data_test_visit_form.darkSpace_NoteDescription
    );
    await this.add_Store_visit_image.setInputFiles(
      data_test_visit_form.darkSpace_ImagePath
    );
    await this.record_visit_button.click();
  }
}
