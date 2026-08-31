/* ==========================================================================
   shop-items.js
   お土産コーナーで配布するもの(壁紙・アイコンなど)のデータ。

   ★新しい配布物を追加したいとき★
   下の shopItems 配列に、同じ形の{ }のかたまりを1つコピペして増やしてください。

   image  … カードに表示するサムネイル画像
   file   … 実際にダウンロードされるファイル(imageと同じでもOK)
   type   … 「壁紙」「アイコン」など、配布物の種類タグ
   ========================================================================== */

const shopItems = [
  {
    id: "item-wallpaper-01",
    type: "壁紙",
    title: "100フォロワッ記念壁紙",     // ★差し替えてください
    image: "assets/images/shop/thankyou.webp",  // ★差し替えてください
    file: "assets/images/shop/thankyou.webp",   // ★差し替えてください
    description: "一応壁紙です。ご自由にお使いください。",
  },
  {
    id: "item-icon-01",
    type: "アイコン",
    title: "フリーアイコン①",
    image: "assets/images/shop/icon_1.webp",
    file: "assets/images/shop/icon_1.webp",
    description: "SNS用の正方形アイコンです。ご自由にお使いください。\n🍳🐱",
  },

  {
    id: "item-icon-02",
    type: "アイコン",
    title: "フリーアイコン②",
    image: "assets/images/shop/icon_2.webp",
    file: "assets/images/shop/icon_2.webp",
    description: "SNS用の正方形アイコンです。ご自由にお使いください。\n🐱",
  },

  {
    id: "item-icon-03",
    type: "アイコン",
    title: "フリーアイコン③",
    image: "assets/images/shop/icon_3.webp",
    file: "assets/images/shop/icon_3.webp",
    description: "SNS用の正方形アイコンです。ご自由にお使いください。\n😾",
  },

  // ↓ ここに新しい配布物を追加していく(コピペ用テンプレート)
  // {
  //   id: "item-xxxx",
  //   type: "",
  //   title: "",
  //   image: "assets/images/shop/xxxx.jpg",
  //   file: "assets/images/shop/xxxx.jpg",
  //   description: "",
  // },
];
