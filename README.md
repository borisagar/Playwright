# Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-2EAD33?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js)
![POM](https://img.shields.io/badge/Design-Page_Object_Model-orange)
![Framework](https://img.shields.io/badge/Framework-Custom_Playwright-purple)
![Status](https://img.shields.io/badge/Status-Active-success)

Overview

This repository contains a scalable UI automation framework built using Playwright and TypeScript.

The framework follows a layered architecture with Page Object Model (POM), reusable action libraries, centralized assertions, environment configuration management, and test data separation to improve maintainability and reduce code duplication.

The framework is designed to support:

- End-to-End Testing
- Functional Testing
- Regression Testing
- Smoke Testing
- Cross-Browser Testing
- CI/CD Integration
- Data-Driven Testing

---

Technology Stack

Component| Technology
Language| TypeScript
Automation Tool| Playwright
Test Runner| Playwright Test
Package Manager| NPM
Reporting| HTML Report
Code Formatting| Prettier
Git Hooks| Husky
Commit Validation| Commitlint
Runtime| Node.js

---

## Framework Architecture
The framework follows a layered design pattern:

```
Tests
  ↓
Page Objects
  ↓
Action Layer
  ↓
Playwright APIs
```

Benefits:

- Better maintainability
- Improved code reusability
- Reduced duplication
- Easier onboarding for new team members
- Simplified framework enhancement

---

## Project Structure

| Directory | Purpose |
|------------|------------|
| tests | Test specifications and test suites |
| src/pages | Page Object Models |
| src/actions | Reusable business actions |
| src/assertions | Centralized assertion methods |
| src/config | Framework configuration |
| src/helpers | Common helper utilities |
| src/support | Shared support classes |
| src/test-data | Test data management |
| .env | Environment variables |
| playwright.config.js | Playwright configuration |
| tsconfig.json | TypeScript configuration |

---

Framework Components

Action Layer

The Action Layer contains reusable wrappers around Playwright operations.

Examples:

- Text Entry
- Click Operations
- Dropdown Handling
- Checkbox Handling
- Page Navigation
- Element Validation

Benefits:

- Standardized interactions
- Reduced code duplication
- Improved maintainability

---

Locator Factory

The Locator Factory centralizes locator creation and management.

Responsibilities:

- Dynamic locator generation
- Locator abstraction
- Reusable selector handling

Benefits:

- Easier maintenance
- Reduced locator duplication
- Improved scalability

---

Page Object Model (POM)

The framework follows the Page Object Model design pattern.

Responsibilities:

- Store page locators
- Implement page-specific business actions
- Separate test logic from UI interactions

Benefits:

- Clean test implementation
- Improved readability
- Reduced maintenance effort

---

Assertions Layer

The Assertions Layer centralizes validation logic.

Examples:

- Text validation
- Visibility validation
- URL validation
- State validation
- Element existence validation

Benefits:

- Consistent verification approach
- Reusable validation methods

---

Test Data Layer

The framework separates test data from test logic.

Benefits:

- Data-driven execution
- Easy maintenance
- Better test readability

---

Configuration Layer

Configuration management supports:

- Environment variables
- Browser configuration
- Execution settings
- Runtime settings

---

Playwright Configuration

Current configuration includes:

Setting| Value
Test Directory| tests
Browser| Chromium
Parallel Execution| Enabled
Retry On CI| 2
Trace Collection| On First Retry
Report Type| HTML
Headless Mode| False

---

Installation

Clone repository:

git clone https://github.com/borisagar/Playwright.git

Move to project:

cd Playwright

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

---

Running Tests

Run all tests:

npx playwright test

Run specific test:

npx playwright test tests/example.spec.ts

Run tests in Chromium:

npx playwright test --project=chromium

Run in debug mode:

npx playwright test --debug

Run headed mode:

npx playwright test --headed

---

Test Reporting

Generate report:

npx playwright show-report

Framework uses Playwright HTML Reporting for execution results.

Report includes:

- Execution Summary
- Passed Tests
- Failed Tests
- Screenshots
- Trace Information

---

TypeScript Configuration

The framework uses:

Target : ES2020
Module : CommonJS
Strict Mode : Enabled
Node Types : Enabled
Playwright Types : Enabled

Benefits:

- Better type safety
- Early defect detection
- Improved IDE support

---

Code Quality

Format Code

npm run format

Git Hooks

Husky is configured to enforce quality checks before commits.

Commit Standards

Examples:

feat: add login automation
fix: update locator strategy
test: add checkout scenarios
refactor: improve page actions

---

Best Practices

- Follow Page Object Model.
- Avoid hardcoded waits.
- Use Playwright auto-waiting capabilities.
- Keep tests independent.
- Store locators in page classes.
- Keep assertions separate from actions.
- Use centralized test data.
- Avoid duplicate code.

---

Future Enhancements

- Multi-browser execution
- API automation integration
- CI/CD pipeline integration
- Docker support
- Allure reporting
- Test execution dashboard
- Parallel execution optimization

---

Author

Bhargav Borisagar

Senior QA Automation Engineer

Skills:

- Playwright
- TypeScript
- Selenium
- API Testing
- Test Automation Framework Design
- CI/CD Integration
