const StreamCard = ({ data }) => {
  return (
    <div class="rounded-lg overflow-hidden bg-color-gray">
      <img
        src={data?.thumbnail}
        alt="Stream 1"
        class="w-full h-40 object-cover"
      />
      <div class="p-2">
        <p class="font-semibold">{data?.title}</p>
        <p class="text-sm text-gray-400">{data?.channelTitle}</p>
      </div>
    </div>
  );
};

export default StreamCard;
