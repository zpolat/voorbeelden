import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I wait for {int} seconds', (seconds) => {
  cy.wait(seconds * 1000);
});
