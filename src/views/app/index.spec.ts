// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8084/");
  });

  it("Visits the app root url", () => {
    cy.contains("div", "ds");
  });
});
