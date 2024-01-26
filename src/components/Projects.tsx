import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "../api/fetch-repositories";
import { Card } from "./ui/Card";
import { SkeletonCard } from "./ui/SkeletonCard";

export function Projects() {
  const { data: repos, isLoading } = useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepositories,
  });

  return (
    <section
      className="h-screen flex flex-col justify-center gap-8 snap-center"
      id="projects"
    >
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)}
        {repos?.map((repository) => (
          <Card key={repository.id} repository={repository} />
        ))}
      </div>
    </section>
  );
}
