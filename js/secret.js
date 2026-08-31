/* ==========================================================================
   secret.js
   隠しページ専用のスクリプト。

   やっていること:
   来訪者カウンター風の数字を、ブラウザに記録しながら
   1ずつ増やしていく演出(実際のアクセス解析ではなく、あくまで雰囲気演出)。

   ★カウンターの初期値を変えたいとき★
   下の START_COUNT の数字を書き換えてください。
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "museum-secret-visit-count";
  const START_COUNT = 12480; // ★好きな初期値に変更可能

  let count = Number(localStorage.getItem(STORAGE_KEY));
  if (!count || count < START_COUNT) {
    count = START_COUNT;
  }
  count += 1;
  localStorage.setItem(STORAGE_KEY, String(count));

  const digitsWrap = document.querySelector("#secret-counter-digits");
  if (digitsWrap) {
    const digits = String(count).padStart(6, "0").split("");
    digitsWrap.innerHTML = digits
      .map((d) => `<span class="secret-counter__digit">${d}</span>`)
      .join("");
  }
});
