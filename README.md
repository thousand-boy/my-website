# Portfolio — Yuya Matsumoto

Pythonバックエンドエンジニアを目指すYuya Matsumotoのポートフォリオサイトです。
経歴・学習内容・個人開発の成果物を、1ページで確認できるようにまとめています。

- 公開URL：https://thousand-boy.github.io/portfolio/
- GitHub：https://github.com/thousand-boy

## 使用技術

| 技術 | 用途 |
|---|---|
| HTML | ページの構造（`header`・`nav`・`main`・`section`・`footer` など） |
| CSS | レイアウト（Flexbox・CSS Grid）、レスポンシブ対応（メディアクエリ）、配色の変数化 |
| JavaScript | スマートフォン幅のメニュー開閉、スクロールに合わせた表示 |
| GitHub Pages | 公開 |

ライブラリやフレームワーク、Node.js・npmは使っていません。ビルドの手順もありません。

## ファイル構成

```text
portfolio/
├── index.html      # ページ本体（1ページ構成）
├── css/
│   └── style.css   # レイアウトとデザイン
├── js/
│   └── main.js     # メニューの開閉とスクロール表示
├── assets/
│   └── favicon.svg # ファビコン
└── README.md
```

## ローカルでの確認方法

`index.html` をブラウザで開くと表示できます。

## JavaScriptで実装した機能

1. スマートフォン幅でのメニューの開閉
   - 開閉状態を `aria-expanded` で読み上げソフトにも伝える
   - リンクを選んだとき、Escキーを押したとき、Tabキーでメニューの外へ移動したときに閉じる
2. スクロールに合わせたセクションの表示（Intersection Observer）

JavaScriptが無効な環境でも、すべての内容とリンクを利用できます。

## 配慮したこと

- 見出しの階層と、`header`・`nav`・`main`・`footer` などの要素でページの構造を表す
- キーボードだけで操作でき、フォーカスの位置が見えるようにする
- 固定ヘッダーの下に、リンク先やフォーカスした要素が隠れないようにする
- 動きを減らす設定（`prefers-reduced-motion`）のときは、スムーズスクロールと表示アニメーションを止める
- 文字と背景のコントラスト比を、WCAG 2.2のAA基準（4.5:1）以上にする
- スキルは数値で示さず、使った場面（個人開発・教材・今後の予定）で分ける

## 確認したこと

- W3CのHTML・CSSバリデーター（Nu Html Checker）でエラーなし
- 1440px・1280px・768px・375pxの画面幅で表示を確認し、横スクロールが出ないこと
- ブラウザのコンソールにエラーが出ないこと
- キーボード操作、JavaScript無効時、動きを減らす設定での表示

## AIの活用について

構成案の検討、コードの下書きとレビューにAI（Claude）を利用しました。
MDN・WCAG・GitHub Docsなどの公式資料と照らし合わせて確認し、不要な処理を削り、自分で説明できる内容に修正したうえで公開しています。
