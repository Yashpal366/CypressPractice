describe('Add/Remove Element',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    }),

    it('Add element',()=>{
        cy.get('ul > :nth-child(2) > a').click();
        cy.get('button').click();
        cy.get('.added-manually').click();
    }),

    it('File download',()=>{
        cy.get(':nth-child(17) > a').click();
        cy.get('[href="download/upload-me.txt"]').click();
    })
})