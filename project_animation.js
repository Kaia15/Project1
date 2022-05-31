var st_1 = "Welcome you to my 居酒屋";
var st_2 = "Find our hottest dish there, ..."; /* type your text here */
var st_3 = "Our latest menu";
var arr_1 = st_1.split("");
var arr_2 = st_2.split("");
var arr_3 = st_3.split("");

function textLooper() {
    if (arr_1.length > 0 && arr_2.length > 0 && arr_3.length > 0) {
        document.getElementById('welcome_heading').innerHTML += arr_1.shift();
        document.getElementById('search_desc').innerHTML += arr_2.shift();
        document.getElementById('articles_desc').innerHTML += arr_3.shift();
    } else {
        document.getElementById('welcome_heading').innerHTML = "";
        document.getElementById('search_desc').innerHTML = "";
        document.getElementById('articles_desc').innerHTML = "";
        arr_1 = st_1.split("");
        arr_2 = st_2.split("");
        arr_3 = st_3.split("");
    }
    loopTimer = setTimeout('textLooper()', 100);
}

textLooper();