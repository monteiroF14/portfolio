import { env } from "./env";
import { name, version } from "../package.json";

export function App() {
  document.title = `${env.VITE_GITHUB_API_USER}'s ${name}`;

  return (
    <>
      <h1 className="text-3xl font-bold underline font-inter">
        {name}: Hello, World
      </h1>
      env: {env.VITE_GITHUB_API_TOKEN}
      version: {version}
    </>
  );
}
