import { mergeTests } from '@playwright/test';
import { test as loginTest } from './login.fixture';
import { test as secureAreaTest } from './secure-area.fixture';
import { test as checkboxesTest } from './checkboxes.fixture';
import { test as dropdownTest } from './dropdown.fixture';
import { test as multipleSelectTest } from './multiple-select.fixture';
import { test as statusCodesTest } from './status-codes.fixture';
import { test as uploadTest } from './upload.fixture';
import { test as addRemoveElementsTest } from './add-remove-elements.fixture';
import { test as inputsTest } from './inputs.fixture';
import { test as javaScriptAlertsTest } from './javascript-alerts.fixture';
import { test as dynamicControlsTest } from './dynamic-controls.fixture';
import { test as hoversTest } from './hovers.fixture';
import { test as keyPressesTest } from './key-presses.fixture';

export const test = mergeTests(
  loginTest,
  secureAreaTest,
  checkboxesTest,
  dropdownTest,
  multipleSelectTest,
  statusCodesTest,
  uploadTest,
  addRemoveElementsTest,
  inputsTest,
  javaScriptAlertsTest,
  dynamicControlsTest,
  hoversTest,
  keyPressesTest,
);

export { expect } from '@playwright/test';
