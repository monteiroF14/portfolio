import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "api/fetch-repositories";
import { SkeletonCard } from "components/ui/SkeletonCard";
import { Card } from "components/ui/Card";

export function Projects() {
	const {
		data: repos,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["repos"],
		queryFn: fetchRepositories,
	});

	if (isError) {
		return (
			<section>
				<span className="text-red-400 font-sm">error while fetching repositories</span>
			</section>
		);
	}

	return (
		<section className="h-screen flex flex-col justify-center gap-8 snap-center" id="projects">
			<div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{isLoading && Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)}
				{repos?.map((repository) => (
					<Card key={repository.id} repository={repository} />
				))}
			</div>
		</section>
	);
}
