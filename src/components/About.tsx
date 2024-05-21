import { Github, Linkedin } from "lucide-react";
import { env } from "env";
import { Link } from "react-router-dom";

export function About() {
	return (
		<section className="h-screen flex flex-col justify-center gap-16 snap-center">
			<div>
				{/* <h2 className="font-inter text-5xl italic leading-none">about</h2> */}
				<h1 className="leading-none text-9xl mb-4">{env.VITE_GITHUB_API_USER}</h1>
				<div className="flex gap-4 items-center">
					<a
						href="https://github.com/monteiroF14"
						target="_blank"
						className="drop-shadow-glow-sm hover:drop-shadow-glow-md"
					>
						<Github strokeWidth="2" size={48} />
					</a>
					<a
						href="https://github.com/monteiroF14"
						target="_blank"
						className="drop-shadow-glow-sm  hover:drop-shadow-glow-md"
					>
						<Linkedin strokeWidth="2" size={48} fill="white" />
					</a>
					<Link
						to={"/portfolio/awesome"}
						className="drop-shadow-glow-sm  hover:drop-shadow-glow-md"
					>
						<button className="text-xl">awesome</button>
					</Link>
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
