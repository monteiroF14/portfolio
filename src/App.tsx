import { About } from "components/About";
import { Background } from "components/Background";
import { Projects } from "components/Projects";
import { Versioning } from "components/Versioning";

export function App() {
	document.title = "monteiroF14's portfolio";

	return (
		<main className="max-w-[80%] mx-auto snap-y snap-mandatory">
			<Background />
			<About />
			<Projects />
			<Versioning />
		</main>
	);
}
