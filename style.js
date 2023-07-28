// スライドショーの自動切り替え用のインデックスを初期化
let slideIndex = 0;

// スライドを表示する関数
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // 全てのスライドを非表示にする
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // インデックスを次に進める
  slideIndex++;
  
  // インデックスがスライドの数より大きい場合は最初に戻す
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // 次のスライドを表示する
  slides[slideIndex - 1].style.display = "block";
  
  // 2秒後に次のスライドを表示する
  setTimeout(showSlides, 2000); // 2秒（2000ミリ秒）ごとに切り替え
}

// ページ読み込み時にスライドショーを開始する
window.onload = function() {
  showSlides();
};
