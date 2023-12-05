function formatDatumTijd(datumTijdStr) {
  const delen = datumTijdStr.split(" ");
  const datum = delen[0].split("/").reverse().join("-");
  const tijd = delen[1];
  return `${datum}T${tijd}`;
}

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
          const geformatteerdeStarttijd = formatDatumTijd($starttijd.text());
          const starttijdWaarde = new Date(geformatteerdeStarttijd);

          cy.wrap($rij)
            .find("selectorVoorEindtijd")
            .then(($eindtijd) => {
              const geformatteerdeEindtijd = formatDatumTijd($eindtijd.text());
              const eindtijdWaarde = new Date(geformatteerdeEindtijd);

              // Bereken het tijdverschil in seconden
              const tijdverschil = (eindtijdWaarde - starttijdWaarde) / 1000;

              // Schrijf de waarden naar een bestand
              const bestandsnaam = "gegevens.txt";
              const tekst = `Rij ${index}: Datum - ${datumwaarde}, Tijdverschil - ${tijdverschil} seconden\n`;
              cy.writeFile(bestandsnaam, tekst, { flag: "a+" });
            });
        });
    });
});
