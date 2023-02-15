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
  open(url) {
    cy.visit(url);
  }
  login(username, password) {
    this.userNameInput.type(username);
    this.userPasswordInput.type(password);
    this.submitBtn.click();
  }
}

export default new LoginPage();
