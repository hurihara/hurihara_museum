/* ==========================================================================
   shop.js
   お土産コーナーページ専用のスクリプト。

   やっていること:
   1. data/shop-items.js の shopItems 配列から、配布カードを自動生成する
   2. 各カードに「ダウンロード」ボタンをつける(クリックでファイルを保存)

   ※新しい配布物を追加したいときは、このファイルではなく
     data/shop-items.js の方を編集してください。
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#shop-grid");

  shopItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "shop-card";

    card.innerHTML = `
      <img class="shop-card__thumb" src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="shop-card__body">
        <span class="shop-card__type">${item.type}</span>
        <h2 class="shop-card__title">${item.title}</h2>
        <p class="shop-card__desc">${item.description}</p>
        <a
          class="shop-card__download"
          href="${item.file}"
          download
        >ダウンロード</a>
      </div>
    `;

    grid.appendChild(card);
  });
});
