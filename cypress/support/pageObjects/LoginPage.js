class LoginPage {
  get userNameInput() {
    return cy.get("input[type='text']");
  }
  get userPasswordInput() {
    return cy.get("input[type='password']");
  }
  get submitBtn() {
    return cy.get("input[type='submit']");
  }
  get helpBlock() {
    return cy.get(".help-block");
  }
  /**
   * Visit desired page
   * @param  {String} url - url to open
   */
  open(url) {
    cy.visit(url);
  }
  /**
   * Performs login through login form
   * @param  {String} username - current username
   * @param  {String} password - current password
   */
  login(username, password) {
    this.userNameInput.type(username);
    this.userPasswordInput.type(password);
    this.submitBtn.click();
  }
}

export default new LoginPage();
