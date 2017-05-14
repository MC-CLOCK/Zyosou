var Tb = document.getElementsByClassName('autosuggest-textarea__textarea');

function OBWC() {
    var input = Tb[0].value;

    if (input.match('w' || 'W' /*|| '草' || 'ｗ' || 'Ｗ' || 'LOL' || 'lol' || 'ＬＯＬ' || 'ｌｏｌ' ||'大草原'*/)) {

        alert('NG Word Check Please');

    }

}

Tb[0].addEventListener("input", function () { OBWC();},false);
