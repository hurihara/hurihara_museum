# 100フォロワッ記念サイト・制作メモ

このファイルは、あとで自分で編集するときのための「地図」です。
コードの中身が分からなくても、どこに何があるか把握できるように書いています。

## フォルダ構成

```
museum-site/
├── index.html          … トップページ(エントランス)
├── gallery.html         … 個展(未作成・これから追加)
├── characters.html      … キャラクター設定集(未作成・これから追加)
├── desk.html            … 机探索ゲーム(未作成・これから追加)
├── shop.html            … お土産コーナー(未作成・これから追加)
├── secret.html          … 隠しページ(未作成・これから追加/ナビには載せない)
│
├── css/
│   ├── common.css        … 全ページ共通(配色・ヘッダー・フッターなど)
│   └── top.css            … トップページだけの見た目
│   (今後ページごとに gallery.css, characters.css … を追加していく)
│
├── js/
│   ├── common.js          … 全ページ共通の軽い処理
│   └── top.js              … トップページだけの処理
│   (今後ページごとに gallery.js, characters.js … を追加していく)
│
├── data/                 … 作品やキャラクターの情報を書くファイルを置く予定
│                            (例: works.js, characters.js など)
│
└── assets/images/
    ├── works/            … 個展の作品画像
    ├── characters/       … キャラクターの立ち絵など
    ├── desk/              … 机探索ゲーム用の画像
    ├── shop/              … お土産コーナーの配布物・画像
    └── common/            … ロゴなど共通で使う画像
```

## 配色ルール(css/common.css の一番上にまとまっています)

- `--color-bg-deep` … 深い青緑(背景)
- `--color-cream` … 生成り(文字色)
- `--color-gold` … 金色(アクセント)

この3色の値を common.css の先頭で書き換えると、サイト全体の配色が変わります。
※隠しページ(secret.html)だけは別デザインなので、この変数を使いません。

## ページの増やし方(だいたいの流れ)

1. `css/common.css` と 新しいページ専用の CSS/JS を `<head>` / `</body>` 前で読み込む
2. `header` 部分(ロゴ・ナビ)は index.html からそのままコピーして使う
3. ページの中身だけそのページに合わせて作る

## 今の進捗

- [x] ファイル構成
- [x] トップページ(index.html / css/top.css / js/top.js)
- [x] 個展ページ(gallery.html / css/gallery.css / js/gallery.js / data/works.js)
- [ ] キャラクター設定集ページ
- [ ] 机探索ゲームページ
- [ ] お土産コーナーページ
- [ ] 隠しページ

## 個展ページ(gallery.html)の編集方法

- **作品を追加/変更したいとき** → `data/works.js` だけ編集すればOK。HTML/CSS/JSは触らなくて大丈夫。
- 画像は `assets/images/works/` フォルダに入れて、`works.js` の `image` にファイル名を書く。
- 今入っている sample-01〜03.jpg は仮の画像です。実際のイラストに差し替えてください。
