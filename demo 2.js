

function mainPay() {
    var inputSum = document.getElementById('kreditSumma').value;
    var inputPay = document.getElementById('kreditPay').value;
    var inputFoiz = document.getElementById('kreditFoiz').value;

    if (inputSum != '' && inputPay != '') {
        var x = parseInt(inputSum) - parseInt(inputPay);
        var foizSumma = (x * parseInt(inputFoiz)) / 100;
        document.getElementById('resultSuma').value = x;
        document.getElementById('resultPay').value = foizSumma;
    } else {
        document.getElementById('resultSuma').value = '';
        document.getElementById('resultPay').value = '';
    }
};

var array = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust',
    'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];

function hisob() {
    var inputSum = document.getElementById('kreditSumma').value;
    var inputPay = document.getElementById('kreditPay').value;
    var inputFoiz = document.getElementById('kreditFoiz').value;
    var muddat = document.getElementById('kreditYil').value;
    var allSum = parseInt(inputSum) - parseInt(inputPay);
    var foiz = ((allSum * inputFoiz) / 100) * muddat;
    var foizSum = foiz / 12;
    var oySum = allSum / 12;
    muddat = muddat * 12;

    var allTr = '';

    for (var i = 0; i < muddat; i++) {
        var tr = '<tr><td>' + (i + 1) + '</td><td>' + array[i % 12] + '</td><td>' + oySum + '</td>' +
            '<td>' + foizSum + '</td><td>' + (oySum + foizSum) + '</td></tr>';

        allTr += tr;
    }
    document.getElementById('table').innerHTML = allTr;

}

window.addEventListener("scroll", function () {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 30);
});

function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}


