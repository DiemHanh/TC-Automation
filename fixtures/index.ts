import { mergeTests } from '@playwright/test';
import { test as loginTest } from './login.fixture';
import { test as secureAreaTest } from './secure-area.fixture';
import { test as checkboxesTest } from './checkboxes.fixture';
import { test as dropdownTest } from './dropdown.fixture';
import { test as statusCodesTest } from './status-codes.fixture';
import { test as uploadTest } from './upload.fixture';

export const test = mergeTests(
  loginTest,
  secureAreaTest,
  checkboxesTest,
  dropdownTest,
  statusCodesTest,
  uploadTest,
);

export { expect } from '@playwright/test';
