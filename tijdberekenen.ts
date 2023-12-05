// Functie om de Nederlandse datumstring om te zetten naar een Date object
function parseDutchDate(dateString: string): Date {
  const [day, month, yearAndTime] = dateString.split("-");
  const [year, time] = yearAndTime.split(" ");
  return new Date(`${year}-${month}-${day} ${time}`);
}

// Cypress commando's om de datums op te halen en het verschil te berekenen
cy.get("selector_voor_eerste_datum")
  .invoke("text")
  .then((firstDateString) => {
    const firstDate = parseDutchDate(firstDateString);

    cy.get("selector_voor_tweede_datum")
      .invoke("text")
      .then((secondDateString) => {
        const secondDate = parseDutchDate(secondDateString);

        // Bereken het verschil in seconden
        const differenceInSeconds =
          Math.abs(secondDate.getTime() - firstDate.getTime()) / 1000;
        console.log("Verschil in seconden:", differenceInSeconds);
      });
  });
