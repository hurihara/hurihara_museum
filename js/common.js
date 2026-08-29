/* ==========================================================================
   common.js
   全ページで読み込む共通スクリプト。
   「このページ専用の処理」は書かず、複数ページで使い回すものだけをここに置く。
   ========================================================================== */

// ページ読み込み時に、現在のページに対応するナビリンクへ
// aria-current="page" を自動でつける(手作業でつけ忘れても大丈夫なように)
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
});
