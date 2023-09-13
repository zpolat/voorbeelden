const fs = require('fs');
const path = require('path');

Given('Ik download het wav bestand van {string}', (url) => {
  cy.request(url).then((response) => {
    const filePath = path.join(__dirname, '..', 'downloads', 'downloaded.wav');
    fs.writeFileSync(filePath, response.body, 'binary');
  });
});

Then('moet het overeenkomen met het bestand in mijn workspace', () => {
  const downloadedFilePath = path.join(__dirname, '..', 'downloads', 'downloaded.wav');
  const workspaceFilePath = path.join(__dirname, '..', 'workspace', 'expected.wav');
  
  const downloadedFile = fs.readFileSync(downloadedFilePath);
  const workspaceFile = fs.readFileSync(workspaceFilePath);

  expect(downloadedFile).to.deep.equal(workspaceFile);
});
