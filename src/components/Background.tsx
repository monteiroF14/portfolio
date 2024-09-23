export function Background() {
	return (
		<div className="background-container outline-red-800 outline-2 outline-offset-8 outline-dashed fixed top-0 left-0 bottom-0 right-0 opacity-40">
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
				alt=""
				className="h-70vh w-70vh absolute z-3 right-20"
			/>
			<div className="stars bg-black absolute top-0 bottom-0 left-0 right-0 block z-0"></div>
			<div className="twinkling w-10000px h-full absolute right-0 top-0 bottom-0 z-2 bg-transparent bg-repeat bg-twinkling bg-cover animate-move-background"></div>
			<div className="clouds w-10000px h-full absolute right-0 top-0 bottom-0 z-3 bg-transparent bg-repeat bg-clouds-repeat bg-cover animate-move-background"></div>
		</div>
	);
}
