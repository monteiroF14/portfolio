import { version } from "../../package.json";

export function Versioning() {
  return (
    <a
      href="https://github.com/monteiroF14/portfolio-react/releases"
      className="fixed bottom-4 right-4 p-4 bg-zinc-800 rounded-md"
    >
      <p className="font-bold font-inter">V. {version}</p>
    </a>
  );
}
