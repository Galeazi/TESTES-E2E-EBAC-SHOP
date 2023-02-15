class perfilCheckout {

    addProdutos(produto, tamanho, cor, quantidade){
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
    }

    checkout(nome, sobrenome, empresa, pais, endereço, complemento, cidade, estado, cep, telefone, email){
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + "{enter}")
        cy.get('#billing_address_1').type(endereço)
        cy.get('#billing_address_2').type(complemento)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + "{enter}")
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new perfilCheckout()