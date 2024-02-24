const PlaceholderPostCard = () => {
  return (
    <article className="flex bg-light-background-light -xl dark:bg-background-light dark:shadow-gray-800/25 skeleton">
      <div className="h-full p-4 animate-pulse">
        <div className="h-5 bg-gray-200 dark:bg-gray-600"></div>
        <div className="mt-4 h-20 bg-gray-200 dark:bg-gray-600"></div>
        <div className="mt-4 h-10 bg-gray-200 dark:bg-gray-600"></div>
        <div className="mt-4 flex justify-end">
          <div className="w-20 h-8 bg-gray-200 dark:bg-gray-600"></div>
        </div>
      </div>
    </article>
  );
};

export default PlaceholderPostCard;
