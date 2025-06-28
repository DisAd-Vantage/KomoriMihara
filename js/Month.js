// メニューボタンを押すscript
// 一つ目はメニュータブを押すとメニューが開く。
const MonthArray = ["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleven","Twelve"];

MonthArray.forEach(function(Month) {
    const Monthbtn = document.getElementById(Month);
    const MonthContent = document.getElementById(Month + 'Month');

    Monthbtn.addEventListener("click", () => OnOffEvent(Monthbtn, MonthContent));
});

function OnOffEvent(Monthbtn, MonthContent) {
    const offElements = document.querySelectorAll('.ON');
    const monthsoffElements = document.querySelectorAll('.MonthsON');

    offElements.forEach((Element) => {
        Element.classList.remove('ON');
        Element.classList.add('OFF');
    });

    monthsoffElements.forEach((monthsElement) => {
        monthsElement.classList.remove('MonthsON');
        monthsElement.classList.add('Months');
    });


    MonthContent.classList.remove('OFF');
    MonthContent.classList.add('ON');

    Monthbtn.classList.remove('Months');
    Monthbtn.classList.add('MonthsON');
}