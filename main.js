let text =  { "prompt": "Dog", "save_images": true }
const payload = JSON.stringify(text);

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
url = "http://192.168.43.44:7860/sdapi/v1/txt2img"
xhr.open("POST", url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.getResponseHeader('Content-Type')
xhr.send(payload);
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);

  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
