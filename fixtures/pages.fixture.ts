import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecureAreaPage } from '../pages/SecureAreaPage';
import { CheckboxesPage } from '../pages/CheckboxesPage';
import { DropdownPage } from '../pages/DropdownPage';
import { StatusCodesPage } from '../pages/StatusCodesPage';
import { UploadPage } from '../pages/UploadPage';

type Pages = {
  loginPage: LoginPage;
  secureAreaPage: SecureAreaPage;
  checkboxesPage: CheckboxesPage;
  dropdownPage: DropdownPage;
  statusCodesPage: StatusCodesPage;
  uploadPage: UploadPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  secureAreaPage: async ({ page }, use) => use(new SecureAreaPage(page)),
  checkboxesPage: async ({ page }, use) => use(new CheckboxesPage(page)),
  dropdownPage: async ({ page }, use) => use(new DropdownPage(page)),
  statusCodesPage: async ({ page }, use) => use(new StatusCodesPage(page)),
  uploadPage: async ({ page }, use) => use(new UploadPage(page)),
});

export { expect } from '@playwright/test';
