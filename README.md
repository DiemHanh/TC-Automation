# TC-Automation

Automation test cho https://the-internet.herokuapp.com, dùng Playwright + TypeScript theo POM.

## Cài đặt
```
npm install
npx playwright install chromium
```

## Chạy test
```
npm test
npm run test:headed
npm run report
```

## Cấu trúc
- `pages/` - page objects
- `fixtures/` - khởi tạo page objects cho test
- `tests/` - test cases
- `test-data/` - data test
