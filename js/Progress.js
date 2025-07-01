// 1.ゲーム進行度スクリプト
const ProgressPoint = localStorage.getItem("ProgressPoint");
const Message = InMessageSet(ProgressPoint);
LINEMessage(Message);

// もし進行度ProgressPointがnullなら、進行度ProgressPointを追加
if (localStorage.getItem("ProgressPoint") !== null){
    // nullでなければ何もしない。
} else {
    // nullであれば「0」を追加。
    localStorage.setItem("ProgressPoint", "0");
}

// 五行封印の解除状況を確認


// 2.ページに来た時に表示されるメッセージ内容のセット
function InMessageSet(ProgressPoint) {

    document.getElementById("CountFIVE").textContent = `お社について、五行封印により封印済み（` + localStorage.getItem("CountFIVE") + `/5）`;
    
    const Message = [];

    // 進行度ProgressPointを確認
    switch (ProgressPoint) {

        case "1":  // 進行度 1なら
                Message.push("おかえりなさい");
                Message.push("今が西暦何年か分かった？");
                break;

        case "2":  // 進行度 2なら
                Message.push("おかえりなさい");
                Message.push("清十郎様の最後の言葉は分かった？");
                break;

        case "3":  // 進行度 3なら
                Message.push("おかえりなさい");
                Message.push("五行封印について、何か分かった？");
                Message.push("もしかしたら、文献に残ってたりしないかな？");
                break;

        case "4":  // 進行度 4なら
                Message.push("おかえりなさい");
                Message.push("まだ封印が残ってるみたい……");
                Message.push("封印について調べてくれないかな？");
                break;

        default: // 何にも当てはまらなかった場合
            ;
        }

        return Message;
}

// 3.祈祷ボタンを押したときのスクリプト
document.getElementById("PrayForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const PrayWord = document.getElementById("PrayWord").value;

    const ProgressPoint = localStorage.getItem("ProgressPoint");
    const Message = PrayMessageSet(PrayWord,ProgressPoint);
    LINEMessage(Message);

    // inputを空にする
    document.getElementById("PrayWord").value = "";
});

// 4.祈祷時メッセージ内容のセット
function PrayMessageSet(PrayWord,ProgressPoint) {

    const Message = [];

    // 進行度ProgressPointを確認
    switch (ProgressPoint) {

        case "0":  // 進行度 0なら
            if (PrayWord !== "") {
                Message.push("………久しぶりの人間ね");
                Message.push("私のこと助けてくれない？実は私、ここから出られなくて…外の様子が分からないの");
                Message.push("あなたがリンクを繋いでる間だけメッセージが送れるみたい…あなただけが頼りなの…");
                Message.push("今が西暦何年か教えてほしい");
                localStorage.setItem("ProgressPoint", "1");
            }
            break;

        case "1":  // 進行度 1なら
            if (PrayWord === "2025年" || PrayWord === "2025") {
                // 
                Message.push("2025年!??…あれから随分と経っているのね");
                Message.push("月日が流れるのは早いわね");
                Message.push("清十郎様ももう…");
                Message.push("ねえ、清十郎様の最後の言葉を調べてくれない？");
                localStorage.setItem("ProgressPoint", "2");
            } else {
                Message.push(PrayWord + `?…そうだったかしら…`);
                Message.push("もう一度清十郎様の最後の言葉を調べてみて");
            }
            break;

        case "2":  // 進行度 2なら
            if (PrayWord === "籠を返せ") {
                // 
                Message.push("清十郎様……");
                Message.push("……私のために怒ってくださっていたのですね");
                Message.push("清十郎様に会いたい……私を封印から解いてくれないかな");
                Message.push("封印を解くには、五行封印を破壊するしかないのだけれど");
                Message.push("五行封印について調べて、五行が宿っている物の名前を教えて");
                localStorage.setItem("ProgressPoint", "3");
                localStorage.setItem("CountFIVE", 0); // 五行のカウントに0を定義
            } else {
                Message.push(PrayWord + `?…清十郎様がそんなことを言うのかな……`);
                Message.push("もう一度考えてみて");
            }
            break;

        case "3":  // 進行度 3なら
            // 祈祷内容を見て判断
            switch (PrayWord){
                case "水脈社":
                    if (localStorage.getItem("Mio") === null){
                        localStorage.setItem("Mio", "1");
                        // 五行封印をカウントアップ
                        const CountFIVE = parseInt(localStorage.getItem("CountFIVE"), 10) + 1;
                        localStorage.setItem("CountFIVE", CountFIVE);
                        
                        // 破壊時のセリフ
                        Message.push(PrayWord + `……`);
                        Message.push("……破壊したよ！次はどれだろう？");
                    } else {
                        Message.push(PrayWord + `はもう破壊したよ`);
                    }
                    break;
                case "篝火社":
                    if (localStorage.getItem("Kagaribi") === null){
                        localStorage.setItem("Kagaribi", "1");
                        // 五行封印をカウントアップ
                        const CountFIVE = parseInt(localStorage.getItem("CountFIVE"), 10) + 1;
                        localStorage.setItem("CountFIVE", CountFIVE);
                        
                        // 破壊時のセリフ
                        Message.push(PrayWord + `……`);
                        Message.push("……破壊したよ！次はどれだろう？");
                    } else {
                        Message.push(PrayWord + `はもう破壊したよ`);
                    }
                    break;
                case "磐根社":
                    if (localStorage.getItem("Iwanene") === null){
                        localStorage.setItem("Iwanene", "1");
                        // 五行封印をカウントアップ
                        const CountFIVE = parseInt(localStorage.getItem("CountFIVE"), 10) + 1;
                        localStorage.setItem("CountFIVE", CountFIVE);
                        
                        // 破壊時のセリフ
                        Message.push(PrayWord + `……`);
                        Message.push("……破壊したよ！次はどれだろう？");
                    } else {
                        Message.push(PrayWord + `はもう破壊したよ`);
                    }
                    break;
                case "風渡社":
                    if (localStorage.getItem("Kazehashiri") === null){
                        localStorage.setItem("Kazehashiri", "1");
                        // 五行封印をカウントアップ
                        const CountFIVE = parseInt(localStorage.getItem("CountFIVE"), 10) + 1;
                        localStorage.setItem("CountFIVE", CountFIVE);
                        
                        // 破壊時のセリフ
                        Message.push(PrayWord + `……`);
                        Message.push("……破壊したよ！次はどれだろう？");
                    } else {
                        Message.push(PrayWord + `はもう破壊したよ`);
                    }
                    break;
                case "御神木":
                    if (localStorage.getItem("Goshinboku") === null){
                        localStorage.setItem("Goshinboku", "1");
                        // 五行封印をカウントアップ
                        const CountFIVE = parseInt(localStorage.getItem("CountFIVE"), 10) + 1;
                        localStorage.setItem("CountFIVE", CountFIVE);
                        
                        // 破壊時のセリフ
                        Message.push(PrayWord + `……`);
                        Message.push("……破壊したよ！次はどれだろう？");
                    } else {
                        Message.push(PrayWord + `はもう破壊したよ`);
                    }
                    break;
                default:
                    Message.push(PrayWord + `……`);
                    Message.push("……どうやら五行ではないみたい……");
                    Message.push("もう一度考えてみて");
                    break;
                }

            if (parseInt(localStorage.getItem("CountFIVE"), 10) === 5) {
                // 
                Message.push("やった!……五行封印が解けたみたい!!");
                Message.push("あれ?");
                Message.push("まだ封印が残ってる……なにこれ……?");
                localStorage.setItem("ProgressPoint", "4");
            }
            break;

        default: // 何にも当てはまらなかった場合
            if (PrayWord === "分からない" || PrayWord === "わからない") {
                // 
                Message.push("分からないか…でも、諦めないで頑張ってほしいな");
            }
            break;
        }

        return Message;
}

// 5.LINE風メッセージの表示
function LINEMessage(Message) {
    const LINEMessage = document.getElementById("LINEMessage");
    LINEMessage.style.marginTop = "-20vw";

    // MessageのArrayをすべてループ処理
    Message.forEach(function(item, index){

        setTimeout(() => {
            document.getElementById("MessageText").textContent = item;
            LINEMessage.style.marginTop = "1vw";
        }, (6000 * index) + 500); //5 

        setTimeout(() => {
            LINEMessage.style.marginTop = "-20vw";
        }, 6000 * (index + 1)); //4.5秒ごと

    });
}

// 6.ゲーム進行度のリセット(デバッグ用)
document.getElementById("ProgressReset").addEventListener("click", function(){
    localStorage.clear();
});