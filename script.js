document.getElementById('bankkortnummer').addEventListener('input', function (e) {
    var input = e.target.value.replace(/\D/g, '').substring(0,16);
    var split = input.match(/.{1,4}/g);
    if (split) {
        e.target.value = split.join('-');
    } else {
        e.target.value = '';
    }
});
document.getElementById('utgangsdatum').addEventListener('input', function (e) {
    var input = e.target.value.replace(/\D/g, '').substring(0,4);
    var split = input.match(/.{1,2}/g);
    if (split) {
        e.target.value = split.join('/');
    } else {
        e.target.value = '';
    }
});