# Test Automation Framework with Cypress

<a href="https://pecodesoftware.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ut0ogcezapo03ualxivd" alt="pecode" width="256" height="256"/></a>

## This repository's was created like a part of technical interview with Pecode

### Testing was implemented for the login page. Invalid credentials are being used. Also, a few more negative scenarios were added with attempts to log in with empty fields.

### For this task next methods and techniques being used:

1. Page Object Model
2. Test-data in a separate file
3. Mochawesome report (mochawesome-report dir)
4. Jenkiinsfile with pipeline script to run tests
5. Dockerfile to run in docker container
6. Pre-commit hook to run Prettier for auto code formatting before commit
7. Github Actions yml file

## Setup:

1. Clone this repository
2. Navigate to the folder of cloned repository and run terminal
3. Install dependencies with `npm install`
4. To run test in headless mode `npm test`
5. To run test in chrome `triggerTest-chrome`
6. To run test in firefox `triggerTest-firefox`
7. To merge reports and generate html mochawesome report`mochawesome-merge`
8. Delete report results folder if is any `delete-results`
9. Delete all results and reports, run all tests and generate new report `cypress-regression-pack`

## To run test dockerized:

1. `docker build --tag pecode-task-cypress .` (to build image)
2. `docker run --name pecode-task-cypress -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:10.11.0 run`
3. `docker image rm ` to remove image

## Jenkins Setup

1. Make sure that NodeJS Plugin is installed
2. Java JDK PATH is added
