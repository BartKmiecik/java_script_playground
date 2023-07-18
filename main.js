function generate_img(){
  console.log("Start generating")
  let text =  { "prompt": "Dog", "save_images": true }
  const payload = JSON.stringify(text);
  var imgElement = document.getElementById('myImage');
  
  //var XMLHttpRequest = require('xhr2');
  var xhr = new XMLHttpRequest();
  url = "http://192.168.43.44:7860/sdapi/v1/txt2img"
  xhr.open("POST", url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.getResponseHeader('Content-Type')
  xhr.send(payload);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //console.log(JSON.parse(xhr.response).images);
      var base64Image = JSON.parse(xhr.response).images;
      imgElement.src = base64Image;
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}

function send_log(){
  console.log("Fuck you")
}

send_log()

const btn = document.getElementById("btn");
btn.addEventListener("click", generate_img);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", send_log);

send_log()