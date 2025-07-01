// 五行封印の鍵をクリックすると、破壊されるスクリプト

// ページを開いたときにデフォルトで破壊状態
if (checkFIVE === "1"){
    Destroy();
}

// 破壊スクリプト
function Destroy(){
    document.getElementById("FIVE").textContent = "■■■■■■■■■■■■";

    // スタイルを追加
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../css/Darkstyle.css";
    document.head.appendChild(link);
}