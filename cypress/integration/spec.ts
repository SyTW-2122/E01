//cypress usa mocha y chai, protractor usa karma, creo del segundo 

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200');
  });

  it('Comprueba el contenido de la tarjeta de registro', () => {
    cy.visit('http://localhost:4200');
    cy.get(':nth-child(1) > .thumbnail > .caption > h3').contains('Para comenzar a ver y/o utilizar la web, realice el registro de usuario');
  });

  it('Hace un click sobre el boton de registro', () => {
    cy.visit('http://localhost:4200');
    cy.get(':nth-child(1) > .thumbnail > .caption > h3').contains('Para comenzar a ver y/o utilizar la web, realice el registro de usuario');
    cy.get(':nth-child(1) > .thumbnail > .caption > a > .btn').click();
  });
})
