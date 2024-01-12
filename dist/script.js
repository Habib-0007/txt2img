"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hercai_1 = require("hercai");
var imgDes = document.querySelector(".form input");
var genBtn = document.querySelector(".form button");
var displayBox = document.querySelector(".image-display");
genBtn.addEventListener("click", function () {
    imgDesValue = imgDes.value;
    displayBox.innerHTML = "<section class='spinner'><div></div></section>";
    var url = "https://hercai.onrender.com/v3/text2image?prompt=" + imgDesValue;
    console.log(url);
    /* 	fetch(url)
        .then(res => res.json())
        .then(data => {
            displayBox.innerHTML = "Boy";
        }); */
    var herc = new hercai_1.Hercai();
    herc
        .drawImage({ model: "v3", prompt: "anime girl", negative_prompt: "" })
        .then(function (response) {
        console.log(response.url);
    });
});
