import { Hercai, QuestionData, DrawImageData } from "hercai";
var imgDes = document.querySelector(".form input");
var genBtn = document.querySelector(".form button");
var displayBox = document.querySelector(".image-display");

genBtn.addEventListener("click", () => {
	imgDesValue = imgDes.value;
	displayBox.innerHTML = "<section class='spinner'><div></div></section>";

	var url = "https://hercai.onrender.com/v3/text2image?prompt=" + imgDesValue;
	console.log(url);

	/* 	fetch(url)
		.then(res => res.json())
		.then(data => {
			displayBox.innerHTML = "Boy";
		}); */

	const herc = new Hercai(); 
	herc
		.drawImage({ model: "v3", prompt: "anime girl", negative_prompt: "" })
		.then((response: DrawImageData) => {
			console.log(response.url);
		});
});
