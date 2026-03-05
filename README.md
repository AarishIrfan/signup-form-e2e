Playwright-based end-to-end test automation project for practicing form submissions on a demo signup page. This project demonstrates best practices in test automation, including Page Object Model (POM), custom fixtures, dynamic data generation, and comprehensive reporting.

## Features

- **Page Object Model (POM)**: Clean separation of UI interactions in `SignupPage.ts`.
- **Custom Fixtures**: Extended Playwright tests with reusable components via `baseTest.ts`.
- **Dynamic Data Generation**: Randomized test data using Faker.js for realistic inputs.
- **File Upload Support**: Handles profile picture uploads seamlessly.
- **Alert Handling**: Automatic dismissal of browser dialogs on form submission.
- **Multi-Browser Testing**: Configured for Chromium, Firefox, and WebKit via CI.
- **Advanced Reporting**: HTML reports with screenshots/videos, plus Allure integration.
- **CI/CD Ready**: GitHub Actions workflow for automated testing on pushes and PRs.
- **TypeScript Support**: Type-safe code for better maintainability.

## Tech Stack

- **Playwright**: Core testing framework for browser automation.
- **TypeScript**: For type-safe test scripts and configuration.
- **Faker.js**: Generates fake user data.
- **Allure**: Detailed test reporting.
- **Node.js**: Runtime environment (v18+ recommended).
- **GitHub Actions**: CI/CD pipeline.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd automating-practice-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

## Usage

### Running Tests

- Run all tests:
  ```bash
  npm test
  # or
  npx playwright test
  ```

- Run a specific test file:
  ```bash
  npx playwright test tests/signup.spec.ts
  ```

- Run tests in headed mode (visible browser):
  ```bash
  npx playwright test --headed
  ```

- Run tests with debugging:
  ```bash
  npx playwright test --debug
  ```

### Viewing Reports

- Open HTML report:
  ```bash
  npx playwright show-report
  ```

- Generate and view Allure report (requires Allure CLI):
  ```bash
  npm install -g allure-commandline
  allure serve allure-results
  ```

### Codegen (Optional)

To generate test code by recording interactions:
```bash
npx playwright codegen https://qavbox.github.io/demo/signup/
```
Copy the output into your test files and refactor as needed.

## Project Structure

```
automating-practice-form/
├── assets/                 # Static files (e.g., profile pictures)
├── fixtures/               # Custom test fixtures (baseTest.ts)
├── pages/                  # Page Object Models (SignupPage.ts)
├── reports/                # Generated reports (HTML, Allure)
├── test-results/           # Temporary test artifacts
├── tests/                  # Test specifications (signup.spec.ts)
├── utils/                  # Utility functions (Data.ts)
├── .github/workflows/      # CI/CD workflows
├── package.json            # Dependencies and scripts
├── playwright.config.ts    # Playwright configuration
└── README.md               # This file
```

## Configuration

- **playwright.config.ts**: Customize timeouts, browsers, reporters, and more.
- **Data.ts**: Modify data generation logic (e.g., add more fields or constraints).
- **SignupPage.ts**: Update selectors or add new form interactions.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make changes and add tests.
4. Run tests: `npm test`.
5. Commit and push: `git push origin feature/your-feature`.
6. Open a pull request.

Ensure all tests pass and follow the existing code style (TypeScript, POM).


## Troubleshooting

- **Browser not found**: Run `npx playwright install`.
- **Tests failing**: Check screenshots in `test-results/` or HTML report.
- **Data issues**: Verify `assets/` files exist and paths are correct.
- **CI failures**: Review GitHub Actions logs and uploaded artifacts.
