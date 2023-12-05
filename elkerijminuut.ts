cy.get("selectorVoorRijen").each(($rij, index, $list) => {
  // Open de rij (indien nodig)
  cy.wrap($rij).click();

  // Vind de datumwaarde
  cy.wrap($rij)
    .find("selectorVoorDatum")
    .then(($datum) => {
      const datumwaarde = $datum.text();

      // Vind de start- en eindtijdwaarden
      cy.wrap($rij)
        .find("selectorVoorStarttijd")
        .then(($starttijd) => {
          const starttijdWaarde = new Date($starttijd.text());
          cy.wrap($rij)
            .find("selectorVoorEindtijd")
            .then(($eindtijd) => {
              const eindtijdWaarde = new Date($eindtijd.text());

              // Bereken het tijdverschil
              const tijdverschil = eindtijdWaarde - starttijdWaarde; // Dit geeft verschil in milliseconden
              const tijdverschilInMinuten = tijdverschil / 60000; // Omrekenen naar minuten

              // Schrijf de waarden naar een bestand
              const bestandsnaam = "gegevens.txt";
              const tekst = `Rij ${index}: Datum - ${datumwaarde}, Tijdverschil - ${tijdverschilInMinuten} minuten\n`;
              cy.writeFile(bestandsnaam, tekst, { flag: "a+" });
            });
        });
    });
});
