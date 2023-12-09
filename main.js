let api_request = new XMLHttpRequest();
api_request.open('GET', 'https://api.ipdata.co/?api-key=Replace_with_your_key');
api_request.setRequestHeader('Accept', 'application/json');
let ipv4 = document.getElementById("ipv4");
let country = document.getElementById("country");
let city = document.getElementById("city");
let imgg = document.getElementById("imgg");
let time_zone = document.getElementById("time_zone");
let isp = document.getElementById("isp");
let lang = document.getElementById("lang");
let curr = document.getElementById("curr");
let date = document.getElementById("date");
api_request.onreadystatechange = function () {
 if (api_request.readyState === 4) {
        let simple = JSON.parse(api_request.responseText);
        imgg.src = simple.flag;
        ipv4.textContent += " " + simple.ip;
        country.textContent += " " + simple.country_name;
        city.textContent += " " + simple.city;
        time_zone.textContent += " " + simple.time_zone.name;
        isp.textContent += " " + simple.asn.name;
        lang.textContent += " " + simple.languages[0].name;
        curr.textContent += " " + simple.currency.name;
        let date_now = new Date();
        let days = date_now.getDate();
        let month = date_now.getMonth() + 1;
        let year = date_now.getFullYear();
        date.textContent = days + "/" + month + "/" + year;
        }
    };
api_request.send(); 