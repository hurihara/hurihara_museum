/* ==========================================================================
   works.js
   個展に展示する「作品データ」だけをまとめたファイル。

   ★新しい作品を追加したいとき★
   下の works 配列に、同じ形の{ }のかたまりを1つコピペして増やしてください。
   画像ファイルは assets/images/works/ フォルダに入れて、
   image の値をそのファイル名に書き換えればOKです。
   ========================================================================== */

const works = [
  {
    id: "work-01",                          // 他と重複しないIDならなんでもOK
    title: "ｲｰﾌﾁｬﾝ",                           // 作品名(★差し替えてください)
    year: "2026",                            // 制作年
    image: "assets/images/works/if.webp", // 画像ファイルのパス
    // キャプション(展示解説)。改行したい場合は "" の中で \n を使う
    comment:
      "初めて色付きでｲｰﾌﾁｬﾝを描いた思い出",
  },
  {
    id: "work-02",
    title: "ミント・エスケープ",
    year: "2026",
    image: "assets/images/works/nissou.webp",
    comment:
      "空の81番地のｲｰﾌﾁｬﾝです。\nｲｰﾌﾁｬﾝは業務外ぼーっとしてそうでいい",
  },
  {
    id: "work-03",
    title: "ばれちゃった！",
    year: "2026",
    image: "assets/images/works/geltu.webp",
    comment:
      "🍳🐱",
  },
 {
    id: "work-04",
    title: "thanks",
    year: "2026",
    image: "assets/images/works/thanks.webp",
    comment:
      "フォロワー様100人達成記念に描いた作品です。\nこれからも応援よろしくお願いします。",
  },

  // ↓ ここに新しい作品を追加していく(コピペ用テンプレート)
  // {
  //   id: "work-04",
  //   title: "",
  //   year: "",
  //   image: "assets/images/works/sample-04.jpg",
  //   comment: "",
  // },
];
