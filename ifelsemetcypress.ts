cy.get('jouwSelector').find('div').then((elements) => {
    if (elements.some(element => element.innerText.includes('jouw tekst'))) {
      cy.log('Element gevonden met de opgegeven tekst.');
    } else {
      cy.log('Geen elementen gevonden met de opgegeven tekst.');
    }
  });

  of 

  cy.get('jouwSelector').find('div').then(($divs) => {
    const textExists = $divs.toArray().some(div => div.innerText.includes('jouw tekst'));
  
    if (textExists) {
      cy.log('Tekst gevonden');
      // Doe hier iets als de tekst gevonden is
    } else {
      cy.log('Tekst niet gevonden');
      // Doe hier iets anders als de tekst niet gevonden is
    }
  });
  