/// <reference types="cypress" />
import loc from '../support/locators'
import msn from '../support/messages'
require('cypress-xpath');

//para executar os testes e gerar os relatórios utilizar o comando npm run test
describe('Página Inicial', () => {
  //executa uma vez antes de todos os testes
  before(() => {
  })

  //executa antes de cada caso de teste
  beforeEach(() => {
    cy.visitarPaginaInicial()
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Validar titulo da página', () => {
    cy.get(loc.HOME.titulo).should('have.text', 'alura tracker')
  })

  it('Validar botão de alterar estilo', () => {
    cy.xpath(loc.HOME.fn_xp_botao('Ativar modo escuro')).should('be.enabled')
  })

  it('Validar input descrição tarefa', () => {
    cy.get(loc.HOME.input_descricao_tarefa).should('exist')
  })

  it('Validar tempo inicial', () => {
    cy.xpath(loc.HOME.xp_tempo_inicial).should('contain.text', '00:00:00')
  })

  it('Validar botão play', () => {
    cy.xpath(loc.HOME.fn_xp_botao('play')).should('be.enabled')
  })

  it('Validar botão stop', () => {
    cy.xpath(loc.HOME.fn_xp_botao('stop')).should('be.disabled')
  })

  it('Validar mensagem inicial', () => {
    cy.get(loc.HOME.mensagem_inicial).should('contain.text', msn.MESSAGE.mensagem_inicial)
  })
  
})
