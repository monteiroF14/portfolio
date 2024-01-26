export function SkeletonCard() {
  return (
    <div className="card-skeleton animate-pulse bg-gray-300 rounded-10 p-8 w-full h-full grid place-items-center opacity-60 cursor-pointer hover:opacity-80 hover:backdrop-blur-2">
      <div className="skeleton-line bg-gray-400 h-8 w-4/5 mb-6 rounded-md"></div>
      <div className="skeleton-line bg-gray-400 h-4 w-2/3 mb-4 rounded-md"></div>
      <div className="skeleton-line bg-gray-400 h-4 w-1/2 mb-4 rounded-md"></div>
    </div>
  );
}
