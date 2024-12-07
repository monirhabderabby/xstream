import { getAllData } from "@/lib/util";
import Link from "next/link";
import StreamCard from "./cards/stream-card";

const StreamOfTheDay = () => {
  const data = getAllData();
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Streams of the day</h2>
        <Link
          href="/videos"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.slice(0, 12).map((video) => (
          <StreamCard key={video?.title} data={video} />
        ))}
      </div>
    </section>
  );
};

export default StreamOfTheDay;
