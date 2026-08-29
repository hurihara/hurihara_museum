/* ==========================================================================
   gallery.js
   個展ページ専用のスクリプト。

   やっていること:
   1. data/works.js の works 配列から、作品カードを自動でHTML生成する
   2. カードをクリックしたら、その作品のモーダル(詳細キャプション)を開く
   3. 閉じるボタン/背景クリック/Escキーでモーダルを閉じる

   ※新しい作品を追加したいときは、このファイルではなく
     data/works.js の方を編集してください。
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#gallery-grid");
  const modal = document.querySelector("#artwork-modal");
  const modalImage = modal.querySelector(".artwork-modal__image-wrap img");
  const modalTitle = modal.querySelector(".artwork-modal__title");
  const modalMeta = modal.querySelector(".artwork-modal__meta");
  const modalComment = modal.querySelector(".artwork-modal__comment");
  const closeButton = modal.querySelector(".artwork-modal__close");

  // ---- 1. works配列から作品カードを生成 ----
  works.forEach((work) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "artwork-card";
    card.setAttribute("aria-haspopup", "dialog");
    card.dataset.workId = work.id;

    card.innerHTML = `
      <span class="artwork-card__frame">
        <img src="${work.image}" alt="${work.title}" loading="lazy">
      </span>
      <span class="artwork-card__plate">
        <span class="artwork-card__plate-title">${work.title}</span>
        <span class="artwork-card__plate-year">${work.year}</span>
      </span>
    `;

    card.addEventListener("click", () => openModal(work));
    grid.appendChild(card);
  });

  // ---- 2. モーダルを開く処理 ----
  function openModal(work) {
    modalImage.src = work.image;
    modalImage.alt = work.title;
    modalTitle.textContent = work.title;
    modalMeta.textContent = work.year;
    modalComment.textContent = work.comment;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    closeButton.focus();
    document.body.style.overflow = "hidden"; // 背景スクロールを止める
  }

  // ---- 3. モーダルを閉じる処理 ----
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeModal);

  // 背景(暗い部分)をクリックしたら閉じる
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Escキーで閉じる
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
