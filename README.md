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
- [x] キャラクター設定集ページ(characters.html / css/characters.css / js/characters.js / data/characters.js)
- [x] 机探索ゲームページ(desk.html / css/desk.css / js/desk.js / data/desk-objects.js)
- [x] お土産コーナーページ(shop.html / css/shop.css / js/shop.js / data/shop-items.js)
- [x] 隠しページ(secret.html / css/secret.css / js/secret.js)

## 隠しページ(secret.html)について

- **完全に別デザイン**。common.cssは読み込まず、`css/secret.css` だけで完結(平成〜2000年代初期の個人サイト風)。
- **入口**：トップページ(index.html)のフッターに、小さい蠅アイコン(`.easter-egg`)をこっそり設置。薄く表示されていて、クリックすると secret.html に飛ぶ。
  - アイコン画像は `assets/images/secret/fly-easter-egg.png`
  - 見た目を変えたいときは `css/top.css` の `.easter-egg` を編集
- **来訪者カウンター**は雰囲気演出用(ブラウザのlocalStorageで見た目上カウントしているだけで、実際のアクセス解析ではない)。
- 文章(挨拶・ひとことログの内容など)は `secret.html` 内の `★` コメント箇所を書き換えればOK。

## お土産コーナーページ(shop.html)の編集方法

- **配布物を追加/変更したいとき** → `data/shop-items.js` だけ編集すればOK。
- `image`(サムネイル表示用)と`file`(実際にダウンロードされるファイル)は同じパスでもOK。
- 画像は `assets/images/shop/` フォルダに入れる。
- 今入っている wallpaper-01.jpg, icon-01.jpg は仮の画像です。

## 机探索ゲームページ(desk.html)の編集方法

- **机の背景画像を差し替える** → `assets/images/desk/desk-bg.jpg` を自分のイラストに同じ名前で上書き(コード変更不要)。
- **クリックできる場所(オブジェクト)を追加/変更** → `data/desk-objects.js` を編集。
  - `x`, `y`, `width`, `height` は机の画像に対する「%」指定(左上が0,0)。だいたいの位置で決めて、ブラウザで確認しながら微調整すればOK。
  - `hidden: true` にすると、見た目が透明な「隠しオブジェクト」になる。見つけてクリックすると発見が記録され(ブラウザに保存)、`desk-progress` に「◯/◯個 発見」と表示される。

## キャラクター設定集ページ(characters.html)の編集方法

- **キャラを追加/変更したいとき** → `data/characters.js` だけ編集すればOK。
- `profile` の中は `{ label: "項目名", value: "内容" }` の組を自由に増減できる(例:「好きなもの」「口癖」なども追加可)。値を空にしておくとその項目は表示されない。
- 立ち絵画像は `assets/images/characters/` フォルダに入れる。
- 今入っている sample-01, sample-02.png は仮の画像です。

## 個展ページ(gallery.html)の編集方法

- **作品を追加/変更したいとき** → `data/works.js` だけ編集すればOK。HTML/CSS/JSは触らなくて大丈夫。
- 画像は `assets/images/works/` フォルダに入れて、`works.js` の `image` にファイル名を書く。
- 今入っている sample-01〜03.jpg は仮の画像です。実際のイラストに差し替えてください。
