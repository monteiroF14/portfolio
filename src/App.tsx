import { About } from "./components/About";
import { Background } from "./components/Background";
import { Projects } from "./components/Projects";
import { Versioning } from "./components/Versioning";
import { env } from "./env";

export function App() {
  document.title = `${env.VITE_GITHUB_API_USER}'s ${env.VITE_GITHUB_API_USER}`;

  return (
    <main className="max-w-[80%] mx-auto snap-y snap-mandatory">
      <Background />
      <About />
      <Projects />
      <Versioning />
    </main>
  );
}
