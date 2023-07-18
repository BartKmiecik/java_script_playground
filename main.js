var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
url = "http://192.168.43.44:7860/controlnet/model_list"
xhr.open("GET", url);
xhr.send();
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);

  } else {
    console.log(`Error: ${xhr.status}`);
  }
};


// Function to download data to a file
// function download(data, filename, type) {
//     var file = new Blob([data], {type: type});
//     if (window.navigator.msSaveOrOpenBlob) // IE10+
//         window.navigator.msSaveOrOpenBlob(file, filename);
//     else { // Others
//         var a = document.createElement("a"),
//                 url = URL.createObjectURL(file);
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         setTimeout(function() {
//             document.body.removeChild(a);
//             window.URL.revokeObjectURL(url);  
//         }, 0); 
//     }
// }

//   saveResponseToFile(url);