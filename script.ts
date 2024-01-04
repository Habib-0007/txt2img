var imgDes = document.querySelector(".form input");
var genBtn = document.querySelector(".form button");
var displayBox = document.querySelector(".image-display");

genBtn.addEventListener("click", () => {
	imgDesValue = imgDes.value;
	displayBox.innerHTML = "<section class='spinner'><div></div></section>";
});
