function checkaccount() {
    var a = document.getElementById('account');
    var filter = /^[_a-z0-9]{6,}$/;
    if (!filter.test(a.value)) {
        alert('Hay nhap account hop le.\n123abc_');
        a.focus;
        return false;
    }
    else
    {
        alert('OK roi day, account nay hop le.');
    }
}