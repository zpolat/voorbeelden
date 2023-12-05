describe('Pagina waarden opslaan', () => {
    it('navigeert door pagina's en slaat waarden op', function () {
      // Functie om door pagina's te navigeren
      function navigateAndSave() {
        cy.get('selector-voor-element').then(function (element) {
          const waarde = element.text();
  
          // Waarde wegschrijven naar een bestand
          cy.writeFile('pad/naar/bestand.txt', waarde, { flag: 'a+' });
  
          // Klik op de 'next' knop als deze bestaat
          cy.get('selector-voor-next-knop').then(function ($button) {
            if ($button.length) {
              $button.click();
              navigateAndSave(); // Herhaal voor de volgende pagina
            }
          });
        });
      };
  
      cy.visit('url-van-je-website');
      navigateAndSave();
    });
  });

  
  describe('Pagina waarden opslaan', () => {
    it('navigeert door pagina\'s en slaat waarden op', function () {
      // Functie om door pagina's te navigeren
      function navigateAndSave() {
        cy.get('selector-voor-element').then(function (element) {
          const waarde = element.text();
  
          // Waarde wegschrijven naar een bestand
          cy.writeFile('pad/naar/bestand.txt', waarde, { flag: 'a+' });
  
          // Controleer of de 'next' knop bestaat en klikbaar is
          cy.get('selector-voor-next-knop').should('be.visible').and('be.enabled').then($button => {
            if ($button.length) {
              $button.click();
              navigateAndSave(); // Herhaal voor de volgende pagina
            }
          });
        });
      };
  
      cy.visit('url-van-je-website');
      navigateAndSave();
    });
  });
  