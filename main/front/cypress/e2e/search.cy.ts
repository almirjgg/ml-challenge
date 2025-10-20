/// <reference types="cypress" />

describe('Search Flow', () => {
  it('should allow a user to search for a product, view results, and see product details', () => {
    // 1. Visita la página principal
    cy.visit('/');

    // 2. Encuentra el input de búsqueda, escribe "iPhone" y presiona Enter
    cy.get('input[placeholder="Nunca dejes de buscar"]').type('iPhone{enter}');

    // 3. Verifica que la URL ahora contenga los parámetros de búsqueda
    cy.url().should('include', '/items?search=iPhone');

    // 4. Verifica que se muestren 4 items en la lista de resultados
    cy.get('.product-list > .product').should('have.length', 4);

    // 5. Haz clic en el primer producto de la lista
    cy.get('.product-list > .product').first().click();

    // 6. Verifica que la URL cambió a la página de detalle de un item
    cy.url().should('include', '/items/MLA');

    // 7. Verifica que el título del producto y el botón "Comprar" sean visibles
    cy.get('.product-detail__title').should('be.visible');
    cy.get('.product-detail__buy-button').should('contain', 'Comprar');
  });
});
