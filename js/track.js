// メニューボタンを押すscript
// 一つ目はメニュータブを押すとメニューが開く。
const track = document.getElementById("tickerTrack");
let position = 0;
let requestId;
const speed = 1; // 1pxずつ動く

function animate() {
  position -= speed;
  // コンテンツの幅
  const width = track.scrollWidth / 2;

  if (Math.abs(position) >= width) {
    position = 0; // 端まで行ったらリセット
  }

  track.style.transform = `translateX(${position}px)`;
  requestId = requestAnimationFrame(animate);
}

// アニメーション開始
animate();

// ホバーで停止・再開
track.parentElement.addEventListener("mouseenter", () => {
  cancelAnimationFrame(requestId);
});

track.parentElement.addEventListener("mouseleave", () => {
  animate();
});
