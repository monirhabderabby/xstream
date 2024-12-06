const YouMayLike = () => {
  return (
    <div class="lg:w-1/4">
      <h2 class="text-xl font-semibold mb-4">You may like</h2>
      <div class="space-y-4">
        <YouMayLikeCard />
      </div>
    </div>
  );
};

export default YouMayLike;

const YouMayLikeCard = () => {
  return (
    <div class="flex items-start space-x-4">
      <img
        src="https://i.ytimg.com/vi/9kjwMTj8ZD0/hqdefault.jpg"
        alt="Fallout Shelter PC Thumbnail"
        class="w-30 h-20 rounded object-cover"
      />
      <div>
        <h3 class="font-semibold">Fallout Shelter PC - Ep. 1</h3>
        <p class="text-sm text-gray-400">Blitz</p>
        <p class="text-sm text-gray-400">26,389M</p>
      </div>
    </div>
  );
};
