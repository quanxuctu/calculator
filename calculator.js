function tinh() {
    let x = parseFloat(document.getElementById('a').value);
    let y = parseFloat(document.getElementById('b').value);
    let cong = x+y;
    document.getElementById('ketqua').value=cong;
}
function tinh1() {
    let x = parseFloat(document.getElementById('a').value);
    let y = parseFloat(document.getElementById('b').value);
    let tru = x-y;
    document.getElementById('ketqua').value=tru;
}
function tinh2() {
    let x = parseFloat(document.getElementById('a').value);
    let y = parseFloat(document.getElementById('b').value);
    let nhan = x*y;
    document.getElementById('ketqua').value=nhan;
}
function tinh3() {
    let x = parseFloat(document.getElementById('a').value);
    let y = parseFloat(document.getElementById('b').value);
    let chia = x/y;
    document.getElementById('ketqua').value=chia;
}