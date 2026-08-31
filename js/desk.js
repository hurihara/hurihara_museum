/* ==========================================================================
   desk.js
   机探索ゲームページ専用のスクリプト。

   やっていること:
   1. data/desk-objects.js の deskObjects 配列から、机の上に
      クリックできるオブジェクトを配置する(位置は%指定)
   2. クリックしたら、その場に説明の吹き出しを表示する
   3. 隠しオブジェクト(hidden: true)を見つけたら、
      ブラウザに記録して(localStorage)、再訪時にもうっすら分かるようにする
   4. 発見数を「◯/◯個 発見」の形で表示する

   ※新しいオブジェクトを追加したいときは、このファイルではなく
     data/desk-objects.js の方を編集してください。
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const frame = document.querySelector("#desk-frame");
  const progressText = document.querySelector("#desk-progress");
  const STORAGE_KEY = "museum-desk-found"; // localStorageに保存するときの名前

  // 今までに見つけた隠しオブジェクトのidリストを読み込む
  let foundIds = [];
  try {
    foundIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    foundIds = [];
  }

  const hiddenTotal = deskObjects.filter((obj) => obj.hidden).length;

  // ---- 1. オブジェクトを配置する ----
  deskObjects.forEach((obj) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "desk-object";
    if (obj.hidden) button.classList.add("is-hidden");
    if (obj.hidden && foundIds.includes(obj.id)) button.classList.add("is-found");

    // 位置とサイズを%で指定(desk-objects.jsの数値をそのまま使う)
    button.style.left = obj.x + "%";
    button.style.top = obj.y + "%";
    button.style.width = obj.width + "%";
    button.style.height = obj.height + "%";

    button.setAttribute("aria-label", obj.hidden ? "?" : obj.title);

    button.addEventListener("click", () => {
      showTooltip(obj, button);

      if (obj.hidden && !foundIds.includes(obj.id)) {
        foundIds.push(obj.id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(foundIds));
        button.classList.add("is-found", "is-sparkling");
        updateProgress();
        setTimeout(() => button.classList.remove("is-sparkling"), 700);
      }
    });

    frame.appendChild(button);
  });

  updateProgress();

  // ---- 2. 吹き出しを表示する ----
  function showTooltip(obj, anchorEl) {
    // 前の吹き出しが残っていたら消す
    const existing = frame.querySelector(".desk-tooltip");
    if (existing) existing.remove();

    const tooltip = document.createElement("div");
    tooltip.className = "desk-tooltip";
    tooltip.innerHTML = `
      <button type="button" class="desk-tooltip__close" aria-label="閉じる">×</button>
      <p class="desk-tooltip__title">${obj.title}</p>
      <p class="desk-tooltip__message">${obj.message}</p>
    `;

    // オブジェクトのすぐ下あたりに表示する
    tooltip.style.left = obj.x + "%";
    tooltip.style.top = (obj.y + obj.height) + "%";

    frame.appendChild(tooltip);
    requestAnimationFrame(() => tooltip.classList.add("is-open"));

    tooltip.querySelector(".desk-tooltip__close").addEventListener("click", () => {
      tooltip.remove();
    });
  }

  // 机の外側をクリックしたら吹き出しを閉じる
  document.addEventListener("click", (event) => {
    const isObject = event.target.closest(".desk-object");
    const isTooltip = event.target.closest(".desk-tooltip");
    if (!isObject && !isTooltip) {
      const existing = frame.querySelector(".desk-tooltip");
      if (existing) existing.remove();
    }
  });

  // ---- 3. 発見数の表示を更新する ----
  function updateProgress() {
    if (hiddenTotal === 0 || !progressText) return;
    const foundCount = deskObjects.filter(
      (obj) => obj.hidden && foundIds.includes(obj.id)
    ).length;
    progressText.textContent = `隠し要素 ${foundCount} / ${hiddenTotal} 発見`;
  }
});
