// 汎用スクリプト置き場

//  メニューボタンを押すscript
// 一つ目はメニュータブを押すとメニューが開く。
const Menubtn = document.getElementById('Menubtn');
const MenuTabBar = document.getElementById('MenuTabBar');

Menubtn.addEventListener("click", () => toggleMenu(Menubtn, MenuTabBar));

function toggleMenu(Menubtn, MenuTabBar) {
    if (Menubtn.classList.contains("MenubtnOFF")) {
        // メニュータブを開く
        Menubtn.classList.remove('MenubtnOFF');
        Menubtn.classList.add('MenubtnON');

        MenuTabBar.classList.remove('MenuTabBarOFF');
        MenuTabBar.classList.add('MenuTabBarON');
    } else {
        // メニュータブを閉じる
        Menubtn.classList.remove('MenubtnON');
        Menubtn.classList.add('MenubtnOFF');
        
        MenuTabBar.classList.remove('MenuTabBarON');
        MenuTabBar.classList.add('MenuTabBarOFF');         
    }
}
