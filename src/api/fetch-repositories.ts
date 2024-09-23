import axios from "axios";
import { Repository } from "../types/Repository";

const API_URL = "https://api.github.com/users/monteiroF14/repos";

export async function fetchRepositories(): Promise<Array<Repository>> {
	const response = await axios.get<Repository[]>(API_URL);
	const repos = response.data;

	return repos.map((repo) => {
		return {
			...repo,
			url: repo.html_url,
		};
	});
}
