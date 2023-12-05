// Stap 1 & 2: Selecteer en itereer over de rijen
cy.get("selectorVoorRijen").each(($rij, index, $list) => {
  // Stap 3: Open de rij (indien nodig)
  cy.wrap($rij).click(); // Pas dit aan op basis van hoe je rijen opent

  // Stap 4: Vind de datumwaarde
  cy.wrap($rij)
    .find("selectorVoorDatum")
    .then(($datum) => {
      const datumwaarde = $datum.text();

      // Stap 5: Schrijf de datumwaarde naar een bestand
      const bestandsnaam = "datumwaarden.txt";
      cy.writeFile(bestandsnaam, `Rij ${index}: ${datumwaarde}\n`, {
        flag: "a+",
      });
    });
});
