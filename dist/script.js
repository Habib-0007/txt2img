var imgDes = document.querySelector(
	".form input"
);
var genBtn = document.querySelector(
	".form button"
);
var displayBox = document.querySelector(
	".image-display"
);

document.body.style.height = `${window.innerHeight}px`;

genBtn.addEventListener(
	"click",
	function () {
		imgDesValue = imgDes.value;
		displayBox.innerHTML =
			"<section class='spinner'><div></div></section>";

		fetch(
			"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
			{
				method: "POST",
				headers: {
					"content-type":
						"application/json",
				},
				body: JSON.stringify({
					inputs: imgDesValue,
				}),
			}
		)
			.then(res => res.blob())
			.then(blob => {
				console.log(blob);
				displayBox.innerHTML = "";
				const img =
					document.createElement("img");
				img.src =
					window.URL.createObjectURL(
						blob
					);
				displayBox.appendChild(img);
			});
	}
);
