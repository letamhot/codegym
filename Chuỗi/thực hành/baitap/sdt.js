function checksdt() {
    var sdt = document.getElementById('sdt');
    var filter = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!filter.test(sdt.value)) {
        alert('Hay nhap sdt hop le');
        sdt.focus;
        return false;
    }
    else
    {
        alert('OK roi day, sdt nay hop le.');
    }
}