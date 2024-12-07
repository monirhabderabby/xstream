const YouMayLike = ({ dictionary }) => {
  return (
    <div className="lg:w-1/4">
      <h2 className="text-xl font-semibold mb-4">{dictionary.youMayLike}</h2>
      <div className="space-y-4">
        <YouMayLikeCard />
      </div>
    </div>
  );
};

export default YouMayLike;

const YouMayLikeCard = () => {
  return (
    <div className="flex items-start space-x-4">
      <img
        src="https://i.ytimg.com/vi/9kjwMTj8ZD0/hqdefault.jpg"
        alt="Fallout Shelter PC Thumbnail"
        className="w-30 h-20 rounded object-cover"
      />
      <div>
        <h3 className="font-semibold">Fallout Shelter PC - Ep. 1</h3>
        <p className="text-sm text-gray-400">Blitz</p>
        <p className="text-sm text-gray-400">26,389M</p>
      </div>
    </div>
  );
};
