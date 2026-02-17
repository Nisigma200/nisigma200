/**
 * カテゴリの選択状態に合わせて、カードの表示・非表示クラスを切り替える
 * @param {string} category - フィルタリングするカテゴリ名
 */
function filterSelection(category) {
    /** ページ上の全ての制作物カード（div） */
    const cards = document.querySelectorAll(".card-blog-a");

    cards.forEach((card) => {
        // カテゴリが「全て」またはカードのクラスと一致する場合
        if (category === "all" || card.classList.contains(category)) {
            // 【出現】
            // クラスを消すと width 0s により一瞬で枠が確保される。
            // その後、見た目だけ 0.4s かけてふわっと現れる。
            card.classList.remove("is-hidden");
        } else {
            // 【消失】
            // クラスを足すと 0.4s かけて見た目が消える。
            // delay(0.4s) 設定により、見た目が消えきった瞬間に幅が一瞬で 0 になる。
            card.classList.add("is-hidden");
        }
    });
}

/**
 * フィルタリングボタンのアクティブ表示（色など）を更新する
 * @param {HTMLElement} activeBtn - クリックされたボタン
 */
const updateButtonUI = (activeBtn) => {
    /** ページ内の全フィルタボタン */
    const allButtons = document.querySelectorAll(".filter-btn");
    allButtons.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
};

/** 文書の読み込み完了時に実行する初期設定 */
document.addEventListener("DOMContentLoaded", () => {
    /** フィルタリングに使用する全てのボタン要素 */
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            /** ボタンの data-filter 属性に指定されたカテゴリ名 */
            const targetFilter = btn.getAttribute("data-filter");
            filterSelection(targetFilter);
            updateButtonUI(btn);
        });
    });
});
