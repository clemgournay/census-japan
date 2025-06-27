const APP_URL = 'https://census-japan.vercel.app';
const MOBILE_HEADERS = {headers: {
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
}};

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('NEXT_REDIRECT')) {
    return false;
  }
});

describe('PC > 要素の表示・読み込み', () => {

  it('「都道府県選択」カードが存在する', () => {
    cy.visit(APP_URL);
    cy.contains('都道府県選択').should('exist');
  });

  it('「各都道府県」カードが存在する', () => {
    cy.visit(APP_URL);
    cy.contains('各都道府県').should('exist');
  });

  it('「北海道」都道府県ボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('北海道').should('exist');
  });

  it('「東京都」都道府県ボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('東京都').should('exist');
  });

  it('「神奈川県」都道府県ボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('神奈川県').should('exist');
  });

  it('「総人口」カテゴリーボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('総人口').should('exist');
  });
  it('「年少人口」カテゴリーボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('年少人口').should('exist');
  });
  it('「生産年齢人口」カテゴリーボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('生産年齢人口').should('exist');
  });
  it('「老年人口」カテゴリーボタンが読み込まれている', () => {
    cy.visit(APP_URL);
    cy.contains('老年人口').should('exist');
  });
  
});


describe('PC > グラフの制御', () => {
  it('都道府県ボタンを押すとURLに都道府県コードが追加される', () => {
    cy.visit(APP_URL);
    cy.visit('https://census-japan.vercel.app');

    cy.contains('神奈川県').click();
    cy.url().should('include', 'prefs=13,14');
  });

  it('都道府県ボタンを押すとURLグラフに都道府県のデータが表示される', () => {
    cy.visit(APP_URL);
    cy.visit('https://census-japan.vercel.app');

    cy.contains('神奈川県').click();
    cy.get('.recharts-wrapper').contains('神奈川');
  });

  it('既に選択されている都道府県ボタンを押すとURLに都道府県コードが消える', () => {
    cy.visit(APP_URL);
    cy.visit('https://census-japan.vercel.app');

    cy.contains('北海道').click();
    cy.url().should('include', 'prefs=13,1');
    cy.contains('北海道').click();
    cy.url().should('include', 'prefs=13');
  });

  it('全選択ボタンを押すとURLが「prefs=all」となる', () => {
    cy.visit(APP_URL);
    cy.get('*[class^="prefecture-card_card"]').find('button').eq(0).click();
    cy.url().should('include', 'prefs=all');
  });

  it('リセットボタンを押すと都道府県コードが「13」のみとなる', () => {
    cy.visit(APP_URL);
    cy.get('*[class^="prefecture-card_card"]').find('button').eq(1).click();
    cy.url().should('not.include', 'prefs');
  });

  it('「年少人口」ボタンを押すとURLが「category=年少人口」となる', () => {
    cy.visit(APP_URL);
    cy.contains('年少人口').click();
    cy.url().should('include', `category=${encodeURIComponent('年少人口')}`);
  });

  it('「生産年齢人口」ボタンを押すとURLが「category=生産年齢人口」となる', () => {
    cy.visit(APP_URL);
    cy.contains('生産年齢人口').click();
    cy.url().should('include', `category=${encodeURIComponent('生産年齢人口')}`);
  });

  it('「老年人口」ボタンを押すとURLが「category=老年人口」となる', () => {
    cy.visit(APP_URL);

    cy.contains('老年人口').click();
    cy.url().should('include', `category=${encodeURIComponent('老年人口')}`);
  });

  it('カテゴリーが「総人口」以外の状態で「総人口」ボタンを押すとURLが「category=総人口」となる', () => {
    cy.visit(APP_URL);

    cy.contains('老年人口').click();
    cy.wait(200);
    cy.contains('総人口').click();
    cy.url().should('include', `category=${encodeURIComponent('総人口')}`);
  });


});

describe('PC > テーマ変更', () => {
  it('「Dark」ボタンを押すと画面が暗くなる', () => {
    cy.visit(APP_URL);

    cy.contains('Dark').click();
    cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(25, 27, 43)');

  });

  it('「Dark」ボタンが押されている状態で「Light」ボタンを押すと画面が暗くなる', () => {
    cy.visit(APP_URL);

    cy.contains('Dark').click();
    cy.contains('Light').click();
    cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(245, 245, 245)');
  }); 
});


describe('SP > フィルターカード表示確認', () => {
  before(() => {
    cy.viewport('iphone-5')
  });
  
  it('上下Swipe動作', () => {
    cy.visit(APP_URL, MOBILE_HEADERS);

    cy.contains('絞り込み').parent().trigger('touchstart', {
      touches: [{ pageY: 100, pageX: 0 }]
    })
    .trigger('touchmove', {
      touches: [{ pageY: 0, pageX: 0 }]
    });
    cy.wait(400);
    cy.get('main > *[class^="filter-card"]').then(e => {
      expect(e.position().top).to.be.eq(80)
    });

    cy.contains('絞り込み').parent().trigger('touchstart', {
      touches: [{ pageY: 0, pageX: 0 }]
    })
    .trigger('touchmove', {
      touches: [{ pageY: 100, pageX: 0 }]
    });
    cy.wait(400);
    cy.get('main > *[class^="filter-card"]').then(e => {
      expect(e.position().top).to.be.not.eq(80)
    })
  }); 

});

describe('SP > テーマ切り替え確認', () => {

  before(() => {
    cy.viewport('iphone-5')
  });
    
  it('ダークモード切り替え確認', () => {
    cy.visit(APP_URL, MOBILE_HEADERS);

    cy.contains('Dark').click();
    cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(25, 27, 43)');

    cy.contains('Light').click();
    cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(245, 245, 245)');
  });
})