import { mergeTests } from '@playwright/test';
import { test as loginTest } from './login.fixture';
import { test as secureAreaTest } from './secureArea.fixture';
import { test as checkboxesTest } from './checkboxes.fixture';
import { test as dropdownTest } from './dropdown.fixture';
import { test as multipleSelectTest } from './multipleSelect.fixture';
import { test as statusCodesTest } from './statusCodes.fixture';
import { test as uploadTest } from './upload.fixture';
import { test as webTableTest } from './webTable.fixture';
import { test as dragAndDropTest } from './dragAndDrop.fixture';
import { test as horizontalSliderTest } from './horizontalSlider.fixture';
import { test as contextMenuTest } from './contextMenu.fixture';
import { test as downloadTest } from './download.fixture';
import { test as brokenImagesTest } from './brokenImages.fixture';
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
