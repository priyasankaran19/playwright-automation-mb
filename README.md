# Playwright Demo with Page Object Model (POM)

This project demonstrates how to use Playwright with the Page Object Model (POM) design pattern for automating web application tests. 
The example includes two main web pages - a login page and a inventory page.

## Table of Contents


- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [CI/CD](#cicd)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed
- [Playwright](https://playwright.dev/docs/intro) installed
- [Visual Studio Code](https://code.visualstudio.com/download) installed (optional)

### Installing

1. Clone the repository
2. Install dependencies
```
npm install
```

## Running Tests

To run the tests, execute the following command:
```
npm run test
```

## Test Reports

Test reports are available in playwright-reports folder. The reports are generated using [Playwright Reporter]

## CI/CD

This project is integrated with GitHub Actions for CI/CD. 
The workflow is defined in the [ci.yml](.github/workflows/ci.yml) file. 
The workflow is triggered on every push to the main branch. The workflow consists of the following steps:

1. Checkout the code
2. Install dependencies
3. Run tests