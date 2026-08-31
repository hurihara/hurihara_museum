/* ==========================================================================
   characters.js
   キャラクター設定集に載せる「キャラクターデータ」だけをまとめたファイル。

   ★新しいキャラクターを追加したいとき★
   下の characters 配列に、同じ形の{ }のかたまりを1つコピペして増やしてください。
   profile の中の項目(誕生日・年齢など)は自由に増減できます。
   ラベル名も自由に変えてOKです(例:「好きなもの」「口癖」なども追加可)。
   ========================================================================== */

const characters = [
  {
    id: "char-01",
    name: "ｲｰﾌﾁｬﾝ",                 // 名前(★差し替えてください)
    reading: "いーふちゃん",           // ふりがな
    catchcopy: "ふわもふ",   // 二つ名・キャッチコピー
    image: "assets/images/characters/ihu.webp", // 立ち絵画像

    // プロフィール項目。{ label, value } の組を自由に増減できます。
    profile: [
      { label: "年齢", value: "ひみつ" },
      { label: "身長", value: "増減可能" },
    ],

    // 長めの設定文・説明文
    description:
      "ふわふわもふもふの私のかわいい相棒。",
  },
  {
    id: "char-02",
    name: "邪悪はら",
    reading: "じゃあくはら",
    catchcopy: "🍳🐱",
    image: "assets/images/characters/sample-02.png",
    profile: [
      { label: "年齢", value: "ひみつ" },
      { label: "身長", value: "増減可能" },
    ],
    description: "フライパンを盗んで集めるのが趣味の邪悪な怪異。",
  },

  {
    id: "char-03",
    name: "ｲｰﾌﾁｬﾝ(空の81番地)",
    reading: "いーふちゃん(そらの81ばんち)",
    catchcopy: "空の81番地のｲｰﾌﾁｬﾝ",
    image: "assets/images/characters/ihuchan.webp",
    profile: [
      { label: "年齢", value: "あらまあ！乙女に年齢を聞くもんじゃないわよ" },
      { label: "身長", value: "187㎝" },
    ],
    description: "空の81番地の病院にて院長を勤めているｲｰﾌﾁｬﾝ。\n女性的なしゃべり方をする、うるさい人物。",
  },

  {
    id: "char-04",
    name: "白峰玄(空の81番地)",
    reading: "しらみねげん(そらの81ばんち)",
    catchcopy: "適当庭師",
    image: "assets/images/characters/siramine.webp",
    profile: [
      { label: "年齢", value: "20代～30代" },
      { label: "身長", value: "190㎝" },
    ],
    description: "空の81番地の庭師として働く、適当な性格の人物。\n人への配慮があんまりないうるさい人物。",
  },

  // ↓ ここに新しいキャラクターを追加していく(コピペ用テンプレート)
  // {
  //   id: "char-03",
  //   name: "",
  //   reading: "",
  //   catchcopy: "",
  //   image: "assets/images/characters/sample-03.png",
  //   profile: [
  //     { label: "誕生日", value: "" },
  //   ],
  //   description: "",
  // },
];
