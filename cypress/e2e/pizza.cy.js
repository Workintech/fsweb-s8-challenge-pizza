/* eslint-disable no-undef */
describe("form alanı testler",()=>{
     beforeEach(()=>{
   cy.visit("http://localhost:3000/pizza");
     })
    it("1 den fazla malzeme seçimi kontrolü",()=>{
        cy.get('[type="checkbox"]')
        .check(['Pepperoni','Sucuk',"Domates","Biber","Kabak,","Tavuk Izgara"]).should('be.checked')
    })
    it("Pizza ismi  input kontrolü",()=>{
        cy.get("#name-input").type("Sucuklu Pizza").should("have.value","Sucuklu Pizza")
    })
    it("Zorunlu alanları doldurup formu gönderme",()=>{
        cy.get('[type="checkbox"]')
        .check(['Pepperoni','Sucuk',"Domates","Biber","Kabak,","Tavuk Izgara"]).should('be.checked')
        cy.get("#name-input").type("Sucuklu Pizza").should("have.value","Sucuklu Pizza")
        cy.get("#order-button").click()
    })
    
    
})