/// <reference types="cypress" />

const dadosProduto = require('../fixtures/produtos.json')
const dadosPerfilCheckout = require('../fixtures/perfilsCheckout.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.AddProdutos(
            dadosProduto[1].produto,
            dadosProduto[1].tamanho,
            dadosProduto[1].cor,
            dadosProduto[1].quantidade,
        )
        //checkout
        cy.Checkout(
            dadosPerfilCheckout[2].nome,
            dadosPerfilCheckout[2].sobrenome,
            dadosPerfilCheckout[2].empresa,
            dadosPerfilCheckout[2].pais,
            dadosPerfilCheckout[2].endereço,
            dadosPerfilCheckout[2].complemento,
            dadosPerfilCheckout[2].cidade,
            dadosPerfilCheckout[2].estado,
            dadosPerfilCheckout[2].cep,
            dadosPerfilCheckout[2].telefone,
            dadosPerfilCheckout[2].email,
        )
        //validar compra no final
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.product-quantity').should('contain', dadosProduto[1].quantidade)

    });


})