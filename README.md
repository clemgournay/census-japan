# ゆめみフロントエンド試験・Census Japan
ゆめみフロントエンド試験の為に開発した日本の各都道府県をグラフで確認できるアプリです。<br/>
Reactフレームワーク「Next」で開発したものになります。<br/>

デプロイURL：[https://census-japan.vercel.app](https://census-japan.vercel.app)<br/>
ドキュメンテーションURL：[https://census-japan.vercel.app/docs/](https://census-japan.vercel.app/docs/)<br/>
基となる指示：[フロントエンドコーディング試験](https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d)

## プレビュー

### PC表示
![PC表示](https://github.com/clemgournay/census-japan/raw/main/readme/PC.gif "PC表示")

### SP表示
![SP表示](https://github.com/clemgournay/census-japan/raw/main/readme/SP.gif "SP表示")


## 使い方
### PC表示
画面の左側にある都道府県ボタンをクリックすると、右側のグラフにデータが反映されます。<br />
ダブルチェックアイコンボタンで全選択、「×」アイコンボタンでリセットできます。<br />
ヘッダーの右側にあるボタンでダークモードに切り替えることができます。<br />
また、生成されたグラフのURLをコピーすることでグラフをシェアすることも可能です。

### SP表示
スマホの場合は画面の下にある「絞り込み」カードを上にSwipeすることですべてのボタンが一つの画面に表示されるデザインになっています。<br />
ダークモードも利用可能です。<br />
また、画面を横に回転してもグラフが見れますが、基本的には縦の状態が最適な使い方です。

## アピールポイント
- ユーザーがグラフをシェアできるようにURLパラメーターでグラフを制御しています。
- 読みやすさの為、横幅の広い画面ではグラフがページのほとんどのスペースを使うようにデザインしました。
- モバイルでの使いやすさとグラフの読みやすさを配慮し、都道府県や人口カテゴリーの選択はSwipeジェスチャーで表示・非表示できるように実装しました。
- 正式的なアプリケーションをイメージし、快適にグラフを読めるようにダークモードを用意しました。
- 簡単に都道府県を選択できるように、「全選択」ボタンと「リセット」ボタンを追加しました。
- セキュリティーの為、SSRを利用し、APIコールはすべてサーバーサイドで実装しました。
- 読み込みをわかりやすくする為にSkeletonを実装しました。
- デザインは生成AIやネット上で既存するデザインをインスピレーション受けて制作しました。
- アプリ名は生成AIでリストを出力し、インスピレーション受けました。
- アプリ名やアイコンは生成AIで生成し、手動で編集しました。


### 追加モジュール
| パッケージ名   |      種類     |         利用目的        |
| ------------- | ------------- | ---------------------  |
| Rechart       |      公開用    |     グラフ表示         | 
| FontAwesome   |      公開用    |     アイコン表示       | 
| Sass          |     開発用     |    CSS記述最適化       | 
| Cypress       |    開発用      |  テスト実装・実施       | 
| TypeDoc       |    開発用      | ドキュメンテーション生成 | 
| Lint          |    開発用      |      コードレビュー     | 

## ローカル起動方法
下記のコマンドを実行すると、[http://localhost:3000](http://localhost:3000)を開き、アプリをローカルで確認できます。
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## ビルド方法
ビルドコマンドが下記となります。
ビルド後、自動的にVercelに反映されるようになっています。
```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## コードレビュー
コードレビューはLintでチェックできます。
```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## e2eテスト実施方法
e2eテストを起動するコマンドが下記となります。
```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## ドキュメンテーション生成方法
Typedocでドキュメンテーションを生成できるようになっています。
```bash
npm run docs
# or
yarn docs
# or
pnpm docs
# or
bun docs
```

## 今後の課題
今回は効率の為にコミットした上でオンラインでビルド状態を確認していました為、いくつかのビルドエラー履歴が残ってしまいました。<br>

## 参考

### Reactフレームワーク「Next」
ホームページ:<br/>
[https://nextjs.org/](https://nextjs.org/)

### グラフライブラリ「Rechart」
ホームページ:<br/>
[https://recharts.org/](https://recharts.org/)

### アイコンライブラリ「FontAwesome」
ホームページ: <br/>
[https://fontawesome.com/](https://fontawesome.com/)

### CSS記述最適化ライブラリ「SASS」
ホームページ: <br/>
[https://sass-lang.com/](https://sass-lang.com/)

### テスト実施ツール「Cypress」
ホームページ: <br/>
[https://www.cypress.io/](https://www.cypress.io/)

### ドキュメンテーション作成ライブラリ「TypeDoc」
ホームページ: <br/>
[https://typedoc.org/](https://typedoc.org/)

### コードレビューライブラリ「ESLint」
ホームページ:<br/>
[https://eslint.org/](https://eslint.org/)

### 生成人工知能「ChatGPT」
ホームページ: <br/>
[https://chatgpt.com/](https://chatgpt.com/)