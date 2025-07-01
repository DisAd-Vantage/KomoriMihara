// ログイン処理のスクリプト
document.getElementById("PrayForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // ご祭神とご祈祷の確認！！
    const SendTo = document.getElementById("SendTo").value;
    const PrayWord = document.getElementById("PrayWord").value;

    switch (SendTo) {

        case "1":  // 本殿
            if (PrayWord === "") { //
                // localStorage.setItem("user", username); 

            } else {
                NormalAction();
            }
            break;

        default: // 何にも当てはまらなかった場合
            NormalAction();
            break;
        }
});

function NormalAction() {
    const NormalAction = document.getElementById("NormalActionText");

    NormalAction.style.transform = "scaleX(1)";

    setTimeout(() => {
        NormalAction.style.transform = "scaleX(0)";
    }, 5000); //5 
}