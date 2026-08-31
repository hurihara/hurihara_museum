/* ==========================================================================
   characters.js (js/characters.js)
   キャラクター設定集ページ専用のスクリプト。

   やっていること:
   1. data/characters.js の characters 配列から、一覧カードを自動生成する
   2. カードをクリックしたら、そのキャラのプロフィールモーダルを開く
   3. profile配列(誕生日・年齢など)は項目数に関わらず自動で並べる

   ※新しいキャラクターを追加したいときは、このファイルではなく
     data/characters.js の方を編集してください。
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#characters-grid");
  const modal = document.querySelector("#character-modal");
  const modalImage = modal.querySelector(".character-modal__portrait img");
  const modalName = modal.querySelector(".character-modal__name");
  const modalReading = modal.querySelector(".character-modal__reading");
  const modalCatchcopy = modal.querySelector(".character-modal__catchcopy");
  const modalProfileList = modal.querySelector(".character-modal__profile-list");
  const modalDescription = modal.querySelector(".character-modal__description");
  const closeButton = modal.querySelector(".character-modal__close");

  // ---- 1. characters配列から一覧カードを生成 ----
  characters.forEach((character) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "character-card";
    card.setAttribute("aria-haspopup", "dialog");
    card.dataset.characterId = character.id;

    card.innerHTML = `
      <span class="character-card__portrait">
        <img src="${character.image}" alt="${character.name}" loading="lazy">
      </span>
      <span class="character-card__name">${character.name}</span>
      <span class="character-card__catchcopy">${character.catchcopy || ""}</span>
    `;

    card.addEventListener("click", () => openModal(character));
    grid.appendChild(card);
  });

  // ---- 2. モーダルを開く処理 ----
  function openModal(character) {
    modalImage.src = character.image;
    modalImage.alt = character.name;
    modalName.textContent = character.name;
    modalReading.textContent = character.reading || "";
    modalCatchcopy.textContent = character.catchcopy || "";
    modalDescription.textContent = character.description || "";

    // profile配列(誕生日・年齢など)を毎回作り直す
    // → 項目数がキャラごとに違っても自動で対応できる
    modalProfileList.innerHTML = "";
    (character.profile || []).forEach((item) => {
      if (!item.value) return; // 値が空の項目は表示しない
      const dt = document.createElement("dt");
      dt.textContent = item.label;
      const dd = document.createElement("dd");
      dd.textContent = item.value;
      modalProfileList.appendChild(dt);
      modalProfileList.appendChild(dd);
    });

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    closeButton.focus();
    document.body.style.overflow = "hidden";
  }

  // ---- 3. モーダルを閉じる処理 ----
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
