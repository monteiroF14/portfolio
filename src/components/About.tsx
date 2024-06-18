export function About() {
	return (
		<section className="h-screen flex flex-col justify-center gap-16 snap-center">
			<div>
				<h1 className="leading-none text-9xl mb-4">monteiroF14</h1>
				<div className="flex gap-4 items-center">
					<a
						href="https://github.com/monteiroF14"
						target="_blank"
						className="drop-shadow-glow-sm hover:drop-shadow-glow-md"
					>
						<img src="assets/github/github-mark-white.svg" alt="Github Logo" className="w-12" />
					</a>
				</div>
			</div>

			<ul className="z-50">
				<li className="font-inter text-3xl font-bold list-inside list-disc">
					<a href="#projects">projects</a>
				</li>
				<li className="font-inter text-3xl font-bold list-inside list-disc">
					<a href="#projects">technologies</a>
				</li>
			</ul>
		</section>
	);
}
