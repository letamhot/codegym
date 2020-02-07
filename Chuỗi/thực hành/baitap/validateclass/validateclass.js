function checkclass() {
    var c = document.getElementById('class');
    var filter = /^[A-Z]{1,1}[0-9]{4,4}[A-Z]{1,1}$/;
    if (!filter.test(c.value)) {
        alert('Hay nhap class hop le.\nA2345B');
        c.focus;
        return false;
    }
    else
    {
        alert('OK roi day, class nay hop le.');
    }
}