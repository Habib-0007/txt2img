var imgDes = document.querySelector(".form input");
var genBtn = document.querySelector(".form button");
var displayBox = document.querySelector(".image-display");

genBtn.addEventListener("click", () => {
	imgDesValue = imgDes.value;
	displayBox.innerHTML = "<section class='spinner'><div></div></section>";

	var { Hercai, QuestionData, DrawImageData } = require("hercai");

	const herc = new Hercai(); //new Hercai("your api key"); => Optional

	/* Question Example For TypeScript */
	herc
		.question({ model: "v3-beta", content: "hi, how are you?" })
		.then((response: typeof QuestionData) => {
			console.log(response.reply);
		});

	/* DrawImage Example For TypeScript */
	herc
		.drawImage({ model: "v2", prompt: "anime girl" })
		.then((response: typeof DrawImageData) => {
			console.log(response.url);
		});
});
