const Footer = () => {
	return (
		<footer className="w-full flex justify-center items-center">
			<div className="relative w-4/5">
				<textarea
					rows="3"
					placeholder="Describe the image to be generated"
					className="w-full border-2 border-black caret-purple-500 pl-2 py-2
					rounded-md text-lg pr-16 hover:border-purple-500"
				></textarea>
				<button
					className="bg-purple-500 border-2 border-white text-white py-3 px-4 rounded-full text-2xl
				absolute top-2 right-2 hover:bg-white hover:text-purple-500
				hover:border-purple-500"
				>
					<i className="far fa-paper-plane"></i>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
