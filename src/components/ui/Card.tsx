import { getCardColor } from "../../lib/get-card-color";
import { Repository } from "../../types/Repository";

type CardProps = {
	repository: Repository;
};

export function Card({ repository }: CardProps) {
	const cardColor = getCardColor(repository.language);

	return (
		<a
			href={repository.homepage ?? repository.url}
			target="_blank"
			className={`bg-[${cardColor}] rounded-lg p-8 w-full h-full grid place-items-center opacity-60 cursor-pointer hover:opacity-80 hover:backdrop-blur-2`}
		>
			<h2>{repository.full_name}</h2>
		</a>
	);
}
