# 🧪 OpenCart E2E Tests

This project contains end-to-end (E2E) tests for the OpenCart application using Playwright. It includes page object models, fixtures for test setup, and Allure reporting for test results.

## 🛠️ Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository.
2. Navigate to the project directory: `cd opencart-e2e-tests`
3. Install dependencies: `npm install`

## 🚀 Project Structure

- `pages/`: Page object classes (e.g., HomePage.js, BasePage.js)
- `fixtures/`: Test fixtures for setup (e.g., fixtures.js)
- `tests/`: Test files (e.g., e2e_opencart.spec.js)
- `package.json`: Project configuration and scripts

## ▶️ Running Tests

- Run regression tests in headless mode: `npm run regressionTest`
- Run tests in headed mode: `npm run test-headed`
- View test report: `npm run test-report`

## 📊 Generating Allure Reports

1. Run tests to generate results in `allure-results/`.
2. Generate report: `npm run allure:generate`
3. Open report: `npm run allure:open`

## 🚀 Extending the Framework

- Add new page objects in `pages/`.
- Update fixtures in `fixtures/` for shared test setup.
- Write new tests in `tests/` using Playwright's test runner.

For more details, refer to the Playwright documentation.
- https://playwright.dev/docs/intro 