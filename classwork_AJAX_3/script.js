//GET, PUT, POST, PATCH
//async await

//NBU Example
const XHR = new XMLHttpRequest();

const btnSend = document.getElementById("btnSend");
const currency = document.getElementById("currency"); //select
const ex_date = document.getElementById("ex_date"); //exchange  date
const main = document.getElementsByTagName("main")[0];

btnSend.addEventListener('click', function() {
    console.log(`Currency: ${currency.value}`);
    console.log(`Ex_date: ${ex_date.value}`);

    //const nbuDate = ex_date.value.split("-").join("");
    const nbuDate = ex_date.value.replaceAll("-", ""); //due to NBU API

    //"YYYY-MM-DD" --> string
    //split("-") --> [3] [0] YYYYY [1] MM [2] DD
    //join("") --> string
    const URI  =  `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${nbuDate}&json`;
    console.log(`URI: ${URI}`);

    XHR.open("GET", URI);

    XHR.addEventListener("readystatechange", function() {
        //console.log(`${new Date()} //${XHR.readyState}`);
        if(XHR.readyState === 4) {
            //txt, rate, cc
            const data = JSON.parse(XHR.responseText)[0]; //JSON -> JS Object
            main.innerHTML = `<h2>${data.txt} / ${data.cc} ${data.rate}</h2>`;
        }
    });

    XHR.send();

});

//const currency = "USD";
//const ex_date = "20260913"; //YYYYMMDD

//const URI  =  `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${ex_date.value}&json`;

//GET, PUT, POST, PATCH
// XHR.open("GET", URI);
//
// XHR.addEventListener("readystatechange", function() {
//     //console.log(`${new Date()} //${XHR.readyState}`);
//     if(XHR.readyState === 4) {
//         //txt, rate, cc
//         const data = JSON.parse(XHR.responseText)[0]; //JSON -> JS Object
//         console.log(XHR.responseText);
//         main.innerHTML = `<h2>${data.txt} / ${data.cc} ${data.rate}</h2>`;
//     }
// });
//
// XHR.send();
