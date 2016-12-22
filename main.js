var myNodeList = document.getElementsByTagName('LI');
var i;
for(i = 0 ; i < myNodeList.length; i++){

    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}