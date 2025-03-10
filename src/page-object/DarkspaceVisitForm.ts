import { Locator, Page, expect } from "@playwright/test";
import { data_test_visit_form } from "../test-data/Data-AssignmentForm/Data-VisitForm";

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
      .filter({ hasText: "DARKSPACE" })
      .first();
    this.startVisitButton = page.getByTestId("start-visit-button");
    this.selectedLevel1_1 = page.getByRole("button", {
      name: "ทำการสั่งซื้อสินค้า",
    });
    this.selectedLevel1_1_orderCode = page.getByPlaceholder(
      "กรอกหมายเลขคำสั่งซื้อ"
    );
    this.selectedLevel1_2 = page.getByRole("button", { name: "ไม่สนใจ" });
    this.selectedLevel1_3 = page.getByRole("button", {
      name: "เจ้าของไม่สะดวกคุย / ไม่เจอเจ้าของ",
    });
    this.selectedLevel1_4 = page.getByRole("button", {
      name: "ร้านค้าปิดชั่วคราว",
    });
    this.selectedLevel1_5 = page.getByRole("button", {
      name: "ร้านค้าปิดกิจการ",
    });
    this.selectedLevel1_6 = page.getByRole("button", {
      name: "รอตัดสินใจ / รอปรึกษาเจ้าของร้าน",
    });
    this.selectedLevel1_7 = page.getByRole("button", {
      name: "ไม่พบร้านค้าตามพิกัด",
    });
    this.next_level1_button = page.getByRole("button", { name: "ถัดไป" });
    this.selectedLevel2_1 = page.getByRole("button", {
      name: "ซื้อจากแพลตฟอร์มอื่น",
    });
    this.selectedLevel2_2 = page.getByRole("button", {
      name: "ชอบการซื้อแบบเดิมมากกว่า",
    });
    this.selectedLevel2_3 = page.getByRole("button", {
      name: "เจ้าของร้านไม่มีสมาร์ทโฟน หรือใช้ไม่เป็น",
    });
    this.selectedLevel2_4 = page.getByRole("button", {
      name: "ต้องการซื้อกับร้านค้าส่งที่รู้จักเท่านั้น",
    });
    this.selectedLevel2_5 = page.getByRole("button", {
      name: "สินค้าในวาบิราคาสูงกว่าที่อื่น ไม่สามารถสั่งซื้อได้",
    });
    this.selectedLevel2_6 = page.getByRole("button", {
      name: "ไม่มั่นใจในการใช้งานแอป",
    });
    this.selectedLevel2_7 = page.getByRole("button", {
      name: "สั่งซื้อสินค้าไม่ถึงขั้นต่ำ",
    });
    this.selectedLevel2_8 = page.getByRole("button", {
      name: "สินค้าเต็มสต็อค",
    });
    this.selectedLevel2_9 = page.getByRole("button", { 
        name: "อื่นๆ" 
    });
    this.selectedLevel2_9_Reason = page.getByPlaceholder("ระบุเหตุผล..");
    this.next_level2_button = page.getByRole("button", { name: "ถัดไป" });
    this.selectedLevel3_1 = page.getByRole("button", { name: "Makro" });
    this.selectedLevel3_2 = page.getByRole("button", { name: "Shopee" });
    this.selectedLevel3_3 = page.getByRole("button", { name: "Lazada" });
    this.selectedLevel3_4 = page.getByRole("button", { name: "Tiktok" });
    this.selectedLevel3_5 = page.getByRole("button", { name: "โก โฮลเซลล์" });
    this.selectedLevel3_6 = page.getByRole("button", { name: "อื่น ๆ" });
    this.selectedLevel3_6_Reason = page.getByPlaceholder("ระบุเหตุผล..");
    this.selectedLevel3_7 = page.getByRole("button", {
      name: "ร้านค้าส่งในพื้นที่",
    });
    this.selectedLevel3_8 = page.getByRole("button", {
      name: "ซื้อจากห้างสรรพสินค้า เช่น Makro, Lotus, Big C",
    });
    this.selectedLevel3_9 = page.getByRole("button", {
      name: "ซื้อจากร้านค้าส่ง และห้างสรรพสินค้า",
    });
    this.next_level3_button = page.getByRole("button", { name: "ถัดไป" });
    this.note_description = page.getByPlaceholder("ระบุข้อมูลเพิ่มเติม..");
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
