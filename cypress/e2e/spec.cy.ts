Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('NEXT_REDIRECT')) {
    return false;
  }
});

describe('要素の表示', () => {

  it('画面パーツの存在を確認', () => {
    cy.visit('https://census-japan.vercel.app');
    cy.contains('都道府県選択').should('exist');
    cy.contains('各都道府県').should('exist');
  });

  it('都道府県ボタンの存在を確認', () => {
    cy.visit('https://census-japan.vercel.app');
    cy.contains('北海道').should('exist');
    cy.contains('東京都').should('exist');
    cy.contains('神奈川県').should('exist');
    cy.contains('埼玉県').should('exist');
  });

  it('カテゴリーボタンの存在を確認', () => {
    cy.visit('https://census-japan.vercel.app');
    cy.contains('総人口').should('exist');
    cy.contains('年少人口').should('exist');
    cy.contains('生産年齢人口').should('exist');
    cy.contains('老年人口').should('exist');
  });
});


describe('グラフの制御', () => {
  it('都道府県ボタンのクリック動作確認', () => {
    cy.visit('https://census-japan.vercel.app');
    cy.contains('神奈川県').click();
    cy.url().should('include', 'prefs=13,14');
    cy.get('.recharts-wrapper').contains('神奈川');

    /*cy.contains('神奈川県').click();
    cy.contains('北海道').click();
    cy.url().should('include', 'prefs=13,14,1');
    cy.contains('北海道').click();
    cy.url().should('not.include', 'prefs=13,14,1');*/

  });
});