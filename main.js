var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
url = "http://192.168.43.44:7860"
xhr.open("GET", url);
xhr.send();
console.log('Smt');
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
