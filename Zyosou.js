var Tb = document.getElementsByClassName('autosuggest-textarea__textarea');

function OBWC() {
    var input = Tb[0].value;

    if (input.match('w' || 'W' || '��' || '��' || '�v' || 'LOL' || 'lol' || '�k�n�k' || '������' ||'�呐��')) {

        alert('NG Word Check Please');

    }

}

Tb[0].addEventListener("input", function () { OBWC();},false);
