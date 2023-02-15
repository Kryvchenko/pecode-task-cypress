/// <reference types="cypress" />
import LoginPage from "../support/pageObjects/LoginPage";
import data from "../utils/test-data";

describe("AQA internship login webapp tetsing", () => {
  before(() => {
    LoginPage.open("/");
    // Web-page assertion
    cy.url().should("include", data.URI_PATH_PART);
  });
  beforeEach(() => {
    LoginPage.open("/");
  });
  it("Should try to login with invalid credentials", () => {
    LoginPage.login(data.USER_NAME, data.USER_PASSWORD);
    // Assertion
    LoginPage.helpBlock.then((el) => {
      // Get element text
      expect(el.text()).to.eq(data.HELP_BLOCK_TXT_NO_ACCOUNT);
    });
  });
  it("Should try to login without username", () => {
    LoginPage.login(" ", data.USER_PASSWORD);
    // Assertion
    LoginPage.helpBlock.then((el) => {
      // Get element text
      expect(el.text()).to.eq(data.HELP_BLOCK_TXT_NO_USER);
    });
  });
  it("Should try to login without password", () => {
    LoginPage.login(data.USER_NAME, " ");
    // Assertion
    LoginPage.helpBlock.then((el) => {
      // Get element text
      expect(el.text()).to.eq(data.HELP_BLOCK_TXT_NO_PWD);
    });
  });
});
