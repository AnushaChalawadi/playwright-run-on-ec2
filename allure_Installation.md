# Step-by-Step Allure-report Installation

## 1. Install Required Packages
     npm install -D allure-playwright allure-commandline

## 2. Configure Playwright
     reporter: [['allure-playwright'], ['html']],

## 3. Run Your Tests
     npx playwright test

## 4. Generate and View the Report
     npx allure generate allure-results --clean -o allure-report
     npx allure open allure-report
