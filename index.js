
var first;

function getFirst () {
    first= parseInt(document.getElementById('entry').value);
    document.getElementById('entry').value = '';
    return first;
}
    
var second ;

function getSecond() {
    second = parseInt(document.getElementById('entry').value);
    return second;
}


function result () {
 document.getElementById('entry').value = first + getSecond();
}