var imgDes = document.querySelector(".form input");
var genBtn = document.querySelector(".form button");
var displayBox = document.querySelector(".image-display");
genBtn.addEventListener("click", function () {
    imgDesValue = imgDes.value;
    displayBox.innerHTML = "<section class='spinner'><div></div></section>";
    var _a = require("hercai"), Hercai = _a.Hercai, QuestionData = _a.QuestionData, DrawImageData = _a.DrawImageData;
    var herc = new Hercai(); //new Hercai("your api key"); => Optional
    /* Question Example For TypeScript */
    herc
        .question({ model: "v3-beta", content: "hi, how are you?" })
        .then(function (response) {
        console.log(response.reply);
    });
    /* DrawImage Example For TypeScript */
    herc
        .drawImage({ model: "v2", prompt: "anime girl" })
        .then(function (response) {
        console.log(response.url);
    });
});
