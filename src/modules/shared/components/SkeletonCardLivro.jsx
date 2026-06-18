const SkeletonCardLivro = () => {
  return (
    <div className="w-full min-w-80 h-165 max-w-sm bg-gray-50 border border-gray-300 rounded-lg animate-pulse">
      <div className="grid gap-3 px-3 py-5">
        <div className="grid gap-3">
          <div className="w-full h-125 bg-gray-300 rounded-md" />

          <div className="w-24 h-8 bg-gray-300 rounded-full" />
        </div>

        <div className="space-y-3">
          <div className="h-7 bg-gray-300 rounded w-3/4" />
          <div className="h-5 bg-gray-200 rounded w-1/2" />
        </div>
      </div>

      <div className="grid items-start gap-4 p-3 pt-0">
        <div className="h-6 bg-gray-300 rounded w-40" />

        <div className="flex justify-between">
          <div className="h-5 bg-gray-200 rounded w-24" />
          <div className="h-5 bg-gray-200 rounded w-20" />
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>

        <div className="h-12 bg-gray-300 rounded-xl w-full" />
      </div>
    </div>
  );
};

export default SkeletonCardLivro;
