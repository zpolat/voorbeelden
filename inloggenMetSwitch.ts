Given(`I login as {string}`, (role) => {
  let username;
  let password;

  switch(role) {
    case 'admin':
      username = 'adminUsername';
      password = 'adminPassword';
      break;
    case 'user':
      username = 'userUsername';
      password = 'userPassword';
      break;
    case 'guest':
      username = 'guestUsername';
      password = 'guestPassword';
      break;
    default:
      throw new Error(`No such role: ${role}`);
  }

  cy.visit('/login');  // Vervang door het juiste URL-pad naar je loginpagina

  cy.get('input[name=username]').type(username);  // Vervang door de juiste selector voor het gebruikersnaamveld
  cy.get('input[name=password]').type(password);  // Vervang door de juiste selector voor het wachtwoordveld

  cy.get('button[type=submit]').click();  // Vervang door de juiste selector voor de inlogknop
});
