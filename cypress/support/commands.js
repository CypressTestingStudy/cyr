import '@testing-library/cypress/add-commands'

Cypress.Commands.add('amazonWebSite', function () {
  cy.visit('https://www.amazon.com/');
});

Cypress.Commands.add('loginAmazon', function (user) {
  cy.visit('https://www.amazon.com/');
  cy.contains('Sign in').click();
  cy.get('#ap_email').clear().type(user.email);
  cy.get('.a-button-inner > #continue').click();
  cy.get('#ap_password').clear().type(user.pwd);
  cy.get('#signInSubmit').click();
});

Cypress.Commands.add('selectSectionYT', function (label, sectionTab) {
  cy.visit('https://www.youtube.com/');
  cy.get('#guide-button').click();
  cy.contains(label).click();
  cy.get('ytd-game-details-renderer')
    .find('a')
    .each(function ($el, index, $list) {
      const textSectionTab = $el.find('#title').text();
      if (textSectionTab.includes(sectionTab)) {
        $el.find('#img').click();
      }
    });
});

// Rodri @rodrigoaaam you can put your code here!

Cypress.Commands.add('loginFashion', function (user) {
  cy.visit('https://www.amazon.com/');
  cy.contains('Sign in').click();
  cy.get('#ap_email').clear().type(user.email);
  cy.get('.a-button-inner > #continue').click();
  cy.get('#ap_password').clear().type(user.pwd);
  cy.get('#signInSubmit').click();
});

Cypress.Commands.add('logoutFashion', () => {
  cy.contains('Login').should('not.exist');
  cy.get('.avatar').click();
  cy.contains('Logout').click();
});

Cypress.Commands.add('createUserFashion', (user) => {
  cy.request({
    method: 'POST',
    url: 'https://www.example.com/tokens',
    body: {
      email: 'admin_username',
      password: 'admin_password',
    },
  }).then((resp) => {
    cy.request({
      method: 'POST',
      url: 'https://www.example.com/users',
      headers: { Authorization: 'Bearer ' + resp.body.token },
      body: user,
    });
  });
});
