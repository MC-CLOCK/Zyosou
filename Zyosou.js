//マストドンのテクストボックスのクラス
var TootTextBox = document.getElementsByClassName('autosuggest-textarea__textarea');
//マストドンのTootボタンのクラス
var TootButton = document.getElementsByClassName('button ');

var Alert = 0;//草が存在しているか

function IsThereGrass() {
//*|ＬＯＬ|ｌｏｌ|*/
    var TextBoxValue = TootTextBox[0].value;

    if (TextBoxValue.match(/w|lol/i)) {

        Alert = 1;

    }

    if (TextBoxValue.match(/草/)) {

        Alert = 1;

    }

    if (TextBoxValue.match(/ｗ/)) {

        Alert = 1;

    }

    if (TextBoxValue.match(/Ｗ/)) {

        Alert = 1;

    }

    if (Alert){

        TootTextBox[0].style.color = "#ff0000";
        Alert = 0;

    } else {
        TootTextBox[0].style.color = "#000000";
    }

}

//function StopAlertOn0() {

//}

//TootTextBoxにイベントOnInputを追加
TootTextBox[0].addEventListener("input", function () { IsThereGrass(); }, false);
//TootButtonにイベントOnClickを追加
//TootButton[0].addEventListener("click", function () { StopAlertOn0();},false);
