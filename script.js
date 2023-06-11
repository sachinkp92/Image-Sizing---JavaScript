let imageEl = document.getElementById("image");
let imageWidthEl = document.getElementById("imageWidth");
let warningMsg = document.getElementById("warningMessage");

let originalImageWidth = 200;
let minImageWidth = 100;
let maxImageWidth = 300;

imageEl.style.width = originalImageWidth + "px";
imageWidthEl.textContent = originalImageWidth + "px";


function onDecrement() {
    if (originalImageWidth <= minImageWidth) {
        warningMsg.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedWidth = originalImageWidth + "px";

        warningMsg.textContent = "";
        imageEl.style.width = updatedWidth;
        imageWidthEl.textContent = updatedWidth;
    }
}


function onIncrement() {
    if (originalImageWidth >= maxImageWidth) {
        warningMsg.textContent = "Too big. Decrease the size of the Image.";
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedWidth = originalImageWidth + "px";

        warningMsg.textContent = "";
        imageEl.style.width = updatedWidth;
        imageWidthEl.textContent = updatedWidth;
    }

}