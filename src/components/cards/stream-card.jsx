import Link from "next/link";

const StreamCard = ({ data }) => {
  return (
    <Link
      href={`/videos/${data.videoId}`}
      className="rounded-lg overflow-hidden bg-color-gray"
    >
      <img
        src={data?.thumbnail}
        alt="Stream 1"
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">{data?.title}</p>
        <p className="text-sm text-gray-400">{data?.channelTitle}</p>
      </div>
    </Link>
  );
};

export default StreamCard;
