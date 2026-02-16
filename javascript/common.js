const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/** 現在の実行環境におけるフル西暦（例：2026, 2027...） */
const currentYear = new Date().getFullYear();

// 実行時の年が、あらかじめ設定した開始年よりも進んでいるかを確認する
if (currentYear > 2026) {

  /** 画面上の年を表示させたい要素（IDが copyright-year のもの） */
  const displayTargetElement = document.getElementById('copyright-year');

  // 指定した要素が存在する場合のみ、表示内容を更新する
  if (displayTargetElement) {
    // 開始年（2026）の後に、ハイフンと現在の年を連結して表示を上書きする
    displayTargetElement.textContent = " - " + currentYear;
  }
}
