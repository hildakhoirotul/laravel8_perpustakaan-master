// User Add a category
describe('User Add a Category', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('#email').type('admin@gmail.com');
    cy.get('#password').type('123123123');
    cy.get('form').submit();
    cy.get('[href="#"] > .nav-icon').click()
    cy.get('[href="#"] > .nav-icon').click()
    cy.get(':nth-child(1) > .nav-link > .far').click()
    cy.get('#tambah').click();
    cy.get('#nama').type('new_category');
    cy.get('#sim').click();
    cy.get('.ml-auto > .nav-item > .nav-link').click()
  })
})

//  Use Edit A Category
describe('User Edit a Category', ()=>{
  it('passes', () =>{
    cy.visit('http://127.0.0.1:8000/');
    cy.get('.ml-auto > :nth-child(1) > .nav-link').click();
    cy.get('#email').type('admin@gmail.com');
    cy.get('#password').type('123123123');
    cy.get('form').submit();
    cy.get('[href="#"] > .nav-icon').click();
    cy.get('[href="#"] > .nav-icon').click();
    cy.get(':nth-child(1) > .nav-link > .far').click();
    cy.get('#edit').click();
     cy.get('#nama').clear();
    cy.get('#nama').type('Novel');
    cy.get('#update').click();
    cy.get('.ml-auto > .nav-item > .nav-link').click();
  })
})

// User Delete a category
describe('User Delete a Category', ()=>{
  it('passes', () =>{
    cy.visit('http://127.0.0.1:8000/');
    cy.get('.ml-auto > :nth-child(1) > .nav-link').click();
    cy.get('#email').type('admin@gmail.com');
    cy.get('#password').type('123123123');
    cy.get('form').submit();
    cy.get('[href="#"] > .nav-icon').click();
    cy.get('[href="#"] > .nav-icon').click();
    cy.get(':nth-child(1) > .nav-link > .far').click();
    cy.get('#delete').click();
    cy.get('#hapus').click();
    cy.get('.ml-auto > .nav-item > .nav-link').click();
  })
})