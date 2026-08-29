/* ==========================================================================
   top.js
   トップページ(エントランス)専用のスクリプト。
   今のところ「スクロール誘導クリックで館内案内へ移動する」だけの
   軽い演出のみ。今後、入館時のフェード演出などを足す場合はここに追加する。
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const scrollHint = document.querySelector(".entrance__scroll-hint");
  const hallGuide = document.querySelector("#hall-guide");

  if (scrollHint && hallGuide) {
    scrollHint.addEventListener("click", () => {
      hallGuide.scrollIntoView({ behavior: "smooth" });
    });
  }
});
