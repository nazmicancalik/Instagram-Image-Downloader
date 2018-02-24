const now = new Date();
console.log(now + ' Instagram Downloader::Downloader is initializing...');

let a = document.createElement('a');
let images = document.getElementsByTagName('img');
let openedImage = images[images.length - 1];
let parentEl = document.getElementsByClassName('_si7dy');


let downloadButton = document.createElement("Button");
downloadButton.setAttribute("type", "button");
downloadButton.setAttribute("value", "Download");
downloadButton.setAttribute("style",`display: flex;
  overflow: hidden;
  margin: 10px;
  padding: 12px 12px;
  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;
  color: #fff;
  border: 0 none;
  border-radius: 50px;
  font-size: 25px;
  font-family:Monospace;
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
  background-color:#416dea;
  justify-content: center;
  align-items: center;
  flex: 0 0 60px;
  
  box-shadow: 2px 5px 10px #999999;`);
downloadButton.innerHTML = 'Download';

let div = document.createElement("div");
div.appendChild(downloadButton);
//document.body.appendChild(div);
parentEl[0].appendChild(div.firstChild);

downloadButton.addEventListener("click", function() {
  a.href = openedImage.src;
  a.download = "output.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

window.addEventListener('popstate', function(event) {
  document.body.removeChild(div);
}, false);
