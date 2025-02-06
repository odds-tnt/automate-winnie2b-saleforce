# automate-winnie2b-saleforce
## Set up project
1. Install the dependencies:
```
npm install
```
2. Install Playwright browsers:
```
npx playwright install
```
## How to run project
1. Runs the end-to-end tests.
```
npx playwright test
``` 
2. Starts the interactive UI mode.
```
npx playwright test --ui
``` 
3. Runs the tests only on Desktop Chrome.
```
npx playwright test --project=chromium
```
4. Runs the tests in a specific file.
```
npx playwright test example
```
5.  Runs the tests in debug mode.
```
npx playwright test --debug
```
6. Auto generate tests with Codegen.
```
npx playwright codegen
``` 
We suggest that you begin by typing:
```
npx playwright test
```
