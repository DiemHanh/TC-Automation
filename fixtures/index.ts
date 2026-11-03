import { mergeTests } from '@playwright/test';
import { test as loginTest } from './login.fixture';
import { test as secureAreaTest } from './secure-area.fixture';
import { test as checkboxesTest } from './checkboxes.fixture';
import { test as dropdownTest } from './dropdown.fixture';
import { test as multipleSelectTest } from './multiple-select.fixture';
import { test as statusCodesTest } from './status-codes.fixture';
import { test as uploadTest } from './upload.fixture';
import { test as webTableTest } from './web-table.fixture';
import { test as dragAndDropTest } from './drag-and-drop.fixture';
import { test as horizontalSliderTest } from './horizontal-slider.fixture';
import { test as contextMenuTest } from './context-menu.fixture';
import { test as downloadTest } from './download.fixture';
import { test as brokenImagesTest } from './broken-images.fixture';
import { test as todoTest } from './todo.fixture';

export const test = mergeTests(
  loginTest,
  secureAreaTest,
  checkboxesTest,
  dropdownTest,
  multipleSelectTest,
  statusCodesTest,
  uploadTest,
  webTableTest,
  dragAndDropTest,
  horizontalSliderTest,
  contextMenuTest,
  downloadTest,
  brokenImagesTest,
  todoTest,
);

export { expect } from '@playwright/test';
