import axios from "axios";
import { env } from "../env";
import { Repository } from "../types/Repository";

export async function fetchRepositories(): Promise<Array<Repository>> {
  const response = await axios.get<Repository[]>(env.VITE_GITHUB_API_URL);
  const repos = response.data;

  return repos.map((repo) => {
    return {
      ...repo,
      url: repo.html_url,
    };
  });
}
